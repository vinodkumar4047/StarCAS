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
import { TableComponent } from '../../../../layout/component/table/table.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-authorize-mcc',
  imports: [TooltipModule,
    TableModule,  // Only import TableModule
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    InputTextModule,
    DialogModule,
    ButtonModule, TableComponent,
    DialogModule,],
  templateUrl: './authorize-mcc.component.html',
  styleUrl: './authorize-mcc.component.scss'
})
export class AuthorizeMCCComponent {
  constructor(private location: Location) { }
  header: any
  routeData: any = history.state;

  globalFilterFields: any = [
    'INSTID',
    'BLOCKEDMERCHANTCODE',
    'MERCHANTCODEDESC',
    'TXNALLOWEDFLAG'
  ];

  customers = [
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
  cols = [
    { field: 'INSTID', header: 'INST ID' },
    { field: 'BLOCKEDMERCHANTCODE', header: 'MCC Code', sort: true, type: 'number' },
    { field: 'MERCHANTCODEDESC', header: 'MCC Desc', sort: true, type: 'string' },
    { field: 'TXNALLOWEDFLAG', header: 'Allowed', sort: true, type: 'string' },
    { field: 'Action', header: 'Action', type: [this.routeData.type == 'viewAuth' ? 'view' : 'delete'] }
  ];
  delete_visible: any;
  visible: boolean = false;
  editVisible: any;
  tpCheck!: boolean;
  Edit_data: any = {
    INSTID: '',
    MASK_CARDNO: '',
    FROMDATE: '',
    TODATE: ''
  };
  ngOnInit() {
    this.header = this.routeData.type == 'viewAuth' ? 'View MCC Authorization' : 'Authorize Delete Offline Allowed PIN'
  };


  goBack() {
    this.location.back();
  };
  delateData() {
    this.delete_visible = false;
  }
  viewFunction(type: any, data: any) {
    this.Edit_data = { ...data?.data };
    console.log(data);
    this.tpCheck = type == 'View' ? true : false;
    this.editVisible = true;

  }
}
