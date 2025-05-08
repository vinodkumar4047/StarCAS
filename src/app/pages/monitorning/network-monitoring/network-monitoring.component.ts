import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ValueChangeEvent } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TooltipModule } from 'primeng/tooltip';
import { TableComponent } from '../../../layout/component/table/table.component';

@Component({
  selector: 'app-network-monitoring',
  imports: [TooltipModule,
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    ButtonModule,
    TableComponent,
    DialogModule,],
  templateUrl: './network-monitoring.component.html',
  styleUrl: './network-monitoring.component.scss'
})
export class NetworkMonitoringComponent {
  addOrEdit(data?: any) {

  }
  globalFilterFields: any = [
    'TXNCODE',
    'TXNDESC',
  ];
  cols = [
    { field: 'INSTID', header: ' INST ID ' },
    { field: 'PORTID', header: 'PORT ID' },
    { field: '', header: 'PORT NAME' },
    { field: 'PORTSTATUS', header: 'PORT STATUS' },
    { field: 'NETWORKID', header: 'NETWORK ID' },
    { field: 'NETWORKNAME', header: 'NETWORK NAME' },
    { field: 'TIMEOUT', header: 'TIMEOUT' },
    { field: 'NETWORKSTATUS', header: 'NETWORK STATUS'},
    { field: 'Action', header: 'Action', type: ['view'] },
  ];
  atmData = [{ "PORTID": "TEST002", "PORTSTATUS": 0, "PORTGROUP": "ATM", "LOGDATE": 1646677800000, "LOGTIME": 222659, "INSTID": "TEST", "NETWORKID": "INTERSWTNTWK", "NETWORKNAME": "VISA TPP NETWORK", "NETWORKPROPERTYID": "1", "TIMEOUT": 30, "CHANNELNAME": "EzInterSw8583", "PORTNAME": "TEST002", "NETWORKSTATUS": 2, "KEYREQ": "Y", "CUTOVERREQ": "N", "ECHOACQINSTCODE": "63980700", "NETWORKFLAG": "1" },
  { "PORTID": "TEST002", "PORTSTATUS": 0, "PORTGROUP": "ATM", "LOGDATE": 1646677800000, "LOGTIME": 222659, "INSTID": "TEST", "NETWORKID": "USGPOS_NTWK", "NETWORKNAME": "USGPOS NETWORK", "NETWORKPROPERTYID": "1", "TIMEOUT": 30, "CHANNELNAME": "EzUSGPOS8583", "PORTNAME": "TEST002", "NETWORKSTATUS": 2, "KEYREQ": "Y", "CUTOVERREQ": "N", "ECHOACQINSTCODE": "63980700", "NETWORKFLAG": "1" },
  { "PORTID": "TEST003", "PORTSTATUS": 1, "PORTGROUP": "CBS", "LOGDATE": 1717525800000, "LOGTIME": 15827, "INSTID": "TEST", "NETWORKID": "RCBSLCBS", "NETWORKNAME": "ROKEL COMMERCIAL NETWORK", "NETWORKPROPERTYID": "1", "TIMEOUT": 30, "CHANNELNAME": "EzHost8583", "PORTNAME": "TEST003", "NETWORKSTATUS": 2, "KEYREQ": "N", "CUTOVERREQ": "N", "ECHOACQINSTCODE": "63980700", "NETWORKFLAG": "1" },
  { "PORTID": "TEST006", "PORTSTATUS": 1, "PORTGROUP": "ATM", "LOGDATE": 1717439400000, "LOGTIME": 155702, "INSTID": "TEST", "NETWORKID": "NSSL_NTWK", "NETWORKNAME": "NSSL NETWORK", "NETWORKPROPERTYID": "1", "TIMEOUT": 30, "CHANNELNAME": "EzNSSL8583", "PORTNAME": "TEST006", "NETWORKSTATUS": 1, "KEYREQ": "Y", "CUTOVERREQ": "N", "ECHOACQINSTCODE": "63980700", "NETWORKFLAG": "1" },
  { "PORTID": "TEST008", "PORTSTATUS": 1, "PORTGROUP": "NETWORK", "LOGDATE": 1684953000000, "LOGTIME": 212034, "INSTID": "TEST", "NETWORKID": "MERCURYNTWK", "NETWORKNAME": "MERCURY NETWORK", "NETWORKPROPERTYID": "1", "TIMEOUT": 30, "CHANNELNAME": "EzMercury8583", "PORTNAME": "TEST008", "NETWORKSTATUS": 1, "KEYREQ": "Y", "CUTOVERREQ": "N", "ECHOACQINSTCODE": "639807", "NETWORKFLAG": "1" },
  { "PORTID": "TEST010", "PORTSTATUS": 0, "PORTGROUP": "GUI", "LOGDATE": 1618165800000, "LOGTIME": 103538, "INSTID": "TEST", "NETWORKID": "TESTSWTNTWK", "NETWORKNAME": "TEST TPP NETWORK", "NETWORKPROPERTYID": "1", "TIMEOUT": 30, "CHANNELNAME": "EzInterTestSw8583", "PORTNAME": "TEST010", "NETWORKSTATUS": 2, "KEYREQ": "Y", "CUTOVERREQ": "N", "ECHOACQINSTCODE": "63980700", "NETWORKFLAG": "1" }]
}
