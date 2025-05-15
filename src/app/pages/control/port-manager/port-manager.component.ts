import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  selector: 'app-port-manager',
  imports: [TooltipModule,
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    ButtonModule,
    TableComponent,
    DialogModule,],
  templateUrl: './port-manager.component.html',
  styleUrl: './port-manager.component.scss'
})
export class PortManagerComponent {
  portManagerData: any;
  loading: boolean = true;

  constructor(private restApi: RestService) { };

  ngOnInit() {
    this.getDataPortman()
  }

  globalFilterFields: any = [
    'portName',
    'ipAddress',
    'portNumber',
    'connectivityMode',
    'portStatus',
  ];

  cols = [
    { field: 'portName', header: 'PORT NAME' },
    { field: 'ipAddress', header: 'IP ADDRESS' },
    { field: 'portNumber', header: 'PORT NO' },
    { field: 'connectivityMode', header: 'CONNECTIVITY MODE' },
    { field: 'portStatus', header: 'PORT STATUS' },

  ];

  getDataPortman() {
    this.loading = true;
    this.restApi.get('/control/v1/portManager').pipe(
      take(1),
    ).subscribe({
      next: (res) => {
        if (res) {
          this.portManagerData = res;
          console.log('taskManager data:', res);
        } else {
          console.warn('No data received or request failed.');
        } setTimeout(() => {
          this.loading = false;
        }, 2000);
      },
      error: (err) => {
        console.error('Subscription error:', err);
        this.loading = false;
      }
    });
  };
}
