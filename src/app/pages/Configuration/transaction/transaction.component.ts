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
  selector: 'app-transaction',
  imports: [TooltipModule,
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    ButtonModule,
    TableComponent,
    DialogModule,
    InputTextModule],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss'
})
export class TransactionComponent {
  editVisible: any;
  Edit_data: any;
  tpCheck!: boolean;
  loading: any;
  transactionData: any;
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
    'txnCode',
    'txnDesc',
  ];

  cols = [
    { field: 'txnCode', header: 'TRANSACTION CODE' },
    { field: 'txnDesc', header: 'TRANSACTION DESCRIPTION' },
    { field: 'Action', header: 'Action', type: ['view'] },
  ];

 
  ngOnInit() {
    this.gettransactionDataData();
  }
  gettransactionDataData() {
    this.loading = true;
    // const instId = localStorage.getItem('instId')
    const instId = 'CLFSC'; // Static value for now


    this.restApi.get('/configuration/transaction-details').pipe(
      take(1)
    ).subscribe({
      next: (res) => {
        if (res) {
          this.transactionData = res;
          console.log('taskManager data:', this.transactionData);
        } else {
          console.warn('No data received or request failed.');
        } setTimeout(() => {
          this.loading = false;
          this.cdr.detectChanges();
        }, 2000);
      },
      error: (err) => {
        console.error('Subscription error:', err);
        this.loading = false;
        this.cdr.detectChanges();

      }
    });
  };
}

