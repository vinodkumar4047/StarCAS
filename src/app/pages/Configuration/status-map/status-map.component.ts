import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { TableComponent } from '../../../layout/component/table/table.component';
import { RestService } from '../../../layout/service/rest.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-status-map',
  imports: [TooltipModule,
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    ButtonModule,
    TableComponent,
    DialogModule,
    InputTextModule],
  templateUrl: './status-map.component.html',
  styleUrl: './status-map.component.scss'
})
export class StatusMapComponent {
  loading: boolean = true;
  statusMapData: any;
  Edit_data: any;
  tpCheck!: boolean;
  editVisible: any;
  constructor(private restApi: RestService, private cdr: ChangeDetectorRef) { };
  globalFilterFields: any = [
    'RESPCODE',
    'DESCRIPTION',
  ];

  cols = [
    { field: 'RESPCODE', header: 'RESPCODE' },
    { field: 'DESCRIPTION', header: 'DESCRIPTION' },
    { field: 'Action', header: 'Action', type: ['view'] },
  ];


  ngOnInit() {
    this.gettransactionDataData();
  }
  gettransactionDataData() {
    this.restApi.get('/configuration/statusMap').pipe(
      take(1)
    ).subscribe({
      next: (res) => {
        if (res) {
          this.statusMapData = res;
          this.cdr.detectChanges();
          console.log('taskManager data:', this.statusMapData);
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
  addOrEdit(data?: any, type?: any) {
    if (data) {
      this.Edit_data = { ...data?.data }
      console.log(' this.Edit_data', this.Edit_data);

    } else {
      this.Edit_data = null;
    }
    console.log('Received type:', type);
    this.tpCheck = type === 'view' ? true : false;
    console.log('this.tpCheck', this.tpCheck);

    this.editVisible = true;
  };
}
