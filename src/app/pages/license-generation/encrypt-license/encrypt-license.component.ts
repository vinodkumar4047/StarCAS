import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { RestService } from '../../../layout/service/rest.service';
import { DialogService } from '../../../layout/component/commonDialog.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-encrypt-license',
  imports: [InputTextModule, FormsModule, CommonModule, ButtonModule, ReactiveFormsModule,
    DatePicker, FloatLabel],
  templateUrl: './encrypt-license.component.html',
  styleUrl: './encrypt-license.component.scss'
})
export class EncryptLicenseComponent {
  encryptForm: any;
  routeData: any = history.state;
  constructor(private fb: FormBuilder, private restApi: RestService, private dialogService: DialogService) { }

  ngOnInit() {
    this.encryptForm = this.fb.group({
      INSTID: ['', Validators.required],
      serverIP: ['', Validators.required],
      expireDate: ['', Validators.required]
    });

  }
  formatDate(date: Date) {
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const dd = String(date.getDate()).padStart(2, '0');
    const yy = String(date.getFullYear()).slice(-2);
    return `${mm}/${dd}/${yy}`;
  }
  onSubmit() {
    if (this.encryptForm.valid) {
      console.log('Form Data:', this.encryptForm.value);
      let instId = this.encryptForm.value.INSTID;
      const payload = {
        instId: this.encryptForm.value.INSTID,
        ipAddress: this.encryptForm.value.serverIP,
        expirationDate: this.formatDate(this.encryptForm.value.expireDate)
      };

      this.restApi.post(payload, `/login/licenseGeneration?instId=${instId}`, 'text').subscribe({
        next: (res) => {
          this.dialogService.show('Success', res, 'success');
        },
        error: (err) => this.dialogService.show('Oops!', err, 'error')
      });
    } else {
      console.log('Form is invalid', this.encryptForm);
      this.encryptForm.markAllAsTouched();
    }
  }
}
