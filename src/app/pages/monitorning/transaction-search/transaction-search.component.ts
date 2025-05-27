import { Component } from '@angular/core';
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
import { take } from 'rxjs';
@Component({
  selector: 'app-transaction-search',
  imports: [FormsModule, ToastModule, SpeedDialModule, ButtonModule, ReactiveFormsModule,
    InputTextModule, RadioButtonModule, CommonModule, FloatLabelModule, DatePicker],
  templateUrl: './transaction-search.component.html',
  styleUrl: './transaction-search.component.scss',
  providers: [MessageService]
})
export class TransactionSearchComponent {

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
  constructor(private messageService: MessageService, private fb: FormBuilder, private restApi: RestService) { }

  toggleRadioContent() {
    this.isSpeedDialOpen = !this.isSpeedDialOpen;
    this.showRadioOptions = this.isSpeedDialOpen;
  }
  ngOnInit() {
    this.searchForm = this.fb.group({
      RefNum: [''],
      Account: [''],
      CHN: [''],
      Criteria: ['0', Validators.required],
      FromToDate: ['', Validators.required]
    });
    this.searchForm.get('INSTID')?.disable();
  }

  formatDate(date: Date): string {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
}

  onSubmit() {
    if (this.searchForm.valid) {
      console.log('Form Data:', this.searchForm.value);
      // Process the form data here 

   const formValue = this.searchForm.value;
  const [fromDate, toDate] = formValue.FromToDate;

  let payload: any = {
    fromDate: this.formatDate(fromDate),
    toDate: this.formatDate(toDate),
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
  };
  
  console.log('Final Payload:', payload);

      this.restApi.post(payload, '/monitoring/v1/transactionSearch').pipe(
        take(1),
      ).subscribe({
        next: (res) => {
          console.log('response', res);

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
