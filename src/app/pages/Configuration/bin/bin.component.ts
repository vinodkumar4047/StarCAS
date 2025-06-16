import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Table, TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableComponent } from '../../../layout/component/table/table.component';
import { RestService } from '../../../layout/service/rest.service';
import { take } from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-bin',
  imports: [TooltipModule,
    TableModule,  // Only import TableModule
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    DialogModule,
    ButtonModule,
    TableComponent,
    InputTextModule],
  templateUrl: './bin.component.html',
  styleUrl: './bin.component.scss'
})
export class BinComponent {

  visible: boolean = false;
  show_visible: boolean = false;
  loading: boolean = true;
  BinData: any;
  constructor(private restApi: RestService, private cdr: ChangeDetectorRef) { };


  products = [{ "TXNCODE": 1, "TXNDESC": "Cash Withdrawal" }, { "TXNCODE": 30, "TXNDESC": "Balance Enquiry" }, { "TXNCODE": 38, "TXNDESC": "Mini Statement" }, { "TXNCODE": 94, "TXNDESC": "PIN Change" }, { "TXNCODE": 40, "TXNDESC": "Fund Transfer" }, { "TXNCODE": 36, "TXNDESC": "OAR" }, { "TXNCODE": 41, "TXNDESC": "FT Name Verify" }, { "TXNCODE": 91, "TXNDESC": "CHEQUE BOOK REQUEST" }, { "TXNCODE": 92, "TXNDESC": "STATEMENT REQUEST" }, { "TXNCODE": 71, "TXNDESC": "CARDLESS CASH VERIFY" }, { "TXNCODE": 72, "TXNDESC": "CARDLESS CASH" }]

  clear(able: Table) {

  }
  globalFilterFields: any = [
    'routeType',
    'binType',
    'productName',
    'productCode',
    'binDesc',
    'bin',
    'instId'
  ];
  cols = [
    { field: 'instId', header: 'Institution ID' },
    { field: 'bin', header: 'Bin' },
    { field: 'binDesc', header: 'Bin Description' },
    { field: 'productCode', header: 'Product Code' },
    { field: 'productName', header: 'Product Type' },
    { field: 'binType', header: 'Bin Type' },
    { field: 'routeType', header: 'Bin Route Type' },
    { field: 'Action', header: 'Action', type: ['view'] },
  ];
  addFunction() {
    this.visible = true;
    // alert("fucntion triger")
  }
  showFucntion(data: any) {
    this.show_visible = true;
  }
  ngOnInit() {
    this.getBinData();
  }
  getBinData() {
    this.loading = true;
    // const instId = localStorage.getItem('instId')
    const instId = 'CLFSC'; // Static value for now


    this.restApi.get('/configuration/bin').pipe(
      take(1)
    ).subscribe({
      next: (res) => {
        if (res) {
          this.BinData = res;
          console.log('taskManager data:', this.BinData);
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
