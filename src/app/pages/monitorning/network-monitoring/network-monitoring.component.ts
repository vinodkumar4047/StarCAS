import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ValueChangeEvent } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TooltipModule } from 'primeng/tooltip';
import { TableComponent } from '../../../layout/component/table/table.component';
import { take } from 'rxjs';
import { RestService } from '../../../layout/service/rest.service';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-network-monitoring',
  imports: [TooltipModule,
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    ButtonModule,
    TableComponent,
    DialogModule,TableModule],
  templateUrl: './network-monitoring.component.html',
  styleUrl: './network-monitoring.component.scss'
})
export class NetworkMonitoringComponent {
  loading: boolean = false;
  networkData: any = [];
  display: boolean = false;
  networkRowData:any = {
        "portId": "",
        "portStatus": "",
        "portGroup": "",
        "logDate": "",
        "logTime": "",
        "instId": "",
        "networkId": "",
        "networkName": "",
        "networkPropertyId": "",
        "timeout": "",
        "channelName": "",
        "portName": "",
        "networkStatus": "",
        "keyReq": "",
        "cutoverReq": "",
        "echoAcqInstCode": "",
        "networkFlag": ""
    }
  globalFilterFields: any = [
    'instId',
    'portId',
    'portStatus',
    'networkId',
    'networkName',
    'timeout',
    'networkStatusText'
  ];

  cols = [
    { field: 'instId', header: ' Inst ID ' },
    { field: 'portId', header: 'Port ID' },
    { field: 'portId', header: 'Port Name' },
    { field: 'portStatus', header: 'Port Status' },
    { field: 'networkId', header: 'Network ID' },
    { field: 'networkName', header: 'Network Name' },
    { field: 'timeout', header: 'Timeout' },
    { field: 'networkStatusText', header: 'Network Status', },
    { field: 'Action', header: 'Action', type: ['view'] },
  ];

  constructor(private restApi: RestService) { };

  ngOnInit() {
    this.getnetworkData();
  }
  viewEvent(event:any) {
    console.log(event,'eeeeeeeeee');
    this.networkRowData = event.data;
    this.display = true;
  }
  getnetworkData() {
    this.loading = true;
    this.restApi.get('/monitoring/v1/network').pipe(
      take(1),
    ).subscribe({
      next: (res) => {
        if (res) {
          this.networkData = res.map((a: any) => {
            return {
              ...a,
              networkStatusText: a.networkStatus == 1 ? 'CONNECTED' : 'NOT CONNECTED',
            };
          });
          console.log('taskManager data:', res);
        } else {
          console.warn('No data received or request failed.');
        } setTimeout(() => {
          this.loading = false;
        }, 1000);
      },
      error: (err) => {
        console.error('Subscription error:', err);
        this.loading = false;

      }
    });
  };
}
