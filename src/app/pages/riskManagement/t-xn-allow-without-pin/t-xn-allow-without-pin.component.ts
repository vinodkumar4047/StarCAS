import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableComponent } from '../../../layout/component/table/table.component';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-t-xn-allow-without-pin',
  imports: [TableComponent, DialogModule, ButtonModule, CommonModule, FormsModule, FormsModule, InputTextModule],
  templateUrl: './t-xn-allow-without-pin.component.html',
  styleUrl: './t-xn-allow-without-pin.component.scss'
})
export class TXNALLOWWithoutPINComponent {
  delete_visible: any;
  addOrEdit(data: any, data1: any) {
    this.visible = true;

  }
  delateData() {

  }
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
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
    { field: 'Action', header: 'Action', type: ['view', 'edit', 'delete'] },
  ];
  globalFilterFields: any = [
    'INSTID',
    'ATMID',
    'AUTHBY',
    'UPDATEDBY',
  ];
  edit(data: any) {

  }
}
