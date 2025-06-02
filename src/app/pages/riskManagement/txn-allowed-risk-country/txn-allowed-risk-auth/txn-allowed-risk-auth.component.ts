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
  selector: 'app-txn-allowed-risk-auth',
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
  templateUrl: './txn-allowed-risk-auth.component.html',
  styleUrl: './txn-allowed-risk-auth.component.scss'
})
export class TxnAllowedRiskAuthComponent {
  constructor(private location: Location) { }
  header: any
  routeData: any = history.state;

  globalFilterFields: any = [
    'INSTID',
    'MASK_CARDNO',
    'FROMDATE',
    'TODATE'
  ];
  customers = [
    {
      "INSTID": "TEST",
      "CHN": "8a8fd02d5363fa48dfe3169226bde2dc70d1c5d5fb07fd1f53377227813bfc1e32ba3953e02dfb8e1f06c5efe143423d5a84fac631c7e5684e153e265c35ff63",
      "STATUS": "A",
      "USERTYPE": "M",
      "MASK_CARDNO": "8674XXXXX8612",
      "MAKER_ID": "24",
      "CHECKER_ID": "11",
      "FROMDATE": "24-AUG-22",
      "TODATE": "24-AUG-22",
      "CHECKER_DATE": "24-AUG-2022",
      "MAKER_DATE": "24-AUG-2022",
      "USERNAME": "demomaker"
    },
    {
      "INSTID": "TEST",
      "CHN": "81664927b7a079fb8412f423b939cf26ebbc1208f973e897055b11f8524ee71330cc62500c42004725c0fe88cd95ff45bc0fc6bab21180a93aff8730475ad168",
      "STATUS": "A",
      "USERTYPE": "M",
      "MASK_CARDNO": "5686XXXXX8687",
      "MAKER_ID": "24",
      "CHECKER_ID": "11",
      "FROMDATE": "23-NOV-22",
      "TODATE": "06-DEC-22",
      "CHECKER_DATE": "24-AUG-2022",
      "MAKER_DATE": "22-NOV-2022",
      "USERNAME": "demomaker"
    },
    {
      "INSTID": "TEST",
      "CHN": "0b981c655ca91fbc298acaa1490448e6c9846dc0fd7ec6ae933ead18dde31e29da89d20c05415eddbae63b1df2586e37bf2c59873414ce5808914a9eaa44400b",
      "STATUS": "A",
      "USERTYPE": "C",
      "MASK_CARDNO": "9745XXXXX8765",
      "MAKER_ID": "25",
      "CHECKER_ID": "11",
      "FROMDATE": "25-AUG-22",
      "TODATE": "31-AUG-22",
      "CHECKER_DATE": "24-AUG-2022",
      "MAKER_DATE": "24-AUG-2022",
      "USERNAME": "demochecker"
    },
    {
      "INSTID": "TEST",
      "CHN": "dccc24c477426410d8ad662df6f25f304bd84c118eaf793b525a3a8dbf953b92c0fb43c7f7e3d25e656cc7156d71b638fb3ae8c0860bece7d8252283e4ee3e71",
      "STATUS": "A",
      "USERTYPE": "C",
      "MASK_CARDNO": "8754XXXXX5747",
      "MAKER_ID": "25",
      "CHECKER_ID": "11",
      "FROMDATE": "16-NOV-22",
      "TODATE": "30-NOV-22",
      "CHECKER_DATE": "15-NOV-2022",
      "MAKER_DATE": "15-NOV-2022",
      "USERNAME": "demochecker"
    },
    {
      "INSTID": "TEST",
      "CHN": "7b0669bb5605de6fc499809f6b073b6094138461d615fc284d7af5f168ec089b1bd9151893c9943b4f86b22d78fa97bd77fb915eefe115c201d840a48110160a",
      "STATUS": "A",
      "USERTYPE": "M",
      "MASK_CARDNO": "8746XXXXX6546",
      "MAKER_ID": "25",
      "CHECKER_ID": "11",
      "FROMDATE": "16-SEP-22",
      "TODATE": "21-SEP-22",
      "CHECKER_DATE": "15-SEP-2022",
      "MAKER_DATE": "15-SEP-2022",
      "USERNAME": "demochecker"
    }
  ];
  cols = [
    { field: 'INSTID', header: 'INST ID' },
    { field: 'MASK_CARDNO', header: 'TXN Alloewd Card Number', sort: true, type: 'string' },
    { field: 'FROMDATE', header: 'From Date', sort: true, type: 'date' },
    { field: 'TODATE', header: 'To Date', sort: true, type: 'date' },
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
    this.header = this.routeData.type == 'viewAuth' ? 'Authorize Offline Allowed PIN' : 'Authorize Delete Offline Allowed PIN'
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
