import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { SpeedDial, SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DatePicker } from 'primeng/datepicker';
import { RestService } from '../../../layout/service/rest.service';
import { take } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { TableModule } from 'primeng/table';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-transaction-search',
  imports: [FormsModule, ToastModule, SpeedDialModule, ButtonModule, ReactiveFormsModule,
    InputTextModule, RadioButtonModule, CommonModule, FloatLabelModule, DatePicker, TableModule],
  templateUrl: './transaction-search.component.html',
  styleUrl: './transaction-search.component.scss',
  providers: [MessageService]
})
export class TransactionSearchComponent {
  TranSearchData: any
  loading: boolean = true;
  date: Date | undefined;
  date2: Date | undefined;
  items: MenuItem[] = [];
  showRadioOptions = false;
  isSpeedDialOpen = false;
  ingredient!: string;
  categories: any = [
    { name: 'RefNum Based ', key: '0' },
    { name: 'Account', key: '1' },
    { name: 'CHN', key: '2' },
  ];
  searchForm: any;
  routeData: any = history.state;
  tableData: any = [];
  nodata:boolean = false;
  cols: any = [
    { field: 'msgType', header: 'Message Type' },
    { field: 'chn', header: 'CHN' },
    { field: 'txnCode', header: 'Transaction Code' },
    { field: 'txnDesc', header: 'Transaction Description' },
    { field: 'terminalId', header: 'Terminal ID' },
    { field: 'termLoc', header: 'Terminal Location' },
    { field: 'fromAccount', header: 'From Account' },
    { field: 'traceNo', header: 'Trace No' },
    { field: 'refNum', header: 'Reference No' },
    { field: 'tranDate', header: 'Transaction Date' },
    { field: 'tranTime', header: 'Transaction Time' },
    { field: 'amount', header: 'Amount' },
    { field: 'currency', header: 'Currency' },
    { field: 'settAmount', header: 'Settlement Amount' },
    { field: 'acquirerInst', header: 'Acquirer Institution' },
    { field: 'issuerInst', header: 'Issuer Institution' },
    { field: 'rn', header: 'Row Number' },
    { field: 'respCode', header: 'Response Code' },
    { field: 'description', header: 'Description' },
  ];

  countryOpt: any = [
    {
      "BLOCKEDCOUNTRYCODE": "61",
      "COUNTRYDESC": "Australia"
    },
    {
      "BLOCKEDCOUNTRYCODE": "931",
      "COUNTRYDESC": "Afghanistan"
    },
    {
      "BLOCKEDCOUNTRYCODE": "17",
      "COUNTRYDESC": "Afgani"
    },
    {
      "BLOCKEDCOUNTRYCODE": "165",
      "COUNTRYDESC": "Russia"
    },
    {
      "BLOCKEDCOUNTRYCODE": "22",
      "COUNTRYDESC": "ASIA"
    },
    {
      "BLOCKEDCOUNTRYCODE": "856",
      "COUNTRYDESC": "Laos"
    },
    {
      "BLOCKEDCOUNTRYCODE": "374",
      "COUNTRYDESC": "Armenia"
    }
  ];
  constructor(private messageService: MessageService, private cdr: ChangeDetectorRef, private fb: FormBuilder, private restApi: RestService) { }

  toggleRadioContent() {
    this.isSpeedDialOpen = !this.isSpeedDialOpen;
    this.showRadioOptions = this.isSpeedDialOpen;
  }
  ngOnInit() {

    this.searchForm = this.fb.group({
      RefNum: [''],
      Account: [''],
      CHN: [''],
      Criteria: ['0'],
      FromToDate: ['']
    });
    this.searchForm.get('INSTID')?.disable();
  }
  checkIfAnyValueFilled(): boolean {
     const formValues = { ...this.searchForm.value }; // Clone the form values to avoid mutation
  delete formValues.Criteria; // Exclude 'Criteria' from the check

  return Object.values(formValues).some(value => value !== '');
  }
  refresh() {
    this.searchForm.patchvalue({
      RefNum: '',
      Account: '',
      CHN: '',
      Criteria: '0',
      FromToDate: ''
    })
  }

  formatDate(date: Date): string {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  }

  onSubmit() {
    this.tableData = [];
    if (this.searchForm.valid) {
      console.log('Form Data:', this.searchForm.value);
      const formValue = this.searchForm.value;

      let fromDate: any = '';
      let toDate: any = '';

      if (Array.isArray(formValue.FromToDate) && formValue.FromToDate.length === 2) {
        [fromDate, toDate] = formValue.FromToDate;
      }

      let payload: any = {
        fromDate: fromDate ? this.formatDate(fromDate) : '',
        toDate: toDate ? this.formatDate(toDate) : '',
        chnBased: '',
        accountBased: '',
        refnumBased: ''
      };

      switch (formValue.Criteria) {
        case '0':
          payload.refnumBased = formValue.RefNum;
          break;
        case '1':
          payload.accountBased = formValue.Account;
          break;
        case '2':
          payload.chnBased = formValue.CHN;
          break;
      }

      console.log('Final Payload:', payload);

      this.restApi.post(payload, '/monitoring/transactionSearch').pipe(
        take(1),
      ).subscribe({
        next: (res) => {
          console.log('response', res);
          this.tableData = res;
          this.nodata = this.checkIfAnyValueFilled();
          this.cdr.detectChanges();
          // this.refresh();
        },
        error: (err) => {
          console.error('Subscription error:', err);
        }
      });

    } else {
      console.log('Form is invalid', this.searchForm);
      this.searchForm.markAllAsTouched();
    }
  }

}
