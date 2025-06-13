import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableComponent } from '../../../layout/component/table/table.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-txn-allow-blocked-mcc',
  imports: [TableComponent, DialogModule, ButtonModule, CommonModule, FormsModule, InputTextModule],
  templateUrl: './txn-allow-blocked-mcc.component.html',
  styleUrl: './txn-allow-blocked-mcc.component.scss'
})
export class TxnAllowBlockedMCCComponent {
  delete_visible: any
  globalFilterFields: any = [
    'INSTID',
    'MCARD_NO',
    'FROMDATE',
    'TODATE'
  ];

  rawData = [
    {
      "INSTID": "TEST",
      "HASHED_CHN": "d94461609bf7c4a9c931f7d14dce1869149ef20e9553db90d78c804117d23a463b23fd06008fd26e41bc5b545be607124052dbb77173de456ca6c5a4cdbd10a3",
      "MCARD_NO": "6398-07xx-xxxxxxx-0278",
      "FROMDATE": "23-NOV-22",
      "TODATE": "16-DEC-21"
    },
    {
      "INSTID": "TEST",
      "HASHED_CHN": "d46839bf7c4a9c931f7d14dce1869149ef20e9553db90d78c804117d23a463b23fd06008b77173de456ca6c5a4cdbd10a3",
      "MCARD_NO": "6398-07xx-xxxxxxx-1821",
      "FROMDATE": "21-SEP-22",
      "TODATE": "18-NOV-22"
    },
    {
      "INSTID": "TEST",
      "HASHED_CHN": "d78661609bf7c4a9c931f7d14dce1869149ef20e9553db90d78c804117d23a463b23",
      "MCARD_NO": "6398-07xx-xxxxxxx-1888",
      "FROMDATE": "08-JUN-22",
      "TODATE": "30-NOV-22"
    },
    {
      "INSTID": "TEST",
      "HASHED_CHN": "d94469089bf7c4a9c931f7d14dce1869149ef20e9553db90d78c804117d23a463b23fd06008fd26e41bc5b545be60712",
      "MCARD_NO": "6398-07xx-xxxxxxx-1870",
      "FROMDATE": "18-AUG-21",
      "TODATE": "25-OCT-22"
    },
    {
      "INSTID": "TEST",
      "HASHED_CHN": "d94461609bf7c4a9c931f7d14dce1869149ef20e9553db90d78c804117d23a463b23fd06008fd26e41bc5b545be607124052dbb77173de456ca6c5a4cdbd10a3",
      "MCARD_NO": "6398-07xx-xxxxxxx-1839",
      "FROMDATE": "23-NOV-22",
      "TODATE": "16-DEC-21"
    },
    {
      "INSTID": "TEST",
      "HASHED_CHN": "d238661609bf7c4a9c931f7d14dce1869149ef20e9553db90d78c804117d23a463b23fd06008",
      "MCARD_NO": "6398-07xx-xxxxxxx-1813",
      "FROMDATE": "02-JUN-22",
      "TODATE": "08-DEC-22"
    }
  ];

  cols = [
    { field: 'INSTID', header: 'INST ID' },
    { field: 'MCARD_NO', header: 'CHN', sort: true, type: 'string' },
    { field: 'FROMDATE', header: 'From Date', sort: true, type: 'date' },
    { field: 'TODATE', header: 'To Date', sort: true, type: 'date' },
    { field: 'Action', header: 'Action', type: ['view', 'edit', 'delete'] },
  ];

  editVisible: any;
  Edit_data: any = {
    MCARD_NO: '',
    FROMDATE: '',
    TODATE: '',
    INSTID: ''
  };
  tpCheck!: boolean;
  buttonsList: any = [
    { label: 'Authorize Delete MCC Allowed', icon: 'pi pi-user-minus', type: 'deleteAuthorizedMCCAllowed', variant: 'outlined', severity: "danger" },
  ]
  userRole: any = localStorage.getItem('userRole');
  userType: any = localStorage.getItem('userType');
  constructor(private router: Router) { };

  ngOnInit() {
    this.cols = this.userType === 'M'
      ? this.cols
      : this.cols.filter(col => col.field !== 'Action');
  }

  delateData() {
    this.delete_visible = false
  }

  edit(data: any, type: any) {
    this.Edit_data = { ...data?.data };
    console.log(data);
    this.tpCheck = type == 'View' ? true : false;
    this.editVisible = true;

  }

  addOrEdit(type: any, data: any) {
    this.router.navigate(['/pages/add_mcc_card'], { state: { data: data?.data, type: type } });
  };

  txn_AllowBlocked(data: any) {
    console.log('txn-allowed-risk-country-authorize', data)
    this.router.navigate(['/pages/Authorize_Delete_MCC'], { state: { data: data?.data, type: data.type } });
  }
}
