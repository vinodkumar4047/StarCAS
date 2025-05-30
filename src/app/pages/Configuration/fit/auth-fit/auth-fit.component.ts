import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableComponent } from '../../../../layout/component/table/table.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-fit',
  imports: [CommonModule, ButtonModule, TableComponent,DialogModule,FormsModule],
  templateUrl: './auth-fit.component.html',
  styleUrl: './auth-fit.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AuthFitComponent {
header: any;
  routeData:any = history.state;
  tableData:any = [
 {
    "INSTID": "TEST",
    "ATMID": "*",
    "SECURITYID": 63980700,
    "FITRECORD": "401704FFFF",
    "RECORDID": 1,
   
  },
  {
    "INSTID": "TEST",
    "ATMID": "*",
    "SECURITYID": 60708400,
    "FITRECORD": "607084FFFF",
    "RECORDID": 2,
   
  },
  {
    "INSTID": "TEST",
    "ATMID": "*",
    "SECURITYID": 60708800,
    "FITRECORD": "507064FFFF",
    "RECORDID": 3,
   
  },
];
 globalFilterFields: any = [
   'INSTID',
    'ATMID',
    'SECURITYID',
    'FITRECORD',
    'RECORDID'
  ];
  
  cols = [
    { field: 'INSTID', header: 'INST ID' },
    { field: 'ATMID', header: 'ATM ID',sort:true,type: 'string' },
  { field: 'SECURITYID', header: 'Security ID',sort:true,type: 'number' },
  { field: 'FITRECORD', header: 'Fitercord',sort:true,type: 'string' },
  { field: 'RECORDID', header: 'Record ID',sort:true,type: 'number' },
  { field: 'Action', header: 'Action' ,type:[this.routeData.type == 'auth'?'view':'delete']},
  ];
edit_visible: boolean = false;
 delete_visible: any;


  constructor(private location: Location) { }
  ngOnInit(){
    this.header = this.routeData.type == 'auth'?'View FIT Authorization':'View FIT Delete Authorization'
  }
    goBack() {
    this.location.back();
  }
}
