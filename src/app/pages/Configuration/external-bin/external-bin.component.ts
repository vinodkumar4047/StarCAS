import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableComponent } from '../../../layout/component/table/table.component';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-external-bin',
  imports: [TableComponent,DialogModule,ButtonModule,CommonModule],
  templateUrl: './external-bin.component.html',
  styleUrl: './external-bin.component.scss'
})
export class ExternalBinComponent {
  delete_visible: any
  globalFilterFields: any = [
    'INSTID',
    'BIN',
    'DESCRIPTION',
    'RECORDID',
  ];
  
 rawData = [
    { INSTID: 'TEST', BIN: '437551', DESCRIPTION: 'TEST', RECORDID: '4' },
    { INSTID: 'TEST', BIN: '63980700', DESCRIPTION: 'TEST', RECORDID: '1' },
    { INSTID: 'TEST', BIN: '611111', DESCRIPTION: 'TEST', RECORDID: '3' },
    { INSTID: 'TEST', BIN: '605736', DESCRIPTION: 'TEST', RECORDID: '5' },
    { INSTID: 'TEST', BIN: '451452', DESCRIPTION: 'TEST', RECORDID: '7' },
    { INSTID: 'TEST', BIN: '466096', DESCRIPTION: 'TEST', RECORDID: '6' },
    { INSTID: 'TEST', BIN: '607084', DESCRIPTION: 'TEST', RECORDID: '8' },
  ];
  
  cols = [
    { field: 'INSTID', header: 'INST ID' },
  { field: 'BIN', header: 'BIN' },
  { field: 'DESCRIPTION', header: 'Description' },
  { field: 'RECORDID', header: 'Record ID' },
  { field: 'Action', header: 'Action' ,type:['view','edit','delete']},
  ];

constructor(private router: Router) { };

  ngOnInit(){

  }

  delateData(){
    this.delete_visible = false
  }

  addOrEdit(type:any,data:any){
    this.router.navigate(['/pages/add_externalBin'], { state:{ data:data?.data , type:type} });
  }
}
