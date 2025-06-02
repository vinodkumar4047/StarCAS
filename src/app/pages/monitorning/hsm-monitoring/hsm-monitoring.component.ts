import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TooltipModule } from 'primeng/tooltip';
import { TableComponent } from '../../../layout/component/table/table.component';
import { RestService } from '../../../layout/service/rest.service';
import { take } from 'rxjs/operators';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  hsmMonitoringrData: any;
  loading: boolean = true;
  constructor(private restApi: RestService) { };

  ngOnInit() {
    this.getHsmData()
  }

  globalFilterFields: any = [
    'hsmName',
    'hsmProtocol',
    'hsmType',
    'hsmAddress',
    'hsmPort',
    'connectionInterval',
    'hsmTimeOut'
  ];

  cols = [
    { field: 'hsmName', header: 'HSM NAME' },
    { field: 'hsmProtocol', header: 'PROTOCOL' },
    { field: 'hsmType', header: 'MODEL' },
    { field: 'hsmAddress', header: 'IP' },
    { field: 'hsmPort', header: 'PORT' },
    { field: 'hsmTimeOut', header: 'HSMTIME OUT' },
    { field: 'connectionInterval', header: 'CONNECTION INTERVAL' },
    { field: 'hsmStatus', header: 'HSM STATUS' },
  ];

  getHsmData() {
    this.loading = true;
    this.restApi.get('/monitoring/v1/hsm').pipe(
      take(1),
    ).subscribe({
      next: (res) => {
        if (res) {
          this.hsmMonitoringrData = res.map((data: any) => {
            return {
              ...data,
              hsmStatus: data.hsmStatus === 1 ? 'CONNECTED' : 'NOT CONNECTED',
            }
          })
          console.log('taskManager data:', this.hsmMonitoringrData);

        } else {
          console.warn('No data received or request failed.');
        } setTimeout(() => {
          this.loading = false;
        },);
      },
      error: (err) => {
        console.error('Subscription error:', err);
        this.loading = false;
      }
    });
  }
}
