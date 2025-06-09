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
import { style } from '@angular/animations';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-network-control',
  imports: [TooltipModule,
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    ButtonModule,
    TableComponent,
    DialogModule,],
  templateUrl: './network-control.component.html',
  styleUrl: './network-control.component.scss'
})
export class NetworkControlComponent {
  @Input() minimalView: boolean = false;

  networkConGetData: any;
  loading: boolean = true;

  constructor(private restApi: RestService, private cdr: ChangeDetectorRef) { };

  ngOnInit() {
    this.getDataPortman()
  };

  globalFilterFields: any = [
    'networkId',
    'channelName',
    'portName',
    'status',
    'timeout',
  ];

  cols = [
    { field: 'networkId', header: 'NETWORK ID' },
    { field: 'channelName', header: 'CHANNEL NAME' },
    { field: 'portName', header: 'PORT NAME' },
    { field: 'rowClass', header: 'STATUS' },
    { field: 'timeout', header: 'TIME OUT' },
  ];

  getDataPortman() {
    this.loading = true;
    this.restApi.get('/control/network').pipe(
      take(1),
    ).subscribe({
      next: (res) => {
        console.log('Subscription data:', res);

        if (res) {
          this.networkConGetData = res.map((item: any) => {
            return {
              ...item,
              rowClass: item.status === 'DOWN' ? 'DOWN' : 'UP',
            }

          })
          this.cdr.detectChanges();
        } else {
          console.warn('No data received or request failed.');
        }
        setTimeout(() => {
          this.loading = false;
          this.cdr.detectChanges();

        }, 1000);
      },
      error: (err) => {
        console.error('Subscription error:', err);
        this.loading = false;
        this.cdr.detectChanges();


      }
    });
  };
  getRowClass(rowData: any): string {
    return rowData.statusClass || '';
  }
}
