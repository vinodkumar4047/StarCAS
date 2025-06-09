import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TooltipModule } from 'primeng/tooltip';
import { TableComponent } from '../../../../layout/component/table/table.component';
import { take } from 'rxjs/operators';
import { RestService } from '../../../../layout/service/rest.service';
import { style } from '@angular/animations';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-transaction-monitoring-from-db',
  imports: [TooltipModule,
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    ButtonModule,
    DialogModule, TableModule, ProgressBarModule],
  templateUrl: './transaction-monitoring-from-db.component.html',
  styleUrl: './transaction-monitoring-from-db.component.scss'
})
export class TransactionMonitoringFromDBComponent {
  isLoading: boolean = false;
  transactionMonitoringrData: any[] = [];
  loading: boolean = true;
  private intervalId: any;
  constructor(private restApi: RestService, private cdr: ChangeDetectorRef) { };

  ngOnInit() {
    this.transactionGetData();
    this.startAutoRefresh();
  }
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Clear interval to prevent memory leaks
    }
  }
  globalFilterFields: any = [
    'instId',
    'atmId',
    'atmTypeId',
    'logicalGroup',
    'ipAddress',
    'acquirerBranch'
  ];


  cols = [
    { field: 'chn', header: 'CHN' },
    { field: 'txnCode', header: 'TXN CODE' },
    { field: 'txnDesc', header: 'TXN DESC' },
    { field: 'terminalId', header: 'TERMINALID' },
    { field: 'termLoc', header: 'TERMLOC' },
    { field: 'refNum', header: 'REF NUM' },
    { field: 'tranDate', header: 'TRAN DATE' },
    { field: 'tranTime', header: 'TRAN TIME' },
    { field: 'amount', header: 'TXN AMOUNT' },
    { field: 'acqCurrencyCode', header: 'Currency' },
    { field: 'description', header: 'RESPONSE' },
  ];

  
  transactionGetData() {
    this.isLoading = true;
    const instId = 'SCB';
    this.restApi.get(`/monitoring/transaction?instId=${instId}`).pipe(
      take(1),
    ).subscribe({
      next: (res) => {
        if (res) {
          this.transactionMonitoringrData = res.map((data: any) => {
            return {
              ...data,
              // description: data.description === 'Approved Transaction'
              isApproved: data.description === 'Approved Transaction',
            }
          })
          console.log('taskManager data:', this.transactionMonitoringrData);


        } else {
          console.warn('No data received or request failed.');
        } setTimeout(() => {
        },);
      },
      error: (err) => {
        console.error('Subscription error:', err);
      }, complete: () => {
        this.isLoading = false; // Stop loading bar
        this.cdr.detectChanges();

      }
    });
  };
  // Start auto-refresh every 60 seconds
  startAutoRefresh() {
    this.intervalId = setInterval(() => {
      this.transactionGetData(); // Fetch data every 60 seconds
    }, 10000); // 60000 milliseconds = 60 seconds
  }
}
