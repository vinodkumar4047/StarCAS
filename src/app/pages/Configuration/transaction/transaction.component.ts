import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TooltipModule } from 'primeng/tooltip';
import { TableComponent } from '../../../layout/component/table/table.component';

@Component({
  selector: 'app-transaction',
  imports: [TooltipModule,
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    ButtonModule,
    TableComponent,
    DialogModule,],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss'
})
export class TransactionComponent {

  addOrEdit(data?: any) {

  }
  globalFilterFields: any = [
    'TXNCODE',
    'TXNDESC',
  ];
  cols = [
    { field: 'TXNCODE', header: 'TRANSACTION CODE' },
    { field: 'TXNDESC', header: 'TRANSACTION DESCRIPTION' },
    { field: 'Action', header: 'Action', type: ['view'] },
  ];
  atmData = [{ "TXNCODE": 94, "TXNDESC": "PIN Change" },
  { "TXNCODE": 40, "TXNDESC": "Fund Transfer" },
  { "TXNCODE": 38, "TXNDESC": "Mini Statement" },
  { "TXNCODE": 1, "TXNDESC": "Withdrawal" },
  { "TXNCODE": 36, "TXNDESC": "OAR" },
  { "TXNCODE": 30, "TXNDESC": "Balance Enquiry" },
  { "TXNCODE": 70, "TXNDESC": "Pin Verify" },
  { "TXNCODE": 9, "TXNDESC": "Fund Transfer Name Verify" },
  { "TXNCODE": 19, "TXNDESC": "FX Rate Display" }]
}

