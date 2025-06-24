import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TableComponent } from '../../../layout/component/table/table.component';
import { Select } from 'primeng/select';
import { NgModel } from '@angular/forms';
import { RestService } from '../../../layout/service/rest.service';
import { take } from 'rxjs/operators';
import { DialogService } from '../../../layout/component/commonDialog.service';

@Component({
  selector: 'app-password-policy',
  imports: [TooltipModule,
    TableModule,  // Only import TableModule
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    InputTextModule,
    DialogModule,
    ButtonModule, TableComponent,
    DialogModule, Select],
  templateUrl: './password-policy.component.html',
  styleUrl: './password-policy.component.scss'
})
export class PasswordPolicyComponent {
  passwordPilicy: any
  loading: boolean = true;
  tpCheck: any;
  edit_visible: boolean = false;
  showViewData: any = null;

  constructor(private dialogService: DialogService, private restApi: RestService, private cdr: ChangeDetectorRef) { };


  Edit_data: any = {
    loweCase: '',
    upperCase: '',
    numbers: '',
    pwdExpPeriod: '',
    totalCount: '',
    special: ''
  };
  customers = [
    {
      "id": "1",
      "instId": "CLFSC",
      "loweCase": "3",
      "upperCase": "1",
      "numbers": "3",
      "special": "1",
      "firstChar": "F",
      "lastChar": "L",
      "totalCount": "8",
      "createdDate": "2024-10-22 18:04:05.732",
      "modifiedDate": "NA",
      "createdBy": "1",
      "modifiedBy": "NA",
      "authStatus": "C",
      "reason": "NA",
      "pwdExpPeriod": "90",
      "pwdMinAge": "NA",
      "pwdReuseHist": "4",
      "mkckStatus": "C"
    }
  ]
  cols: any[] = [
    { field: 'id', header: 'SNO' },
    { field: 'loweCase', header: 'LowerCase' },
    { field: 'upperCase', header: 'UpperCase' },
    { field: 'numbers', header: 'Numbers' },
    { field: 'special', header: 'Special Char' },
    { field: 'pwdExpPeriod', header: 'PasswordExpiry' },
    { field: 'totalCount', header: 'TotalCount' },
    { field: 'Action', header: 'Action', type: ['view', 'edit'] }
  ];
  globalFilterFields: any = [
    'INSTID',
    'BRANCHCODE',
    'BRANCHMAPCODE',
    'BRANCHNAME',
  ];
  editFunction(customer: any, type: any) {
    this.Edit_data = { ...customer.data };
    console.log(this.Edit_data);
    // Match the values with dropdown options
    this.Edit_data.loweCase = this.cities.find((c: any) => c.code === customer.data.loweCase);
    this.Edit_data.upperCase = this.cities.find((c: any) => c.code === customer.data.upperCase);
    this.Edit_data.numbers = this.cities.find((c: any) => c.code === customer.data.numbers);
    this.Edit_data.special = this.cities.find((c: any) => c.code === customer.data.special);
    this.Edit_data.pwdExpPeriod = customer.data.pwdExpPeriod;
    this.Edit_data.totalCount = customer.data.totalCount;
    this.edit_visible = true;
    this.tpCheck = type == 'view' ? true : false;
  }
  cities: any;

  selectedCity: any;

  ngOnInit() {
    this.getBinData();

    this.cities = [
      { name: '1', code: '1' },
      { name: '2', code: '2' },
      { name: '3', code: '3' },
      { name: '4', code: '4' },
      { name: '5', code: '5' },
      { name: '6', code: '6' },
    ];
  }

  getBinData() {

    this.restApi.get('/usermanagement/passwordPolicy/getAll').pipe(
      take(1)
    ).subscribe({
      next: (res) => {
        if (res) {
          this.passwordPilicy = res.data;
          this.cdr.detectChanges();
          console.log('taskManager data:', this.passwordPilicy);
        } else {
          console.warn('No data received or request failed.');
        };
      },
      error: (err) => {
        console.error('Subscription error:', err);
        this.loading = false;
        this.cdr.detectChanges();

      }
    });
  };
  // OnSave() {
  //   const payload = {
  //     id: this.Edit_data.id,
  //     instId: this.Edit_data.instId || 'TISA', // fallback if needed
  //     loweCase: this.Edit_data.loweCase?.code || '',
  //     upperCase: this.Edit_data.upperCase?.code || '',
  //     numbers: this.Edit_data.numbers?.code || '',
  //     special: this.Edit_data.special?.code || '',
  //     totalCount: this.Edit_data.totalCount || '',
  //     pwdExpPeriod: this.Edit_data.pwdExpPeriod || ''
  //   };
  //   console.log('Payload:', payload);
  //   this.restApi.post(payload, '/usermanagement/profile/edit').subscribe({
  //     next: (res: any) => {
  //       console.log(res);
  //       if (!res) {
  //         this.dialogService.show('No response from server', 'Try again later', 'error', 3000);
  //         return;
  //       }
  //       if (res && res.respCode === '00') {
  //         this.dialogService.show('Success', res.message, 'success', 3000);
  //         this.edit_visible = false;
  //         this.getBinData();
  //       } else {
  //         this.dialogService.show('Oops!', res?.message || 'Something went wrong', 'error', 3000);
  //       }
  //     },
  //     error: (err: any) => {
  //       console.error('POST error:', err);
  //       this.dialogService.show('Server Error', err?.error?.message || 'Internal Server Error', 'error', 3000);
  //     }
  //   });
  // }
  // Utility function to normalize select values
  getCode(value: any): string {
    return typeof value === 'object' && value?.code ? value.code : (value || '');
  }

  OnSave() {
    const payload = {
      id: this.Edit_data.id,
      instId: this.Edit_data.instId ?? 'TISA', // fallback if null or undefined
      loweCase: this.getCode(this.Edit_data.loweCase),
      upperCase: this.getCode(this.Edit_data.upperCase),
      numbers: this.getCode(this.Edit_data.numbers),
      special: this.getCode(this.Edit_data.special),
      totalCount: this.Edit_data.totalCount || '',
      pwdExpPeriod: this.Edit_data.pwdExpPeriod || ''
    };

    console.log('Payload being sent:', payload);

    this.restApi.post(payload, '/usermanagement/profile/edit').subscribe({
      next: (res: any) => {
        if (!res || typeof res !== 'object') {
          this.dialogService.show('No response from server', 'Try again later', 'error', 3000);
          return;
        }

        if (res.respCode === '00') {
          this.dialogService.show('Success', res.message || 'Profile updated successfully', 'success', 3000);
          this.edit_visible = false;
          this.getBinData(); // refresh list or details
        } else {
          this.dialogService.show('Oops!', res.message || 'Something went wrong', 'error', 3000);
        }
      },
      error: (err: any) => {
        console.error('POST error:', err);
        const errorMsg = err?.error?.message || 'Internal Server Error';
        this.dialogService.show('Server Error', errorMsg, 'error', 3000);
      }
    });
  }

}

