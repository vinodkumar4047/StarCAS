import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { FileUpload } from 'primeng/fileupload';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-add-fit',
  imports: [InputTextModule, FormsModule, CommonModule, ButtonModule, ReactiveFormsModule,
    SelectModule, FloatLabel],
  templateUrl: './add-fit.component.html',
  styleUrl: './add-fit.component.scss'
})
export class AddFitComponent {
  fitForm: any;
  routeData: any = history.state;
  uploadedFiles: any[] = [];
  InstIDOpt: any = [
    { name: 'Test Bank 1', code: '1' }, { name: 'Test Bank 2', code: '2' }, { name: 'Test Bank 3', code: '3' }
  ];
  atmIDOpt: any = [
    { name: 'Test', code: '1' }, { name: 'Test 2', code: '2' }
  ];
  logicalOpt: any = [
    { name: 'All', code: '1' }
  ];
  constructor(private location: Location, private fb: FormBuilder) { }

  ngOnInit() {
    this.fitForm = this.fb.group({
      INSTID: [null, Validators.required],
      ATMID: [null, Validators.required],
      logicalGroup: [null, Validators.required],
      BINValue: ['', Validators.required],
      indirectState: ['', Validators.required]
    });
  }

  goBack() {
    this.location.back();
  }
  onSubmit() {
    if (this.fitForm.valid) {
      console.log('Form Data:', this.fitForm.value);
      // Process the form data here 
    } else {
      console.log('Form is invalid', this.fitForm);
      this.fitForm.markAllAsTouched();
    }
  }
}
