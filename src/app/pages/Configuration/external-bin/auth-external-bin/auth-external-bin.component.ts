import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableComponent } from '../../../../layout/component/table/table.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-external-bin',
  imports: [CommonModule, ButtonModule, TableComponent,DialogModule,FormsModule],
  templateUrl: './auth-external-bin.component.html',
  styleUrl: './auth-external-bin.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AuthExternalBinComponent {
 header: any;
  routeData:any = history.state;
  tableData:any = [
 { INSTID: 'TEST', BIN: '437551', DESCRIPTION: 'TEST', RECORDID: '4' },
    { INSTID: 'TEST', BIN: '63980700', DESCRIPTION: 'TEST', RECORDID: '1' },
    { INSTID: 'TEST', BIN: '611111', DESCRIPTION: 'TEST', RECORDID: '3' },
];
 globalFilterFields: any = [
    'INSTID',
    'BIN',
    'DESCRIPTION',
    'RECORDID',
  ];
  
  cols = [
    { field: 'INSTID', header: 'INST ID' },
  { field: 'BIN', header: 'BIN' },
  { field: 'DESCRIPTION', header: 'Description' },
  { field: 'RECORDID', header: 'Record ID' },
  { field: 'Action', header: 'Action' ,type:[this.routeData.type == 'auth'?'view':'delete']},
  ];
edit_visible: boolean = false;
 delete_visible: any;


  constructor(private location: Location) { }
  ngOnInit(){
    this.header = this.routeData.type == 'auth'?'View External BIN Authorization':'View External BIN Delete Authorization'
  }
    goBack() {
    this.location.back();
  }
}
