import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TooltipModule } from 'primeng/tooltip';
import { TableComponent } from '../../../layout/component/table/table.component';

@Component({
  selector: 'app-hsm-monitoring',
  imports: [TooltipModule,
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    ButtonModule,
    TableComponent,
    DialogModule,],
  templateUrl: './hsm-monitoring.component.html',
  styleUrl: './hsm-monitoring.component.scss'
})
export class HSMMonitoringComponent {
  addOrEdit(data?: any) {

  }
  globalFilterFields: any = [
    'TXNCODE',
    'TXNDESC',
  ];
  cols = [
    { field: 'HSMNAME', header: 'HSM NAME' },
    { field: 'HSMPROTOCOL', header: 'PROTOCOL' },
    { field: 'HSMTYPE', header: 'MODEL' },
    { field: 'HSMADDRESS', header: 'IP' },
    { field: 'HSMPORT', header: 'PORT' },
    { field: 'HSMTIMEOUT', header: 'HSMTIME OUT' },
    { field: 'CONNECTIONINTERVAL', header: 'CONNECTION INTERVAL' },

    { field: 'HSMSTATUS', header: 'HSM STATUS' },
  ];
  atmData = [{ "HSMNAME": "PRIMARY", "HSMPROTOCOL": "TCPIP", "HSMTYPE": "RACAL", "HSMADDRESS": "10.93.121.92", "HSMPORT": 1500, "HEADERLEN": 2, "HEADERTYPE": "HEX", "HSMHEADERLEN": 4, "HSMTIMEOUT": 10, "CONNECTIONINTERVAL": 5, "HSMSTATUS": 0 },
  { "HSMNAME": "SECONDARY", "HSMPROTOCOL": "TCPIP", "HSMTYPE": "THALES", "HSMADDRESS": "10.93.101.84", "HSMPORT": 1500, "HEADERLEN": 2, "HEADERTYPE": "HEX", "HSMHEADERLEN": 4, "HSMTIMEOUT": 10, "CONNECTIONINTERVAL": 5, "HSMSTATUS": 0 },
  { "HSMNAME": "PRIMARY", "HSMPROTOCOL": "TCPIP", "HSMTYPE": "UTIMACO", "HSMADDRESS": "88.84.134.109", "HSMPORT": 10202, "HEADERLEN": 6, "HEADERTYPE": "HEX", "HSMHEADERLEN": 4, "HSMTIMEOUT": 10, "CONNECTIONINTERVAL": 5, "HSMSTATUS": 0 }]

}
