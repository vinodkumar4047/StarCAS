import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, Component} from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { Popover } from 'primeng/popover';
import { RadioButton } from 'primeng/radiobutton';
import { SelectModule } from 'primeng/select';

@Component({
changeDetection:ChangeDetectionStrategy.OnPush,
  selector: 'app-report-generation',
  imports: [InputTextModule, FormsModule, CommonModule, ButtonModule, ReactiveFormsModule,
    SelectModule, FloatLabel, DatePicker, RadioButton, Popover],
  templateUrl: './report-generation.component.html',
  styleUrl: './report-generation.component.scss'
})
export class ReportGenerationComponent {
  reportGenForm: any;
  routeData: any = history.state;
  uploadedFiles: any[] = [];
  InstIDOpt: any = [
    { name: 'Test Bank 1', code: '1' }, { name: 'Test Bank 2', code: '2' }, { name: 'Test Bank 3', code: '3' }
  ];
  atmIDOpt: any = [
    { name: 'Test', code: '1' }, { name: 'Test 2', code: '2' }
  ];
  logicalOpt: any = [
    { name: 'All', code: '1' }
  ];
  categories: any = [];
  type = history.state.type;
  header: any;
  constructor(private location: Location, private fb: FormBuilder) { }

  ngOnInit() {

    this.header = this.getHeaderForType(this.type);
    this.categories = this.type == 'Consolidated'
      ? [
        { name: 'Tran Date', key: 'Tran Date' },
        { name: 'Batch ID', key: 'Batch ID' },
      ]
      : [
        { name: 'Details', key: 'Details' },
        { name: 'Account', key: 'Account' },
        { name: 'CHN', key: 'CHN' },
      ];

    this.reportGenForm = this.fb.group({
      BranchName: [null],
      ATMName: [null],
      Account: [''],
      CHN: [''],
      FromToDate: [''],
      Criteria: [this.categories[0].key],
      ReportType: [null],
      AtmId: [null],
      Network: [null],
      NetworkSection: [null],
    });

    // Initial validators
    this.applyValidators(this.type, this.reportGenForm.get('Criteria')?.value);

  }

  onCriteriaChange(selectedCriteria: any) {
    this.applyValidators(this.type, selectedCriteria);
  }

  getHeaderForType(type: string) {
    const headers: any = {
      CashScroll: 'ATM Cash Scroll Report',
      TransactionStatus: 'ATM Transaction Status Report',
      LiveDenom: 'ATM Live Denom Report',
      Consolidated: 'Consolidated Report',
      OFUS: 'OFUS Txn Report',
      NetworkSummary: 'Network Summary Report',
      ATMTransaction: 'ATM Transaction Report',
      Audit: 'Audit Report'
    };

    return headers[type] || 'ATM Report';
  }

  applyValidators(type: string, criteria: string) {
    const controls = this.reportGenForm.controls;

    // Reset all validators
    for (let field in controls) {
      controls[field].clearValidators();
      controls[field].updateValueAndValidity({ onlySelf: true });
    }

    // General logic based on `type`
    const requiredFieldsMap: any = {
      CashScroll: ['BranchName', 'FromToDate', 'ATMName', 'Account', 'CHN', 'Criteria'],
      TransactionStatus: ['FromToDate', 'BranchName', 'ATMName', 'Account', 'CHN', 'Criteria'],
      LiveDenom: ['ATMName'],
      Consolidated: ['FromToDate', 'Criteria', 'ReportType', 'AtmId', 'Network'],
      OFUS: ['FromToDate', 'BranchName', 'ATMName', 'NetworkSection'],
      NetworkSummary: ['FromToDate', 'NetworkSection'],
      ATMTransaction: ['FromToDate', 'BranchName', 'ATMName'],
      Audit: ['FromToDate']
    };

    const requiredFields = new Set(requiredFieldsMap[type] || []);

if (type === 'TransactionStatus' || type === 'CashScroll') {
  if (criteria === 'Account') {
    requiredFields.add('Account');
    requiredFields.delete('CHN');
    this.reportGenForm.controls['CHN'].setValue('');
    this.reportGenForm.controls['CHN'].updateValueAndValidity();
  } else if (criteria === 'CHN') {
    requiredFields.add('CHN');
    requiredFields.delete('Account');
    this.reportGenForm.controls['Account'].setValue('');
    this.reportGenForm.controls['Account'].updateValueAndValidity();
  } else {
    requiredFields.delete('CHN');
    requiredFields.delete('Account');
    this.reportGenForm.controls['Account'].setValue('');
    this.reportGenForm.controls['Account'].updateValueAndValidity();
    this.reportGenForm.controls['CHN'].setValue('');
    this.reportGenForm.controls['CHN'].updateValueAndValidity();
  }
}

if (type === 'Consolidated') {
  if (criteria === 'Batch ID') {
    requiredFields.delete('FromToDate');
    this.reportGenForm.controls['FromToDate'].setValue('');
    this.reportGenForm.controls['FromToDate'].updateValueAndValidity();
  } else {
    requiredFields.add('FromToDate');
  }
}
    // Apply validators
    for (let field in controls) {
      if (requiredFields.has(field)) {
        controls[field].setValidators(Validators.required);
      }
      controls[field].updateValueAndValidity({ onlySelf: true });
    }
  }


  goBack() {
    this.location.back();
  }
  onSubmit() {
    if (this.reportGenForm.valid) {
      console.log('Form Data:', this.reportGenForm.value);
      if (!this.selectedFileType) return;

      const fileType = this.selectedFileType.value;

      // Example logic – adapt this to trigger your actual download
      console.log(`Downloading file as ${fileType.toUpperCase()}`);
      // Add download logic here, e.g., API call or file creation
      // Process the form data here 
    } else {
      console.log('Form is invalid', this.reportGenForm);
      this.reportGenForm.markAllAsTouched();
    }
  }
  selectedFileType: any = null;

  fileTypes = [
    { label: 'PDF', value: 'pdf', icon: 'pi pi-file-pdf', colorClass: 'text-red-500', severity: 'danger' },
    { label: 'XLS', value: 'xls', icon: 'pi pi-file-excel', colorClass: 'text-green-600', severity: 'success' },
    { label: 'XLSX', value: 'xlsx', icon: 'pi pi-file-excel', colorClass: 'text-green-600', severity: 'success' }
  ];

  selectFileType(type: any) {
    this.selectedFileType = type;
  }

}
