import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { SelectButton } from 'primeng/selectbutton';

@Component({
  selector: 'app-add-mobile',
  imports: [CommonModule,FormsModule,ReactiveFormsModule,ButtonModule,FloatLabel,Select,InputText,SelectButton],
  templateUrl: './add-mobile.component.html',
  styleUrl: './add-mobile.component.scss'
})
export class AddMobileComponent {
  constructor(private location: Location, private fb: FormBuilder) { }
MobileForm!:FormGroup;
 institution = [
        { name: 'NTW_DOWN', code: '1' },
        { name: 'OUT_SEVR', code: '2' },
        { name: 'OFF_LINE', code: '3' },
        { name: 'WARNING', code: '4' },
    ];
EMVOptions: any[] = [{ label: 'Add Mobile No.', value: '1' }, { label: 'Delete Mobile No.', value: '0' }];
  ngOnInit() {
    this.MobileForm = this.fb.group({
    Criteria:['1',Validators.required],
    Mobile:['',Validators.required],
    GroupID:[null,Validators.required],
    });
  }

  goBack() {
    this.location.back();
  }
  onSubmit() {
    if (this.MobileForm.valid) {
      console.log('Form Data:', this.MobileForm.value);
      // Process the form data here 
  } else {
      console.log('Form is invalid', this.MobileForm);
      this.MobileForm.markAllAsTouched();
  }
  }
}
