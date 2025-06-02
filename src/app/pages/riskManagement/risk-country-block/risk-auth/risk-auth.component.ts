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
import { Select } from 'primeng/select';

@Component({
  selector: 'app-risk-auth',
  imports: [TableComponent, DialogModule, ButtonModule,
    CommonModule, FormsModule, FormsModule, InputTextModule, Select],
  templateUrl: './risk-auth.component.html',
  styleUrl: './risk-auth.component.scss'
})
export class RiskAuthComponent {
  constructor(private location: Location) { }
  header: any
  routeData: any = history.state;

  rawData = [
    {
      "INSTID": "TEST",
      "BLOCKEDCOUNTRYCODE": "17",
      "COUNTRYDESC": "Afgani",
      "TXNALLOWEDFLAG": "BLOCKED",
      "STATUS": "A",
      "USERTYPE": "C",
      "MAKER_ID": "24",
      "CHECKER_ID": "25",
      "CHECKER_DATE": "07-APR-2025",
      "MAKER_DATE": "07-APR-2025",
      "USERNAME": "demomaker"
    },
    {
      "INSTID": "TEST",
      "BLOCKEDCOUNTRYCODE": "165",
      "COUNTRYDESC": "Russia",
      "TXNALLOWEDFLAG": "BLOCKED",
      "STATUS": "A",
      "USERTYPE": "C",
      "MAKER_ID": "24",
      "CHECKER_ID": "3",
      "CHECKER_DATE": "23-MAR-2022",
      "MAKER_DATE": "24-AUG-2022",
      "USERNAME": "demomaker"
    },
    {
      "INSTID": "TEST",
      "BLOCKEDCOUNTRYCODE": "355",
      "COUNTRYDESC": "Albania",
      "TXNALLOWEDFLAG": "UNBLOCKED",
      "STATUS": "A",
      "USERTYPE": "C",
      "MAKER_ID": "24",
      "CHECKER_ID": "11",
      "CHECKER_DATE": "24-AUG-2022",
      "MAKER_DATE": "24-AUG-2022",
      "USERNAME": "demomaker"
    },
    {
      "INSTID": "TEST",
      "BLOCKEDCOUNTRYCODE": "931",
      "COUNTRYDESC": "Afghanistan",
      "TXNALLOWEDFLAG": "BLOCKED",
      "STATUS": "A",
      "USERTYPE": "C",
      "MAKER_ID": "25",
      "CHECKER_ID": "11",
      "CHECKER_DATE": "25-AUG-2022",
      "MAKER_DATE": "24-AUG-2022",
      "USERNAME": "demochecker"
    },
    {
      "INSTID": "TEST",
      "BLOCKEDCOUNTRYCODE": "232",
      "COUNTRYDESC": "Afganis",
      "TXNALLOWEDFLAG": "UNBLOCKED",
      "STATUS": "A",
      "USERTYPE": "M",
      "MAKER_ID": "25",
      "CHECKER_ID": "3",
      "CHECKER_DATE": "23-MAR-2022",
      "MAKER_DATE": "24-AUG-2022",
      "USERNAME": "demochecker"
    },
    {
      "INSTID": "TEST",
      "BLOCKEDCOUNTRYCODE": "856",
      "COUNTRYDESC": "Laos",
      "TXNALLOWEDFLAG": "BLOCKED",
      "STATUS": "A",
      "USERTYPE": "M",
      "MAKER_ID": "25",
      "CHECKER_ID": "11",
      "CHECKER_DATE": "15-SEP-2022",
      "MAKER_DATE": "16-DEC-2022",
      "USERNAME": "demochecker"
    }
  ];
  optvalue: any = [
    { name: 'BLOCKED', code: 'BLOCKED' },
    { name: 'UNBLOCKED', code: 'UNBLOCKED' }
  ]
  cols = [
    { field: 'INSTID', header: 'INST ID' },
    { field: 'BLOCKEDCOUNTRYCODE', header: 'Blocked Country Code' },
    { field: 'COUNTRYDESC', header: 'Country Desc' },
    { field: 'TXNALLOWEDFLAG', header: 'TXN Allowed Flag' },
    { field: 'Action', header: 'Action', type: [this.routeData.type == 'viewAuth' ? 'view' : 'delete'] },
  ];
  globalFilterFields: any = [
    'INSTID',
    'BLOCKEDCOUNTRYCODE',
    'COUNTRYDESC',
    'TXNALLOWEDFLAG'
  ];

  delete_visible: any;
  visible: boolean = false;
  editVisible: any;
  tpCheck!: boolean;
  Edit_data: any = {
    INSTID: '',
    MCARD_NO: '',
    FROMDATE: '',
    TODATE: ''
  };

  ngOnInit() {
    this.header = this.routeData.type == 'viewAuth' ? 'View Country Block Authorization' : 'Authorize Delete Offline Allowed PIN'
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
