import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TableModule, Table } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableComponent } from '../../../layout/component/table/table.component';

@Component({
  selector: 'app-branch',
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
  templateUrl: './branch.component.html',
  styleUrl: './branch.component.scss'
})
export class BranchComponent {
  edit_visible: boolean = false;
  showViewData: any = null;
  Edit_data: any = {
    INSTID:'',
    BRANCHCODE:'',
    BRANCHMAPCODE:'',
    BRANCHNAME:''
  };
  ADDvisible: boolean = false;
  tpCheck: any;
  clear(able: Table) {

  }

  editFunction(customer: any, type:any) {
     this.Edit_data = {...customer.data};  
    this.edit_visible = true;
    this.tpCheck = type == 'view' ? true:false;
  }
  deleteItem() {
    console.log('Item deleted!');
    this.delete_visible = true;
  }
  globalFilterFields: any = [
    'INSTID',
    'BRANCHCODE',
    'BRANCHMAPCODE',
    'BRANCHNAME',
  ];

  customers = [{ "INSTID": "TEST", "BRANCHCODE": "634", "BRANCHNAME": "HEAD OFFICE", "BRANCHMAPCODE": "001", "STATUS": "A", "USERTYPE": "C", "MAKER_ID": "24", "CHECKER_ID": "24", "CHECKER_DATE": "05-JUL-2024", "MAKER_DATE": "05-JUL-2024", "USERNAME": "demomaker" },
  { "INSTID": "TEST", "BRANCHCODE": "453", "BRANCHNAME": "TEST OFFICE", "BRANCHMAPCODE": "002", "STATUS": "A", "USERTYPE": "C", "MAKER_ID": "24", "CHECKER_ID": "24", "CHECKER_DATE": "05-JUL-2024", "MAKER_DATE": "05-JUL-2024", "USERNAME": "demomaker" },
  { "INSTID": "TEST", "BRANCHCODE": "903", "BRANCHNAME": "ADMIN OFFICE", "BRANCHMAPCODE": "003", "STATUS": "A", "USERTYPE": "C", "MAKER_ID": "24", "CHECKER_ID": "24", "CHECKER_DATE": "05-JUL-2024", "MAKER_DATE": "05-JUL-2024", "USERNAME": "demomaker" },
  { "INSTID": "TEST", "BRANCHCODE": "387", "BRANCHNAME": "CGS OFFICE", "BRANCHMAPCODE": "004", "STATUS": "A", "USERTYPE": "C", "MAKER_ID": "24", "CHECKER_ID": "24", "CHECKER_DATE": "05-JUL-2024", "MAKER_DATE": "05-JUL-2024", "USERNAME": "demomaker" }]
  cols = [
    { field: 'INSTID', header: 'INST ID' },
    { field: 'BRANCHCODE', header: 'BRANCH ID' },
    { field: 'BRANCHMAPCODE', header: 'BRANCH MAP CODE' },
    { field: 'BRANCHNAME', header: 'BRANCH NAME' },
    { field: 'Action', header: 'Action', type: ['view', 'edit', 'delete'] },
  ];
  delete_visible: any;

  addOrEdit(data1?: any, data?: any) {
    this.ADDvisible = !this.ADDvisible
  }
}
