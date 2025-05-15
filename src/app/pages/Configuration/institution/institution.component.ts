import { Component } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { Table, TableModule } from 'primeng/table';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { TableComponent } from '../../../layout/component/table/table.component';

@Component({
  selector: 'app-institution',
  imports: [TooltipModule,
    TableModule,  // Only import TableModule
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    ButtonModule,
    TableComponent,
    DialogModule,],
  templateUrl: './institution.component.html',
  styleUrl: './institution.component.scss'
})
export class InstitutionComponent {
  customers = [{ INSTID: "TEST", INSTNAME: "TEST BANK", INSTROUTETYPE: "CBS", INSTTYPE: "FIN", INSTCURRENCYCODE: "925", MAXATMPINCOUNT: 3, MAXTELEPINCOUNT: 3 },
  { INSTID: "TEST", INSTNAME: "TEST BANK", INSTROUTETYPE: "EXTNTWK", INSTTYPE: "EXTNTWK", INSTCURRENCYCODE: "925", MAXATMPINCOUNT: 3, MAXTELEPINCOUNT: 3 },
  { INSTID: "TEST", INSTNAME: "TEST BANK", INSTROUTETYPE: "EXTNTWK", INSTTYPE: "EXTNTWK", INSTCURRENCYCODE: "925", MAXATMPINCOUNT: 3, MAXTELEPINCOUNT: 3 }];
  clear(able: Table) {

  }
  globalFilterFields: any = [
    'instId',
    'atmId',
    'atmTypeId',
    'logicalGroup',
    'ipAddress',
    'acquirerBranch'
  ];

  atmData = [
    {
      "instId": "TEST",
      "atmId": "TEST001",
      "atmTypeId": "NDC+ATM",
      "logicalGroup": "NDC+ATM",
      "ipAddress": "10.93.101.223",
      "acquirerBranch": "001",
    },
    {
      "instId": "TEST",
      "atmId": "TEST002",
      "atmTypeId": "NDC+ATM",
      "logicalGroup": "NDC+ATM",
      "ipAddress": "10.93.101.224",
      "acquirerBranch": "002",
    },
    {
      "instId": "TEST",
      "atmId": "TEST003",
      "atmTypeId": "NDC+ATM",
      "logicalGroup": "NDC+ATM",
      "ipAddress": "10.93.101.225",
      "acquirerBranch": "003",
    },
    {
      "instId": "TEST",
      "atmId": "TEST004",
      "atmTypeId": "NDC+ATM",
      "logicalGroup": "NDC+ATM",
      "ipAddress": "10.93.101.121",
      "acquirerBranch": "004",
    },
    {
      "instId": "TEST",
      "atmId": "TEST005",
      "atmTypeId": "NDC+ATM",
      "logicalGroup": "NDC+ATM",
      "ipAddress": "10.93.101.222",
      "acquirerBranch": "005",
    },
    {
      "instId": "TEST",
      "atmId": "TEST006",
      "atmTypeId": "NDC+ATM",
      "logicalGroup": "NDC+ATM",
      "ipAddress": "10.93.101.230",
      "acquirerBranch": "006",

    },
    {
      "instId": "TEST",
      "atmId": "TEST007",
      "atmTypeId": "NDC+ATM",
      "logicalGroup": "NDC+ATM",
      "ipAddress": "10.93.116.222",
      "acquirerBranch": "007",
    },
    {
      "instId": "TEST",
      "atmId": "TEST008",
      "atmTypeId": "NDC+ATM",
      "logicalGroup": "NDC+ATM",
      "ipAddress": "10.93.111.222",
      "acquirerBranch": "008",
    },
    {
      "instId": "TEST",
      "atmId": "TEST009",
      "atmTypeId": "NDC+ATM",
      "logicalGroup": "NDC+ATM",
      "ipAddress": "10.93.95.17",
      "acquirerBranch": "009",
    },
    {
      "instId": "TEST",
      "atmId": "TEST010",
      "atmTypeId": "NDC+ATM",
      "logicalGroup": "NDC+ATM",
      "ipAddress": "10.93.102.222",
      "acquirerBranch": "010",
    }
  ];

  cols = [
    { field: 'instId', header: 'INST ID' },
    { field: 'atmId', header: 'ATM ID' },
    { field: 'atmTypeId', header: 'ATM TYPE ID' },
    { field: 'logicalGroup', header: 'LOGICAL GROUP' },
    { field: 'ipAddress', header: 'IP ADDRESS' },
    { field: 'acquirerBranch', header: 'ACQUIRER BRANCH' },
    // { field: 'Action', header: 'Action', type: ['view', 'edit', 'delete'] },
  ];
  delete_visible: any;

  addOrEdit(data1: any, data: any) {

  }
}
