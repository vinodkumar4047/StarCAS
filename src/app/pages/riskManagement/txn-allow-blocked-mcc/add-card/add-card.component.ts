import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-add-card',
  imports: [InputTextModule, FormsModule, CommonModule, ButtonModule, ReactiveFormsModule,
        DatePicker, FloatLabel],
  templateUrl: './add-card.component.html',
  styleUrl: './add-card.component.scss'
})
export class AddCardComponent {
  mccForm:any;
  routeData: any = history.state;
  constructor(private location: Location, private fb: FormBuilder) { }

  ngOnInit() {
    this.mccForm = this.fb.group({
      INSTID: ['Test', Validators.required],
      CHN: ['', Validators.required],
      FromToDate: ['', Validators.required]
    });
    this.mccForm.get('INSTID')?.disable();
  }

  goBack() {
    this.location.back();
  }
  onSubmit() {
    if (this.mccForm.valid) {
      console.log('Form Data:', this.mccForm.value);
      // Process the form data here 
  } else {
      console.log('Form is invalid', this.mccForm);
      this.mccForm.markAllAsTouched();
  }
  }
}
