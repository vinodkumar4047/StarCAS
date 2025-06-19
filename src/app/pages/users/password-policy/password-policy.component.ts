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

  constructor(private restApi: RestService, private cdr: ChangeDetectorRef) { };


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
    this.Edit_data.pwdExpPeriod = this.cities.find((c: any) => c.code === customer.data.pwdExpPeriod);
    this.Edit_data.totalCount = this.cities.find((c: any) => c.code === customer.data.totalCount);
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
    this.loading = true;
    this.restApi.get('/usermanagement/passwordPolicy/getAll').pipe(
      take(1)
    ).subscribe({
      next: (res) => {
        if (res) {
          this.passwordPilicy = res;
          console.log('taskManager data:', this.passwordPilicy);
        } else {
          console.warn('No data received or request failed.');
        } setTimeout(() => {
          this.loading = false;
          this.cdr.detectChanges();
        }, 2000);
      },
      error: (err) => {
        console.error('Subscription error:', err);
        this.loading = false;
        this.cdr.detectChanges();

      }
    });
  };
}
