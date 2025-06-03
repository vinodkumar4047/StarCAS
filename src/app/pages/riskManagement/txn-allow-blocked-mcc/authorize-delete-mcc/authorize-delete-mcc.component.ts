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
  selector: 'app-authorize-delete-mcc',
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
  templateUrl: './authorize-delete-mcc.component.html',
  styleUrl: './authorize-delete-mcc.component.scss'
})
export class AuthorizeDeleteMCCComponent {
  constructor(private location: Location) { }
  header: any
  routeData: any = history.state;

  globalFilterFields: any = [
    'INSTID',
    'MCARD_NO',
    'FROMDATE',
    'TODATE'
  ];
  customers = [
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
