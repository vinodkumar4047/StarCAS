import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableComponent } from '../../../../layout/component/table/table.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-atm',
  imports: [CommonModule, ButtonModule, TableComponent, DialogModule, FormsModule],
  templateUrl: './auth-atm.component.html',
  styleUrl: './auth-atm.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthAtmComponent {
  header: any;
  routeData: any = history.state;
  tableData: any = [
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
  ];
  globalFilterFields: any = [
    'instId',
    'atmId',
    'atmTypeId',
    'logicalGroup',
    'ipAddress',
    'acquirerBranch'
  ];

  cols = [
    { field: 'instId', header: 'INST ID' },
    { field: 'atmId', header: 'ATM ID' },
    { field: 'atmTypeId', header: 'ATM TYPE ID' },
    { field: 'logicalGroup', header: 'LOGICAL GROUP' },
    { field: 'ipAddress', header: 'IP ADDRESS' },
    { field: 'acquirerBranch', header: 'ACQUIRER BRANCH' },
    { field: 'Action', header: 'Action', type: [this.routeData.type == 'Auth' ? 'view' : 'delete'] } // Optional, if you're using action buttons
  ];
  Edit_data: any = {
    INST_ID: '',
    BRANCH_ID: '',
    BRANCH_MAP_CODE: '',
    BRANCH_NAME: ''
  };
  delete_visible: any;


  constructor(private location: Location,private router: Router) { }
  ngOnInit() {
    this.header = this.routeData.type == 'Auth' ? 'View ATM Authorization' : 'View ATM Delete Authorization'
  }
  editFunction(customer: any) {
    this.Edit_data = { ...customer.data };
    const data = {
      "ATMID": this.Edit_data?.atmId,
      "Locate": "ds",
      "ATMLocation": "cwe",
      "ATMType": this.Edit_data?.atmTypeId,
      "ATMLogicalGroup": this.Edit_data?.logicalGroup,
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
      "IPAddress": this.Edit_data?.ipAddress,
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
    this.router.navigate(['/pages/add_edit_atm'], { state: { data: data, type: this.routeData.type } });
  }
  goBack() {
    this.location.back();
  }
}
