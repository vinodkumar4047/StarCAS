import { Component } from '@angular/core';
import { TableComponent } from '../../../layout/component/table/table.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fit',
  imports: [TableComponent,DialogModule,ButtonModule,CommonModule,FormsModule,InputTextModule],
  templateUrl: './fit.component.html',
  styleUrl: './fit.component.scss',
})
export class FitComponent {
delete_visible: any
  globalFilterFields: any = [
    'INSTID',
    'ATMID',
    'SECURITYID',
    'FITRECORD',
    'RECORDID'
  ];
  
 rawData = [
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
  {
    "INSTID": "TEST",
    "ATMID": "*",
    "SECURITYID": 60898900,
    "FITRECORD": "607084FFFF",
    "RECORDID": 4,
   
  },
  {
    "INSTID": "TEST",
    "ATMID": "*",
    "SECURITYID": 60708600,
    "FITRECORD": "605054FFFF",
    "RECORDID": 5,
   
  }
]
;
  
  cols = [
    { field: 'INSTID', header: 'INST ID' },
    { field: 'ATMID', header: 'ATM ID',sort:true,type: 'string' },
  { field: 'SECURITYID', header: 'Security ID',sort:true,type: 'number' },
  { field: 'FITRECORD', header: 'Fitercord',sort:true,type: 'string' },
  { field: 'RECORDID', header: 'Record ID',sort:true,type: 'number' },
  { field: 'Action', header: 'Action' ,type:['view','edit','delete']},
  ];

  editVisible:any;
  Edit_data:any={
    ATMID: '',
    BRANCHID: '',
    FITRECORD: '',
    SECURITYID: '',
    RECORDID: ''
  };
tpCheck!:boolean;

constructor(private router: Router) { };

  ngOnInit(){

  }

  delateData(){
    this.delete_visible = false
  }

  edit(data:any,type:any){
    this.Edit_data = data?.data;
    console.log(data);
    this.tpCheck = type == 'View' ? true:false;
    this.editVisible = true;

  }

  addOrEdit(type:any,data:any){
    this.router.navigate(['/pages/add_fit'], { state:{ data:data?.data , type:type} });
  }
}
