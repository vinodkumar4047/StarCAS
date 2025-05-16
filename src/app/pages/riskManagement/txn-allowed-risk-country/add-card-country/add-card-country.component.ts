import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';

@Component({
  selector: 'app-add-card-country',
  imports: [InputTextModule, FormsModule, CommonModule, ButtonModule, ReactiveFormsModule,
          DatePicker, FloatLabel,Select],
  templateUrl: './add-card-country.component.html',
  styleUrl: './add-card-country.component.scss'
})
export class AddCardCountryComponent {
 cardCtryForm:any;
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
  constructor(private location: Location, private fb: FormBuilder) { }

  ngOnInit() {
    this.cardCtryForm = this.fb.group({
      INSTID: ['Test', Validators.required],
      CardNo: ['', Validators.required],
      BlockedCountry: [null, Validators.required],
      FromToDate: ['', Validators.required]
    });
    this.cardCtryForm.get('INSTID')?.disable();
  }

  goBack() {
    this.location.back();
  }
  onSubmit() {
    if (this.cardCtryForm.valid) {
      console.log('Form Data:', this.cardCtryForm.value);
      // Process the form data here 
  } else {
      console.log('Form is invalid', this.cardCtryForm);
      this.cardCtryForm.markAllAsTouched();
  }
  }
}
