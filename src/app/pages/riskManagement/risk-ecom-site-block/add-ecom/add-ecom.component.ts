import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-add-ecom',
  imports: [InputTextModule, FormsModule, CommonModule, ButtonModule, ReactiveFormsModule,
      DatePicker, FloatLabel],
  templateUrl: './add-ecom.component.html',
  styleUrl: './add-ecom.component.scss'
})
export class AddEcomComponent {
  EcomSiteForm:any;
  routeData: any = history.state;
  constructor(private location: Location, private fb: FormBuilder) { }

  ngOnInit() {
    this.EcomSiteForm = this.fb.group({
      INSTID: ['Test', Validators.required],
      BlockEcomSite: ['', Validators.required],
      FromToDate: ['', Validators.required]
    });
    this.EcomSiteForm.get('INSTID')?.disable();
  }

  goBack() {
    this.location.back();
  }
  onSubmit() {
    if (this.EcomSiteForm.valid) {
      console.log('Form Data:', this.EcomSiteForm.value);
      // Process the form data here 
  } else {
      console.log('Form is invalid', this.EcomSiteForm);
      this.EcomSiteForm.markAllAsTouched();
  }
  }
}
