import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TooltipModule } from 'primeng/tooltip';
import { TableComponent } from '../../../layout/component/table/table.component';
import { RestService } from '../../../layout/service/rest.service';
import { take } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';

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

  @Input() minimalView: boolean = false;

  hsmMonitoringrData: any;
  loading: boolean = true;
  componentHeader: any;
  constructor(private restApi: RestService, private cdr: ChangeDetectorRef) { };

  ngOnInit() {
    this.getData()
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

  getData() {

    this.restApi.get('/monitoring/hsm').pipe(
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
          this.cdr.detectChanges();
        } else {
          console.warn('No data received or request failed.');
        };
      },
      error: (err) => {
        console.error('Subscription error:', err);

        this.cdr.detectChanges();

      }
    });
  }
}
