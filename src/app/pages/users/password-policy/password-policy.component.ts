import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  tpCheck: any;
  edit_visible: boolean = false;
  showViewData: any = null;
  Edit_data: any = {
    INSTID: '',
    BRANCHCODE: '',
    BRANCHMAPCODE: '',
    BRANCHNAME: ''
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
    this.edit_visible = true;
    this.tpCheck = type == 'view' ? true : false;
  }
  cities:  any;

  selectedCity: any;

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }
}
