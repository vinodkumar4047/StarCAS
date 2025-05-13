import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TooltipModule } from 'primeng/tooltip';
import { TableComponent } from '../../../../layout/component/table/table.component';

@Component({
  selector: 'app-transaction-monitoring-from-db',
  imports: [TooltipModule,
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    ButtonModule,
    TableComponent,
    DialogModule,],
  templateUrl: './transaction-monitoring-from-db.component.html',
  styleUrl: './transaction-monitoring-from-db.component.scss'
})
export class TransactionMonitoringFromDBComponent {
  globalFilterFields: any = [
    'instId',
    'atmId',
    'atmTypeId',
    'logicalGroup',
    'ipAddress',
    'acquirerBranch'
  ];

  atmData = [{ "MSGTYPE": "210", "CHN": "639807*********0037", "TXNCODE": "940000", "TXNDESC": "PIN Change", "TERMINALID": "RCBSL0101", "TERMLOC": "RCBSL TEST", "FROMACCOUNT": "NA", "TRACENO": "51939", "REFNUM": "128510051939", "TRANDATE": "12-OCT-21", "TRANTIME": "10:32:32", "RESPCODE": "0", "TXN_AMOUNT": "98623.00", "SETT_AMOUNT": "NA", "ACQUIRERINST": "TEST", "ISSUERINST": "TEST", "ACQCURRENCYCODE": "LBN", "DESCRIPTION": "Approved Transaction" },
  { "MSGTYPE": "210", "CHN": "639807*********0037", "TXNCODE": "940000", "TXNDESC": "PIN Change", "TERMINALID": "RCBSL0101", "TERMLOC": "RCBSL TEST", "FROMACCOUNT": "NA", "TRACENO": "51938", "REFNUM": "128509051938", "TRANDATE": "12-OCT-21", "TRANTIME": "09:59:54", "RESPCODE": "0", "TXN_AMOUNT": "868.00", "SETT_AMOUNT": "NA", "ACQUIRERINST": "TEST", "ISSUERINST": "TEST", "ACQCURRENCYCODE": "KEN", "DESCRIPTION": "Approved Transaction" },
  { "MSGTYPE": "210", "CHN": "639807*********0037", "TXNCODE": "940000", "TXNDESC": "PIN Change", "TERMINALID": "RCBSL0101", "TERMLOC": "RCBSL TEST", "FROMACCOUNT": "NA", "TRACENO": "51946", "REFNUM": "128615051946", "TRANDATE": "13-OCT-21", "TRANTIME": "15:07:11", "RESPCODE": "48", "TXN_AMOUNT": "350000.00", "SETT_AMOUNT": "NA", "ACQUIRERINST": "TEST", "ISSUERINST": "TEST", "ACQCURRENCYCODE": "EUR", "DESCRIPTION": "Chip Argc Fail" },
  { "MSGTYPE": "210", "CHN": "639807*********0037", "TXNCODE": "940000", "TXNDESC": "PIN Change", "TERMINALID": "RCBSL0101", "TERMLOC": "RCBSL TEST", "FROMACCOUNT": "NA", "TRACENO": "51945", "REFNUM": "128614051945", "TRANDATE": "13-OCT-21", "TRANTIME": "14:54:35", "RESPCODE": "5", "TXN_AMOUNT": "350000.00", "SETT_AMOUNT": "NA", "ACQUIRERINST": "TEST", "ISSUERINST": "TEST", "ACQCURRENCYCODE": "SLE", "DESCRIPTION": "Unable To Process" },
  { "MSGTYPE": "210", "CHN": "639807*********0037", "TXNCODE": "940000", "TXNDESC": "PIN Change", "TERMINALID": "RCBSL0101", "TERMLOC": "RCBSL TEST", "FROMACCOUNT": "NA", "TRACENO": "51944", "REFNUM": "128612051944", "TRANDATE": "13-OCT-21", "TRANTIME": "12:34:48", "RESPCODE": "55", "TXN_AMOUNT": "350000.00", "SETT_AMOUNT": "NA", "ACQUIRERINST": "TEST", "ISSUERINST": "TEST", "ACQCURRENCYCODE": "THB", "DESCRIPTION": "Incorrect PIN" },
  { "MSGTYPE": "210", "CHN": "639807*********0037", "TXNCODE": "940000", "TXNDESC": "PIN Change", "TERMINALID": "RCBSL0101", "TERMLOC": "RCBSL TEST", "FROMACCOUNT": "NA", "TRACENO": "51943", "REFNUM": "128612051943", "TRANDATE": "13-OCT-21", "TRANTIME": "12:16:02", "RESPCODE": "5", "TXN_AMOUNT": "8812.00", "SETT_AMOUNT": "NA", "ACQUIRERINST": "TEST", "ISSUERINST": "TEST", "ACQCURRENCYCODE": "USD", "DESCRIPTION": "Unable To Process" },
  { "MSGTYPE": "210", "CHN": "639807*********0037", "TXNCODE": "940000", "TXNDESC": "PIN Change", "TERMINALID": "RCBSL0101", "TERMLOC": "RCBSL TEST", "FROMACCOUNT": "NA", "TRACENO": "51942", "REFNUM": "128611051942", "TRANDATE": "13-OCT-21", "TRANTIME": "11:39:11", "RESPCODE": "0", "TXN_AMOUNT": "45682.00", "SETT_AMOUNT": "NA", "ACQUIRERINST": "TEST", "ISSUERINST": "TEST", "ACQCURRENCYCODE": "LAK", "DESCRIPTION": "Approved Transaction" },
  { "MSGTYPE": "210", "CHN": "639807*********0037", "TXNCODE": "940000", "TXNDESC": "PIN Change", "TERMINALID": "RCBSL0101", "TERMLOC": "RCBSL TEST", "FROMACCOUNT": "NA", "TRACENO": "51941", "REFNUM": "128610051941", "TRANDATE": "13-OCT-21", "TRANTIME": "10:20:23", "RESPCODE": "92", "TXN_AMOUNT": "6515.00", "SETT_AMOUNT": "NA", "ACQUIRERINST": "TEST", "ISSUERINST": "TEST", "ACQCURRENCYCODE": "LUX", "DESCRIPTION": "Invalid Issuer" },
  { "MSGTYPE": "210", "CHN": "639807*********0037", "TXNCODE": "940000", "TXNDESC": "PIN Change", "TERMINALID": "RCBSL0101", "TERMLOC": "RCBSL TEST", "FROMACCOUNT": "NA", "TRACENO": "51940", "REFNUM": "128610051940", "TRANDATE": "13-OCT-21", "TRANTIME": "10:18:37", "RESPCODE": "0", "TXN_AMOUNT": "3845.00", "SETT_AMOUNT": "NA", "ACQUIRERINST": "TEST", "ISSUERINST": "TEST", "ACQCURRENCYCODE": "LBR", "DESCRIPTION": "Approved Transaction" },
  { "MSGTYPE": "210", "CHN": "431581******9006", "TXNCODE": "940000", "TXNDESC": "PIN Change", "TERMINALID": "RCBSL0101", "TERMLOC": "RCBSL TEST", "FROMACCOUNT": "NA", "TRACENO": "51961", "REFNUM": "128817051961", "TRANDATE": "15-OCT-21", "TRANTIME": "17:23:51", "RESPCODE": "0", "TXN_AMOUNT": "48698.00", "SETT_AMOUNT": "NA", "ACQUIRERINST": "TEST", "ISSUERINST": "TEST", "ACQCURRENCYCODE": "MEX", "DESCRIPTION": "Approved Transaction" },
  { "MSGTYPE": "210", "CHN": "639807*********0037", "TXNCODE": "940000", "TXNDESC": "PIN Change", "TERMINALID": "RCBSL0101", "TERMLOC": "RCBSL TEST", "FROMACCOUNT": "NA", "TRACENO": "51960", "REFNUM": "128817051960", "TRANDATE": "15-OCT-21", "TRANTIME": "17:06:05", "RESPCODE": "0", "TXN_AMOUNT": "150000.00", "SETT_AMOUNT": "NA", "ACQUIRERINST": "TEST", "ISSUERINST": "TEST", "ACQCURRENCYCODE": "NGA", "DESCRIPTION": "Approved Transaction" },
  { "MSGTYPE": "210", "CHN": "639807*********0037", "TXNCODE": "940000", "TXNDESC": "PIN Change", "TERMINALID": "RCBSL0101", "TERMLOC": "RCBSL TEST", "FROMACCOUNT": "NA", "TRACENO": "51959", "REFNUM": "128817051959", "TRANDATE": "15-OCT-21", "TRANTIME": "17:05:47", "RESPCODE": "0", "TXN_AMOUNT": "8181818.00", "SETT_AMOUNT": "NA", "ACQUIRERINST": "TEST", "ISSUERINST": "TEST", "ACQCURRENCYCODE": "EUR", "DESCRIPTION": "Approved Transaction" },
  { "MSGTYPE": "210", "CHN": "639807*********0037", "TXNCODE": "940000", "TXNDESC": "PIN Change", "TERMINALID": "RCBSL0101", "TERMLOC": "RCBSL TEST", "FROMACCOUNT": "NA", "TRACENO": "51958", "REFNUM": "128817051958", "TRANDATE": "15-OCT-21", "TRANTIME": "17:05:17", "RESPCODE": "0", "TXN_AMOUNT": "488.00", "SETT_AMOUNT": "NA", "ACQUIRERINST": "TEST", "ISSUERINST": "TEST", "ACQCURRENCYCODE": "SLE", "DESCRIPTION": "Approved Transaction" },
  { "MSGTYPE": "210", "CHN": "639807*********0037", "TXNCODE": "940000", "TXNDESC": "PIN Change", "TERMINALID": "RCBSL0101", "TERMLOC": "RCBSL TEST", "FROMACCOUNT": "NA", "TRACENO": "51957", "REFNUM": "128815051957", "TRANDATE": "15-OCT-21", "TRANTIME": "15:52:16", "RESPCODE": "0", "TXN_AMOUNT": "184487.00", "SETT_AMOUNT": "NA", "ACQUIRERINST": "TEST", "ISSUERINST": "TEST", "ACQCURRENCYCODE": "THB", "DESCRIPTION": "Approved Transaction" },
  { "MSGTYPE": "210", "CHN": "639807*********0037", "TXNCODE": "940000", "TXNDESC": "PIN Change", "TERMINALID": "RCBSL0101", "TERMLOC": "RCBSL TEST", "FROMACCOUNT": "NA", "TRACENO": "51956", "REFNUM": "128815051956", "TRANDATE": "15-OCT-21", "TRANTIME": "15:18:29", "RESPCODE": "1", "TXN_AMOUNT": "150000.00", "SETT_AMOUNT": "NA", "ACQUIRERINST": "TEST", "ISSUERINST": "TEST", "ACQCURRENCYCODE": "USD", "DESCRIPTION": "Dispenced Fully" },
  { "MSGTYPE": "210", "CHN": "639807*********0037", "TXNCODE": "940000", "TXNDESC": "PIN Change", "TERMINALID": "RCBSL0101", "TERMLOC": "RCBSL TEST", "FROMACCOUNT": "NA", "TRACENO": "51996", "REFNUM": "129508051996", "TRANDATE": "22-OCT-21", "TRANTIME": "08:55:30", "RESPCODE": "0", "TXN_AMOUNT": "55149.00", "SETT_AMOUNT": "NA", "ACQUIRERINST": "TEST", "ISSUERINST": "TEST", "ACQCURRENCYCODE": "LUX", "DESCRIPTION": "Approved Transaction" }];

  cols = [
    { field: 'CHN', header: 'CHN' },
    { field: 'TXNCODE', header: 'TXN CODE' },
    { field: 'TXNDESC', header: 'TXN DESC' },
    { field: 'TERMINALID', header: 'TERMINALID' },
    { field: 'TERMLOC', header: 'TERMLOC' },
    { field: 'REFNUM', header: 'REF NUM' },
    { field: 'TRANDATE', header: 'TRAN DATE' },
    { field: 'TRANTIME', header: 'TRAN TIME' },
    { field: 'TXN_AMOUNT', header: 'TXN AMOUNT' },
    { field: 'ACQCURRENCYCODE', header: 'Currency' },
    { field: 'DESCRIPTION', header: 'RESPONSE' },

  ];
}
