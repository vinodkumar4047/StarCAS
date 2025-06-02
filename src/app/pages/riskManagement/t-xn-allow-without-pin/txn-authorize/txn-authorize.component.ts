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
  selector: 'app-txn-authorize',
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
  templateUrl: './txn-authorize.component.html',
  styleUrl: './txn-authorize.component.scss'
})
export class TxnAuthorizeComponent {
  constructor(private location: Location) { }
  header: any
  routeData: any = history.state;

  globalFilterFields: any = [
    'INSTID',
    'BRANCHCODE',
    'BRANCHMAPCODE',
    'BRANCHNAME',
  ];

  customers = [
    {
      "INSTID": "TEST",
      "HASHED_CHN": "d94461609bf7c4a9c931f7d14dce1869149ef20e9553db90d78c804117d23a463b23fd06008fd26e41bc5b545be607124052dbb77173de456ca6c5a4cdbd10a3",
      "MCARD_NO": "6398-07xx-xxxxxxx-0278",
      "FROMDATE": "03-AUG-22",
      "TODATE": "14-AUG-23"
    },
    {
      "INSTID": "TEST",
      "HASHED_CHN": "d46839bf7c4a9c931f7d14dce1869149ef20e9553db90d78c804117d23a463b23fd06008b77173de456ca6c5a4cdbd10a3",
      "MCARD_NO": "6398-07xx-xxxxxxx-1821",
      "FROMDATE": "07-JAN-22",
      "TODATE": "05-JUL-23"
    },
    {
      "INSTID": "TEST",
      "HASHED_CHN": "d78661609bf7c4a9c931f7d14dce1869149ef20e9553db90d78c804117d23a463b23",
      "MCARD_NO": "6398-07xx-xxxxxxx-1888",
      "FROMDATE": "14-JAN-22",
      "TODATE": "13-SEP-23"
    },
    {
      "INSTID": "TEST",
      "HASHED_CHN": "d94469089bf7c4a9c931f7d14dce1869149ef20e9553db90d78c804117d23a463b23fd06008fd26e41bc5b545be60712",
      "MCARD_NO": "6398-07xx-xxxxxxx-1870",
      "FROMDATE": "07-JAN-22",
      "TODATE": "24-MAY-23"
    },
    {
      "INSTID": "TEST",
      "HASHED_CHN": "d94461609bf7c4a9c931f7d14dce1869149ef20e9553db90d78c804117d23a463b23fd06008fd26e41bc5b545be607124052dbb77173de456ca6c5a4cdbd10a3",
      "MCARD_NO": "6398-07xx-xxxxxxx-1839",
      "FROMDATE": "03-AUG-22",
      "TODATE": "14-AUG-23"
    },
    {
      "INSTID": "TEST",
      "HASHED_CHN": "d238661609bf7c4a9c931f7d14dce1869149ef20e9553db90d78c804117d23a463b23fd06008",
      "MCARD_NO": "6398-07xx-xxxxxxx-1813",
      "FROMDATE": "10-JAN-22",
      "TODATE": "03-AUG-23"
    },
    {
      "INSTID": "TEST",
      "HASHED_CHN": "ed3eedd6f2fef05b775b9325889ecfa0e3f3f16784be50b9b0484b8a537331515598260b6e5735abd1a5c8aeaf0f714bf2abbc6e232b86e8d44a4f208302258a",
      "MCARD_NO": "6398-07xx-xxxxxxx-2183",
      "FROMDATE": "07-JAN-22",
      "TODATE": "20-JUL-23"
    },
    {
      "INSTID": "TEST",
      "HASHED_CHN": "f18b4c11fbdb477ed017719e30e93b55a7abe969bc625e3aa5853d8cdb6a4ef99917e997b9bafc209f175b4ac5e4b157489269427667b3a9784b7cddbb1364c5",
      "MCARD_NO": "6398-07xx-xxxxxxx-2175",
      "FROMDATE": "01-AUG-23",
      "TODATE": "04-AUG-23"
    }
  ];
  cols = [
    { field: 'INSTID', header: 'INST ID' },
    { field: 'MCARD_NO', header: 'CHN', sort: true, type: 'string' },
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
    MCARD_NO: '',
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
