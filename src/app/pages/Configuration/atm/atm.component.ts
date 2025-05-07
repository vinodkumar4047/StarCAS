import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TableComponent } from '../../../layout/component/table/table.component';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-atm',
  imports: [
    TooltipModule,
    TableModule,
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    ButtonModule,
    TableComponent,
      DialogModule,
  ],
  templateUrl: './atm.component.html',
  styleUrl: './atm.component.scss'
})
export class ATMComponent {
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
  { field: 'Action', header: 'Action' ,type:['view','edit','delete']},
  ];
delete_visible: any;

  constructor(private router: Router) { };


  addOrEdit(type: any, details: any) {
    const data = {
      "ATMID": details?.data?.atmId,
      "Locate": "ds",
      "ATMLocation": "cwe",
      "ATMType": details?.data?.atmTypeId,
      "ATMLogicalGroup": details?.data?.logicalGroup,
      "TerminalId": "dwefer",
      "AcquirerBin": "dwed",
      "AcquirerInstitution": {
          "name": "Test Bank 1",
          "code": "1"
      },
      "AcquirerBranch": {
          "name": "Test Branch",
          "code": "2"
      },
      "ATMKeylen": {
          "name": "32",
          "code": "32"
      },
      "ATMMasterKey": "dwedfer",
      "ATMCommonKey": "gtrgfrg",
      "IPAddress": details?.data?.ipAddress,
      "PORTID": "dedge",
      "MaxNotedDispence": "dweger",
      "MaxAmountDispence": "dtgre",
      "EMVEnabled": "0",
      "KeepAlive": "1",
      "Connection": "1",
      "Header": "1",
      "ATMStatus": "0",
      "productDetails": [
          {
              "selectedProduct": true,
              "denomValue": "refewr",
              "currencyCode": "fewrf"
          },
          {
              "selectedProduct": true,
              "denomValue": "cas",
              "currencyCode": "cs"
          },
          {
              "selectedProduct": false
          },
          {
              "selectedProduct": false
          },
          {
              "selectedProduct": false
          },
          {
              "selectedProduct": false
          },
          {
              "selectedProduct": false
          },
          {
              "selectedProduct": false
          }
      ]
  }
      this.router.navigate(['/pages/add_edit_atm'], { state:{ data:data , type:type} });
      console.log(details);
      
  }
  delateData(){
    this.delete_visible = false
  }
}
