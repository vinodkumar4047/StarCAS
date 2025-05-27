import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
selector: 'app-encrypt-license',
  imports: [InputTextModule, FormsModule, CommonModule, ButtonModule, ReactiveFormsModule,
          DatePicker, FloatLabel],
  templateUrl: './encrypt-license.component.html',
  styleUrl: './encrypt-license.component.scss'
})
export class EncryptLicenseComponent {
  encryptForm:any;
  routeData: any = history.state;
  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.encryptForm = this.fb.group({
      INSTID: ['', Validators.required],
      serverIP: ['', Validators.required],
      expireDate: ['', Validators.required]
    });

  }

  onSubmit() {
    if (this.encryptForm.valid) {
      console.log('Form Data:', this.encryptForm.value);
      // Process the form data here 
  } else {
      console.log('Form is invalid', this.encryptForm);
      this.encryptForm.markAllAsTouched();
  }
  }
}
