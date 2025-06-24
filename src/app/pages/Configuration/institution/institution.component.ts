import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { Table, TableModule } from 'primeng/table';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { TableComponent } from '../../../layout/component/table/table.component';
import { take } from 'rxjs/operators';
import { RestService } from '../../../layout/service/rest.service';
import { HttpParams } from '@angular/common/http';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-institution',
  imports: [TooltipModule,
    TableModule,  // Only import TableModule
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    ButtonModule,
    TableComponent,
    DialogModule,],
  templateUrl: './institution.component.html',
  styleUrl: './institution.component.scss'
})
export class InstitutionComponent {
  loading: boolean = true;
  InstitutionData: any;
  constructor(private restApi: RestService, private cdr: ChangeDetectorRef) { };

  clear(able: Table) {
    able.clear();
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.cdr.detectChanges();
    }, 2000);
  }
  globalFilterFields: any = [
    'instId',
    'instName',
    'instRouteType',
    'instType',
    'instCurrencyCode',
    'primaryBin'
  ];
  cols = [
    { field: 'instId', header: 'Institution ID' },
    { field: 'instName', header: 'Institution Name' },
    { field: 'instRouteType', header: 'Institution Route Type' },
    { field: 'instType', header: 'Institution Type' },
    { field: 'instCurrencyCode', header: 'Insitution Currency Code' },
    { field: 'primaryBin', header: 'Bank Bin' },
    // { field: 'Action', header: 'Action', type: ['view', 'edit', 'delete'] },
  ];
  delete_visible: any;
  ngOnInit() {
    this.getInstitutionData()
  }

  getInstitutionData() {
    // const instId = localStorage.getItem('instId')
    const instId = 'CLFSC'; // Static value for now


    this.restApi.get('/configuration/institution', {
      params: new HttpParams().set('instId', instId)
    } as { responseType: 'text', params: HttpParams }).pipe(
      take(1)
    ).subscribe({
      next: (res) => {
        if (res) {
          this.InstitutionData = res;
          this.cdr.detectChanges();
          console.log('taskManager data:', this.InstitutionData);
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
  addOrEdit(data1: any, data: any) {

  }
}
