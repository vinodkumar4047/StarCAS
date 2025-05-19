import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Table, TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableComponent } from '../../../layout/component/table/table.component';

@Component({
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
  customers = [{ INSTID: "TEST", BIN: "63980700", BINDESC: "ONUS", PRODUCTCODE: "01", PRODUCTNAME: "CGS", BINTYPE: "DEBIT", ROUTETYPE: "DEBIT", "TXNLIST": "1,30,31,33,34,38,94,40,44,46,47,36,70,09,14,19,18,0,50,51,61,62,63,41,91,92,71,72,20,90,29,37" },
  { INSTID: "TEST", BIN: "466096", BINDESC: "PREPAID", PRODUCTCODE: "01", PRODUCTNAME: "CGS", BINTYPE: "DEBIT", ROUTETYPE: "DEBIT", "TXNLIST": "1,30,31,33,34,38,94,40,44,46,47,36,70,09,14,19,18,0,50,51,61,62,63,41,91,92,71,72,20,90,29,37" },
  { INSTID: "TEST", BIN: "451452", BINDESC: "TEST BIN", PRODUCTCODE: "01", PRODUCTNAME: "CGS", BINTYPE: "DEBIT", ROUTETYPE: "DEBIT", "TXNLIST": "1,30,31,33,34,38,94,40,44,46,47,36,70,09,14,19,18,0,50,51,61,62,63,41,91,92,71,72,20,90,29,37" },
  { INSTID: "TEST", BIN: "607084", BINDESC: "PROPREITARY BIN", PRODUCTCODE: "01", PRODUCTNAME: "CGS", BINTYPE: "DEBIT", ROUTETYPE: "DEBIT", "TXNLIST": "1,30,31,33,34,38,94,40,44,46,47,36,70,09,14,19,18,0,50,51,61,62,63,41,91,92,71,72,20,90,29,37" }]
  products = [{ "TXNCODE": 1, "TXNDESC": "Cash Withdrawal" }, { "TXNCODE": 30, "TXNDESC": "Balance Enquiry" }, { "TXNCODE": 38, "TXNDESC": "Mini Statement" }, { "TXNCODE": 94, "TXNDESC": "PIN Change" }, { "TXNCODE": 40, "TXNDESC": "Fund Transfer" }, { "TXNCODE": 36, "TXNDESC": "OAR" }, { "TXNCODE": 41, "TXNDESC": "FT Name Verify" }, { "TXNCODE": 91, "TXNDESC": "CHEQUE BOOK REQUEST" }, { "TXNCODE": 92, "TXNDESC": "STATEMENT REQUEST" }, { "TXNCODE": 71, "TXNDESC": "CARDLESS CASH VERIFY" }, { "TXNCODE": 72, "TXNDESC": "CARDLESS CASH" }]
  clear(able: Table) {

  }
  globalFilterFields: any = [
    'INSTID',
    'BIN',
    'BINDESC',
    'PRODUCTCODE',
    'PRODUCTNAME',
    'BINTYPE',
    'ROUTETYPE'
  ];
  cols = [
    { field: 'INSTID', header: 'Institution ID' },
    { field: 'BIN', header: 'Bin' },
    { field: 'BINDESC', header: 'Bin Description' },
    { field: 'PRODUCTCODE', header: 'Product Code' },
    { field: 'PRODUCTNAME', header: 'Product Type' },
    { field: 'BINTYPE', header: 'Bin Type' },
    { field: 'ROUTETYPE', header: 'Bin Route Type' },
    { field: 'Action', header: 'Action', type: ['view'] },
  ];
  addFunction() {
    this.visible = true;
    // alert("fucntion triger")
  }
  showFucntion(data: any) {
    this.show_visible = true;
  }
}
