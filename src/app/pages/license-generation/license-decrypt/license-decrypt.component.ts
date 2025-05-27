import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-license-decrypt',
  imports:  [ FormsModule, CommonModule, ButtonModule, ReactiveFormsModule, FileUpload ],
  templateUrl: './license-decrypt.component.html',
  styleUrl: './license-decrypt.component.scss'
})
export class LicenseDecryptComponent {
  uploadedFiles: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  onUpload(event: any) {
    const files = event.files;
    console.log('Files received:', files);
    this.uploadedFiles = files;
  }

  resetFile(){
    this.uploadedFiles = [];
  }

}
