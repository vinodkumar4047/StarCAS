import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableComponent } from '../../../layout/component/table/table.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';
import { Select } from 'primeng/select';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-mcc-block',
  imports: [TableComponent, DialogModule, ButtonModule, CommonModule, FormsModule, InputTextModule, Select],
  templateUrl: './mcc-block.component.html',
  styleUrl: './mcc-block.component.scss'
})
export class MCCBLOCKComponent {
  globalFilterFields: any = [
    'INSTID',
    'BLOCKEDMERCHANTCODE',
    'MERCHANTCODEDESC',
    'TXNALLOWEDFLAG'
  ];

  rawData = [
    {
      "INSTID": "TEST",
      "BLOCKEDMERCHANTCODE": 8641,
      "MERCHANTCODEDESC": "Civic, Social, Fraternal Associations",
      "TXNALLOWEDFLAG": "BLOCKED"
    },
    {
      "INSTID": "TEST",
      "BLOCKEDMERCHANTCODE": 4900,
      "MERCHANTCODEDESC": "Utilities",
      "TXNALLOWEDFLAG": "UNBLOCKED"
    },
    {
      "INSTID": "TEST",
      "BLOCKEDMERCHANTCODE": 5094,
      "MERCHANTCODEDESC": "Precious Stones and Metals, Watches and Jewelry",
      "TXNALLOWEDFLAG": "BLOCKED"
    },
    {
      "INSTID": "TEST",
      "BLOCKEDMERCHANTCODE": 7230,
      "MERCHANTCODEDESC": "Barber and Beauty Shops",
      "TXNALLOWEDFLAG": "UNBLOCKED"
    },
    {
      "INSTID": "TEST",
      "BLOCKEDMERCHANTCODE": 7276,
      "MERCHANTCODEDESC": "Tax Preparation Services",
      "TXNALLOWEDFLAG": "UNBLOCKED"
    },
    {
      "INSTID": "TEST",
      "BLOCKEDMERCHANTCODE": 7311,
      "MERCHANTCODEDESC": "Advertising Services",
      "TXNALLOWEDFLAG": "UNBLOCKED"
    },
    {
      "INSTID": "TEST",
      "BLOCKEDMERCHANTCODE": 7299,
      "MERCHANTCODEDESC": "Miscellaneous General Services",
      "TXNALLOWEDFLAG": "UNBLOCKED"
    },
    {
      "INSTID": "TEST",
      "BLOCKEDMERCHANTCODE": 8011,
      "MERCHANTCODEDESC": "Doctors",
      "TXNALLOWEDFLAG": "BLOCKED"
    },
    {
      "INSTID": "TEST",
      "BLOCKEDMERCHANTCODE": 8398,
      "MERCHANTCODEDESC": "Charitable and Social Service Organizations ",
      "TXNALLOWEDFLAG": "BLOCKED"
    },
    {
      "INSTID": "TEST",
      "BLOCKEDMERCHANTCODE": 7342,
      "MERCHANTCODEDESC": "Exterminating Services",
      "TXNALLOWEDFLAG": "BLOCKED"
    }
  ];
  optvalue: any = [
    { name: 'BLOCKED', code: 'BLOCKED' },
    { name: 'UNBLOCKED', code: 'UNBLOCKED' }
  ]
  cols = [
    { field: 'INSTID', header: 'INST ID' },
    { field: 'BLOCKEDMERCHANTCODE', header: 'MCC Code', sort: true, type: 'number' },
    { field: 'MERCHANTCODEDESC', header: 'MCC Desc', sort: true, type: 'string' },
    { field: 'TXNALLOWEDFLAG', header: 'Allowed', sort: true, type: 'string' },
    { field: 'Action', header: 'Action', type: ['view', 'edit'] },
  ];

  editVisible: any;
  Edit_data: any = {
    BLOCKEDMERCHANTCODE: '',
    MERCHANTCODEDESC: '',
    TXNALLOWEDFLAG: '',
    INSTID: ''
  };
  tpCheck!: boolean;
  buttonsList: any = [
    { label: 'Authorize MCC', type: 'viewAuth', icon: 'pi pi-verified', variant: 'outlined', severity: "info" }
  ]
  userRole: any = localStorage.getItem('userRole');
  userType: any = localStorage.getItem('userType');
  constructor(private router: Router) { };

  ngOnInit() {
    this.cols = this.userType === 'maker'
      ? this.cols
      : this.cols.filter(col => col.field !== 'Action');
  }

  edit(data: any, type: any) {
    this.Edit_data = { ...data?.data };
    console.log(data);
    this.tpCheck = type == 'View' ? true : false;
    this.editVisible = true;

  }

  addOrEdit(type: any, data: any) {
    this.router.navigate(['/pages/add_mcc'], { state: { data: data?.data, type: type } });
  }
  txnalloRiskView(data: any) {
    console.log('txn-allowed-risk-country-authorize', data)
    this.router.navigate(['/pages/authorize_MCCC'], { state: { data: data?.data, type: data.type } });
  }
}
