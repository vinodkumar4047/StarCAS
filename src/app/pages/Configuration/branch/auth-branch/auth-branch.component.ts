import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableComponent } from "../../../../layout/component/table/table.component";
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-branch',
  imports: [CommonModule, ButtonModule, TableComponent,DialogModule,FormsModule],
  templateUrl: './auth-branch.component.html',
  styleUrl: './auth-branch.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AuthBranchComponent {
  header: any;
  routeData:any = history.state;
  tableData:any = [
  {
    "INST_ID": "TEST",
    "BRANCH_ID": 387,
    "BRANCH_MAP_CODE": "005",
    "BRANCH_NAME": "CGS OFFICE"
  },
  {
    "INST_ID": "BANK001",
    "BRANCH_ID": 102,
    "BRANCH_MAP_CODE": "007",
    "BRANCH_NAME": "MAIN BRANCH"
  },
  {
    "INST_ID": "BANK002",
    "BRANCH_ID": 204,
    "BRANCH_MAP_CODE": "010",
    "BRANCH_NAME": "DOWNTOWN OFFICE"
  }
];
globalFilterFields = ['INST_ID', 'BRANCH_ID', 'BRANCH_MAP_CODE', 'BRANCH_NAME'];
cols = [
  { field: 'INST_ID', header: 'INST ID' },
  { field: 'BRANCH_ID', header: 'BRANCH ID',sort:true,type: 'number' },
  { field: 'BRANCH_MAP_CODE', header: 'BRANCH MAP CODE',sort:true,type: 'string' },
  { field: 'BRANCH_NAME', header: 'BRANCH NAME',sort:true,type: 'string' },
  { field: 'Action', header: 'Action', type: [this.routeData.type == 'auth'?'view':'delete'] } // Optional, if you're using action buttons
];
edit_visible: boolean = false;
  Edit_data: any = {
    INST_ID: '',
    BRANCH_ID: '',
    BRANCH_MAP_CODE: '',
    BRANCH_NAME: ''
  };
 delete_visible: any;


  constructor(private location: Location) { }
  ngOnInit(){
    this.header = this.routeData.type == 'auth'?'View Branch Authorization':'View Branch Delete Authorization'
  }
    editFunction(customer: any, type: any) {
    this.Edit_data = { ...customer.data };
    this.edit_visible = true;
  }
    goBack() {
    this.location.back();
  }
}
