import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TooltipModule } from 'primeng/tooltip';
import { TableComponent } from '../../../layout/component/table/table.component';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-port',
  imports: [TooltipModule,
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    ButtonModule,
    TableComponent,
    DialogModule,
    InputTextModule],
  templateUrl: './port.component.html',
  styleUrl: './port.component.scss'
})
export class PortComponent {
  tpCheck!: boolean;
  editVisible: any;
  Edit_data: any;

  addOrEdit(data?: any, type?: any) {
    if (data) {
      this.Edit_data = { ...data?.data }
      console.log(' this.Edit_data', this.Edit_data);

    } else {
      this.Edit_data = null;
    }
    this.tpCheck = type == 'View' ? true : false;
    this.editVisible = true;
  };

  globalFilterFields: any = [
    'DEVICEGROUPID',
    'INSTID',
    'DEVICEINSTID',
    'FORMNAME',
    'ID',
    'IPADDRESS'
  ];

  cols = [
    { field: 'DEVICEGROUPID', header: 'DEVICE GROUP ID' },
    { field: 'INSTID', header: 'INST ID' },
    { field: 'DEVICEINSTID', header: 'DEVICE INST ID' },
    { field: 'FORMNAME', header: 'FORM NAME' },
    { field: 'ID', header: 'ID' },
    { field: 'IPADDRESS', header: 'IP ADDRESS' },
    { field: 'Action', header: 'Action', type: ['view'] },
  ];

  atmData = [{ "DEVICEGROUPID": "ATM", "INSTID": "TEST", "DEVICEINSTID": "TEST", "FORMNAME": "atmform", "ID": "RCBSL002", "IPADDRESS": "10.93.101.223" },
  { "DEVICEGROUPID": "ATM", "INSTID": "TEST", "DEVICEINSTID": "TEST", "FORMNAME": "atmform", "ID": "RCBSL003", "IPADDRESS": "10.93.101.224" },
  { "DEVICEGROUPID": "ATM", "INSTID": "TEST", "DEVICEINSTID": "TEST", "FORMNAME": "atmform", "ID": "RCBSL004", "IPADDRESS": "10.93.101.225" },
  { "DEVICEGROUPID": "ATM", "INSTID": "TEST", "DEVICEINSTID": "TEST", "FORMNAME": "atmform", "ID": "RCBSLTEST", "IPADDRESS": "10.93.101.222" },
  { "DEVICEGROUPID": "ATM", "INSTID": "TEST", "DEVICEINSTID": "TEST", "FORMNAME": "atmform", "ID": "AZIZI00", "IPADDRESS": "172.16.10.11" },
  { "DEVICEGROUPID": "ATM", "INSTID": "TEST", "DEVICEINSTID": "TEST", "FORMNAME": "atmform", "ID": "TESTATM", "IPADDRESS": "172.16.10.89" },
  { "DEVICEGROUPID": "ATM", "INSTID": "TEST", "DEVICEINSTID": "TEST", "FORMNAME": "atmform", "ID": "SCBATM_4", "IPADDRESS": "172.16.10.207" },
  { "DEVICEGROUPID": "ATM", "INSTID": "TEST", "DEVICEINSTID": "TEST", "FORMNAME": "atmform", "ID": "ATM_001", "IPADDRESS": "172.16.10.89" },
  { "DEVICEGROUPID": "ATM", "INSTID": "TEST", "DEVICEINSTID": "TEST", "FORMNAME": "atmform", "ID": "SCBATM_1", "IPADDRESS": "172.16.10.207" },
  { "DEVICEGROUPID": "ATM", "INSTID": "TEST", "DEVICEINSTID": "TEST", "FORMNAME": "atmform", "ID": "SCBATM_2", "IPADDRESS": "172.16.10.207" },
  { "DEVICEGROUPID": "ATM", "INSTID": "TEST", "DEVICEINSTID": "TEST", "FORMNAME": "atmform", "ID": "SCBATM_3", "IPADDRESS": "172.16.10.207" },
  { "DEVICEGROUPID": "ATM", "INSTID": "TEST", "DEVICEINSTID": "TEST", "FORMNAME": "atmform", "ID": "EEETT", "IPADDRESS": "172.16.10.89" },
  { "DEVICEGROUPID": "ATM", "INSTID": "TEST", "DEVICEINSTID": "TEST", "FORMNAME": "atmform", "ID": "ATM01", "IPADDRESS": "172.16.10.89" },
  { "DEVICEGROUPID": "ATM", "INSTID": "TEST", "DEVICEINSTID": "TEST", "FORMNAME": "atmform", "ID": "ATM01", "IPADDRESS": "172.16.10.89" },
  { "DEVICEGROUPID": "ATM", "INSTID": "TEST", "DEVICEINSTID": "TEST", "FORMNAME": "atmform", "ID": "ATM_002", "IPADDRESS": "172.16.10.89" },
  { "DEVICEGROUPID": "ATM", "INSTID": "TEST", "DEVICEINSTID": "TEST", "FORMNAME": "atmform", "ID": "ATM_003", "IPADDRESS": "172.16.10.89" },
  { "DEVICEGROUPID": "ATM", "INSTID": "TEST", "DEVICEINSTID": "TEST", "FORMNAME": "atmform", "ID": "AZIZI001", "IPADDRESS": "172.16.10.89" },
  { "DEVICEGROUPID": "ATM", "INSTID": "TEST", "DEVICEINSTID": "TEST", "FORMNAME": "atmform", "ID": "ATM01", "IPADDRESS": "172.16.10.89" },
  { "DEVICEGROUPID": "ATM", "INSTID": "TEST", "DEVICEINSTID": "TEST", "FORMNAME": "atmform", "ID": "ATM01", "IPADDRESS": "172.16.10.89" },
  { "DEVICEGROUPID": "ATM", "INSTID": "TEST", "DEVICEINSTID": "TEST", "FORMNAME": "atmform", "ID": "00SCB111", "IPADDRESS": "172.36.52.78" },
  { "DEVICEGROUPID": "ATM", "INSTID": "TEST", "DEVICEINSTID": "TEST", "FORMNAME": "atmform", "ID": "TEST071", "IPADDRESS": "140.32.32" },
  { "DEVICEGROUPID": "ATM", "INSTID": "TEST", "DEVICEINSTID": "TEST", "FORMNAME": "atmform", "ID": "00SCB115", "IPADDRESS": "12.25.325" }]

}
