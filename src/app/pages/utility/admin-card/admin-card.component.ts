import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-admin-card',
  imports: [CommonModule, ButtonModule, FormsModule, ReactiveFormsModule, InputText, FloatLabel, DatePickerModule],
  templateUrl: './admin-card.component.html',
  styleUrl: './admin-card.component.scss'
})
export class AdminCardComponent {
  AdminForm!: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.AdminForm = this.fb.group({
      institutionName: ['TEST', Validators.required],
      maximumCard: [null, Validators.required],
      expDate: [null, Validators.required],
    });
    this.AdminForm.get('institutionName')?.disable();
  }

  onGenerate() {
    if (this.AdminForm.valid) {
      console.log('Form Data:', this.AdminForm.value);
    } else {
      console.log('Form is invalid', this.AdminForm);
      this.AdminForm.markAllAsTouched();
    }
  }

  reset() {
    const name = this.AdminForm?.value?.institutionName
    const formData = {
      maximumCard: null,
      expDate: null,
      institutionName: null
    };
    this.AdminForm.reset(formData);
    this.AdminForm.patchValue({
      institutionName: 'TEST',
    });

  }
}
