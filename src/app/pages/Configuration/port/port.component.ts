import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TooltipModule } from 'primeng/tooltip';
import { TableComponent } from '../../../layout/component/table/table.component';
import { InputTextModule } from 'primeng/inputtext';
import { RestService } from '../../../layout/service/rest.service';
import { take } from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  loading: any;
  portDetailsData: any;
  constructor(private restApi: RestService, private cdr: ChangeDetectorRef) { };

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
    'deviceGroupId',
    'instId',
    'deviceInstId',
    'formName',
    'id',
    'ipAddress'
  ];

  cols = [
    { field: 'deviceGroupId', header: 'DEVICE GROUP ID' },
    { field: 'instId', header: 'INST ID' },
    { field: 'deviceInstId', header: 'DEVICE INST ID' },
    { field: 'formName', header: 'FORM NAME' },
    { field: 'id', header: 'ID' },
    { field: 'ipAddress', header: 'IP ADDRESS' },
    { field: 'Action', header: 'Action', type: ['view'] },
  ];


  ngOnInit() {
    this.getBinData();
  }
  getBinData(selectedValue?: string) {
    console.log('getBinData called with selectedValue:', selectedValue);
    // const instId = localStorage.getItem('instId')
    const instId = 'CLFSC'; // Static value for now


    this.restApi.get('/configuration/port-details').pipe(
      take(1)
    ).subscribe({
      next: (res) => {
        if (res) {
          this.portDetailsData = res;
          this.cdr.detectChanges();
          console.log('portDetailsData data:', this.portDetailsData);
        } else {
          console.warn('No data received or request failed.');
        }
      },
      error: (err) => {
        console.error('Subscription error:', err);
        this.cdr.detectChanges();

      }
    });
  };
}
