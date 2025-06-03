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
  selector: 'app-authorize-ecomsite',
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
  templateUrl: './authorize-ecomsite.component.html',
  styleUrl: './authorize-ecomsite.component.scss'
})
export class AuthorizeEcomsiteComponent {
  constructor(private location: Location) { }
  header: any
  routeData: any = history.state;

  globalFilterFields: any = [
    'INSTID',
    'BLOCKEDMERCHANTLOCATION'
  ];

  customers = [
    {
      "INSTID": "TEST",
      "BLOCKEDMERCHANTLOCATION": "TAMILNADU",
      "STATUS": "A",
      "USERTYPE": "M",
      "MAKER_ID": "24",
      "CHECKER_ID": "11",
      "FROMDATE": "25-AUG-22",
      "TODATE": "25-AUG-22",
      "CHECKER_DATE": "25-AUG-2022",
      "MAKER_DATE": "25-AUG-2022",
      "USERNAME": "demomaker"
    },
    {
      "INSTID": "TEST",
      "BLOCKEDMERCHANTLOCATION": "DELHI",
      "STATUS": "A",
      "USERTYPE": "M",
      "MAKER_ID": "24",
      "CHECKER_ID": "11",
      "FROMDATE": "16-NOV-22",
      "TODATE": "30-NOV-22",
      "CHECKER_DATE": "30-NOV-2022",
      "MAKER_DATE": "30-NOV-2022",
      "USERNAME": "demomaker"
    },
    {
      "INSTID": "TEST",
      "BLOCKEDMERCHANTLOCATION": "PUNE",
      "STATUS": "A",
      "USERTYPE": "M",
      "MAKER_ID": "24",
      "CHECKER_ID": "3",
      "FROMDATE": "11-MAY-22",
      "TODATE": "20-MAY-22",
      "CHECKER_DATE": "09-MAY-2022",
      "MAKER_DATE": "09-MAY-2022",
      "USERNAME": "demomaker"
    },
    {
      "INSTID": "TEST",
      "BLOCKEDMERCHANTLOCATION": "KERALA",
      "STATUS": "A",
      "USERTYPE": "M",
      "MAKER_ID": "25",
      "CHECKER_ID": "11",
      "FROMDATE": "25-AUG-22",
      "TODATE": "25-AUG-22",
      "CHECKER_DATE": "30-NOV-2022",
      "MAKER_DATE": "25-AUG-2022",
      "USERNAME": "demochecker"
    },
    {
      "INSTID": "TEST",
      "BLOCKEDMERCHANTLOCATION": "MUMBAI",
      "STATUS": "A",
      "USERTYPE": "M",
      "MAKER_ID": "25",
      "CHECKER_ID": "3",
      "FROMDATE": "06-MAY-22",
      "TODATE": "18-MAY-22",
      "CHECKER_DATE": "09-MAY-2022",
      "MAKER_DATE": "05-MAY-2022",
      "USERNAME": "demochecker"
    },
    {
      "INSTID": "TEST",
      "BLOCKEDMERCHANTLOCATION": "ANDRA",
      "STATUS": "A",
      "USERTYPE": "M",
      "MAKER_ID": "25",
      "CHECKER_ID": "3",
      "FROMDATE": "06-MAY-22",
      "TODATE": "28-MAY-22",
      "CHECKER_DATE": "10-MAY-2022",
      "MAKER_DATE": "05-MAY-2022",
      "USERNAME": "demochecker"
    },
    {
      "INSTID": "TEST",
      "BLOCKEDMERCHANTLOCATION": "BIHAR",
      "STATUS": "A",
      "USERTYPE": "M",
      "MAKER_ID": "25",
      "CHECKER_ID": "11",
      "FROMDATE": "08-NOV-22",
      "TODATE": "30-NOV-22",
      "CHECKER_DATE": "30-NOV-2022",
      "MAKER_DATE": "30-NOV-2022",
      "USERNAME": "demochecker"
    }
  ];
  cols = [
    { field: 'INSTID', header: 'INST ID' },
    { field: 'BLOCKEDMERCHANTLOCATION', header: 'Blocked Merchant Location', sort: true, type: 'string' },
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
    this.header = this.routeData.type == 'viewAuth' ? 'View Location Block Authorization' : 'View Location Delete Authorization'
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
