import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { FileUpload } from 'primeng/fileupload';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { RestService } from '../../../../layout/service/rest.service';
import { DialogService } from '../../../../layout/component/commonDialog.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-add-external-bin',
  imports: [InputTextModule, FormsModule, CommonModule, ButtonModule, ReactiveFormsModule, FileUpload,
    SelectModule, FloatLabel],
  templateUrl: './add-external-bin.component.html',
  styleUrl: './add-external-bin.component.scss'
})
export class AddExternalBinComponent {
  routeData: any = history.state;
  uploadedFiles: any[] = [];
  institutionOpt: any = [
    { name: 'CLFSC', code: 'CLFSC' }, { name: 'Test Bank 2', code: '2' }, { name: 'Test Bank 3', code: '3' }
  ];
  extBinForm: any;
  constructor(private location: Location, private sanitizer: DomSanitizer, private fb: FormBuilder, private restApi: RestService, private dialogService: DialogService) { }

  ngOnInit() {
    this.extBinForm = this.fb.group({
      Instution: [null, Validators.required],
      BIN: ['', Validators.required],
      Description: ['', Validators.required]
    });
  }

  onUpload(event: any) {
    const files = event.files;
    console.log('Files received:', files);
    this.uploadedFiles = files;
  }

  resetFile() {
    this.uploadedFiles = [];
  }

  goBack() {
    this.location.back();
  }
  onSubmit() {
    if (this.extBinForm.valid) {
      console.log('Form Data:', this.extBinForm.value);
      let payload = {
        "instId": this.extBinForm.value?.Instution,
        "bin": this.extBinForm.value?.BIN,
        "description": this.extBinForm.value?.Description
      }
      this.restApi.post(payload, '/configuration/external-bin/add').subscribe({
        next: (res) => {
         
            console.log('User added successfully:', res);
            this.goBack();
            this.dialogService.show('Success', res?.message, 'success',3000);
        },
        error: (err) => {
          console.error('Error adding profile:', err)
          this.dialogService.show('Oops!', err.message, 'error', 3000); // ✅ Error dialog
        }
      });
    } else {
      console.log('Form is invalid', this.extBinForm);
      this.extBinForm.markAllAsTouched();
    }
  }
}
