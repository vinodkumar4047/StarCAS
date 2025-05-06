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
    InputTextModule],
  templateUrl: './bin.component.html',
  styleUrl: './bin.component.scss'
})
export class BinComponent {
  visible: boolean = false;
  customers = [{ INSTID: "TEST", BIN: "63980700", BINDESC: "ONUS", PRODUCTCODE: "01", PRODUCTNAME: "CGS", BINTYPE: "DEBIT", ROUTETYPE: "DEBIT", "TXNLIST": "1,30,31,33,34,38,94,40,44,46,47,36,70,09,14,19,18,0,50,51,61,62,63,41,91,92,71,72,20,90,29,37" },
  { INSTID: "TEST", BIN: "466096", BINDESC: "PREPAID", PRODUCTCODE: "01", PRODUCTNAME: "CGS", BINTYPE: "DEBIT", ROUTETYPE: "DEBIT", "TXNLIST": "1,30,31,33,34,38,94,40,44,46,47,36,70,09,14,19,18,0,50,51,61,62,63,41,91,92,71,72,20,90,29,37" },
  { INSTID: "TEST", BIN: "451452", BINDESC: "TEST BIN", PRODUCTCODE: "01", PRODUCTNAME: "CGS", BINTYPE: "DEBIT", ROUTETYPE: "DEBIT", "TXNLIST": "1,30,31,33,34,38,94,40,44,46,47,36,70,09,14,19,18,0,50,51,61,62,63,41,91,92,71,72,20,90,29,37" },
  { INSTID: "TEST", BIN: "607084", BINDESC: "PROPREITARY BIN", PRODUCTCODE: "01", PRODUCTNAME: "CGS", BINTYPE: "DEBIT", ROUTETYPE: "DEBIT", "TXNLIST": "1,30,31,33,34,38,94,40,44,46,47,36,70,09,14,19,18,0,50,51,61,62,63,41,91,92,71,72,20,90,29,37" }]
  clear(able: Table) {

  }

  addFunction() {
    this.visible = true;
    // alert("fucntion triger")
  }
}
