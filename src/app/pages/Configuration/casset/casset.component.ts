import { Component } from '@angular/core';
import { TableComponent } from "../../../layout/component/table/table.component";
import { Select, SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-casset',
  imports: [TableComponent,DialogModule,ButtonModule,CommonModule,FormsModule,FormsModule],
  templateUrl: './casset.component.html',
  styleUrl: './casset.component.scss'
})
export class CASSETComponent {
globalFilterFields: any = [
    'INSTID',
    'ATMID',
    'AUTHBY',
    'UPDATEDBY',
  ];
  
 rawData = [
  {
    "ATMID": "TEST002",
    "UPDATEDBY": "adminmaker",
    "AUTHBY": "adminchecker",
    "INSTID": "TEST"
  },
  {
    "ATMID": "TEST005",
    "UPDATEDBY": "adminmaker",
    "AUTHBY": "adminchecker",
    "INSTID": "TEST"
  },
  {
    "ATMID": "TEST007",
    "UPDATEDBY": "adminmaker",
    "AUTHBY": "adminchecker",
    "INSTID": "TEST"
  },
  {
    "ATMID": "TEST008",
    "UPDATEDBY": "adminmaker",
    "AUTHBY": "adminchecker",
    "INSTID": "TEST"
  },
  {
    "ATMID": "TEST009",
    "UPDATEDBY": "adminmaker",
    "AUTHBY": "adminchecker",
    "INSTID": "TEST"
  }
];
  
  cols = [
    { field: 'ATMID', header: 'ATM ID' },
  { field: 'UPDATEDBY', header: 'Updated By' },
  { field: 'AUTHBY', header: 'Auth By' },
  { field: 'INSTID', header: 'INST ID' },
  ];

constructor(private router: Router) { };

  ngOnInit(){
  }

  edit(data:any){
    console.log(data);
    // this.editVisible = true;
      this.router.navigate(['/pages/update_casset']);

  }

}
