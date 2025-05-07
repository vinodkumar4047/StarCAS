import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { FileUpload } from 'primeng/fileupload';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-add-external-bin',
  imports: [InputTextModule, FormsModule, CommonModule, ButtonModule, ReactiveFormsModule, FileUpload, SelectModule, FloatLabel],
  templateUrl: './add-external-bin.component.html',
  styleUrl: './add-external-bin.component.scss'
})
export class AddExternalBinComponent {
  routeData: any = history.state;
  uploadedFiles: any[] = [];
  institutionOpt: any = [
    { name: 'Test Bank 1', code: '1' }, { name: 'Test Bank 2', code: '2' }, { name: 'Test Bank 3', code: '3' }
  ];
  extBinForm: any;
  constructor(private location: Location, private sanitizer: DomSanitizer, private fb: FormBuilder) { }

  ngOnInit() {
    this.extBinForm = this.fb.group({
      Instution: [null, Validators.required],
      BIN: ['', Validators.required],
      Description: ['', Validators.required]
    });
  }

  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
    console.log(this.uploadedFiles, 'this.uploadedFiles');

  }

  goBack() {
    this.location.back();
  }
  onSubmit() {

  }
}
