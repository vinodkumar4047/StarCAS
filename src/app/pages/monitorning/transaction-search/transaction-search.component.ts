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
@Component({
  selector: 'app-transaction-search',
  imports: [ FormsModule, ToastModule, SpeedDialModule, ButtonModule,ReactiveFormsModule,
    InputTextModule, RadioButtonModule, CommonModule, FloatLabelModule,DatePicker],
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
  searchForm:any;
  routeData: any = history.state;
  countryOpt:any =[
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
 constructor(private messageService: MessageService,private fb: FormBuilder) { }

  toggleRadioContent() {
    this.isSpeedDialOpen = !this.isSpeedDialOpen;
    this.showRadioOptions = this.isSpeedDialOpen;
  }
  ngOnInit() {
    this.searchForm = this.fb.group({
      RefNum: ['', Validators.required],
      Criteria: ['0', Validators.required],
      FromToDate: ['', Validators.required]
    });
    this.searchForm.get('INSTID')?.disable();
  }

  onSubmit() {
    if (this.searchForm.valid) {
      console.log('Form Data:', this.searchForm.value);
      // Process the form data here 
  } else {
      console.log('Form is invalid', this.searchForm);
      this.searchForm.markAllAsTouched();
  }
  }
}
