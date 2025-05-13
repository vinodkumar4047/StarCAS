import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { SelectButton } from 'primeng/selectbutton';

@Component({
  selector: 'app-add-email',
  imports: [CommonModule,FormsModule,ReactiveFormsModule,ButtonModule,FloatLabel,Select,InputText,SelectButton],
  templateUrl: './add-email.component.html',
  styleUrl: './add-email.component.scss'
})
export class AddEmailComponent {
  constructor(private location: Location, private fb: FormBuilder) { }
emailForm!:FormGroup;
 institution = [
        { name: 'NTW_DOWN', code: '1' },
        { name: 'OUT_SEVR', code: '2' },
        { name: 'OFF_LINE', code: '3' },
        { name: 'WARNING', code: '4' },
    ];
EMVOptions: any[] = [{ label: 'Add Id', value: '1' }, { label: 'Delete Id', value: '0' }];
  ngOnInit() {
    this.emailForm = this.fb.group({
    Criteria:['1',Validators.required],
    EMail:['',Validators.required],
    GroupID:[null,Validators.required],
    });
  }

  goBack() {
    this.location.back();
  }
  onSubmit() {
    if (this.emailForm.valid) {
      console.log('Form Data:', this.emailForm.value);
      // Process the form data here 
  } else {
      console.log('Form is invalid', this.emailForm);
      this.emailForm.markAllAsTouched();
  }
  }
}
