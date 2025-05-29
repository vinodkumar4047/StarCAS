import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { Select } from 'primeng/select';
import { TableComponent } from "../../../layout/component/table/table.component";
import { Dialog } from 'primeng/dialog';

@Component({
changeDetection:ChangeDetectionStrategy.OnPush,
  selector: 'app-saf-management',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonModule, FloatLabel, Select, TableComponent, Dialog],
  templateUrl: './saf-management.component.html',
  styleUrl: './saf-management.component.scss'
})
export class SafManagementComponent {
  networkOpt: any = [
    { name: 'ALL', code: '1' },
    { name: 'VISA TPP NETWORK', code: '2' },
    { name: 'MERCURY NETWORK', code: '3' },
    { name: 'NSSL NETWORK', code: '4' },
    { name: 'TEST TPP NETWORK', code: '5' },
  ];
  safStatusOPT: any = [
    { name: 'ALL', code: '1' },
    { name: 'PENDING', code: '2' },
    { name: 'TIME OUT', code: '3' },
    { name: 'BAD RESPONSE', code: '4' },
    { name: 'SKIPPED', code: '5' },
  ];
  delete_visible: boolean = false
  SAFForm!: FormGroup;
  showTable: boolean = false;
  globalFilterFields: any = [
    'SAFRECORDNO',
    'TRANDATE',
    'TRANTIME',
    'NETWORKID',
    'SAFSTATUS',
    'TXNREFNUM',
    'CHN',
    'AMOUNT',
    'REFNUM',
    'TRACENO',
    "TERMINALID",
    "TERMLOC"
  ];
  tableData: any = [];
  tableDataOrg: any = [{
    "selected": true,
    "SAFRECORDNO": "00000000000000000034",
    "TRANDATE": "15-JUN-22",
    "TRANTIME": "15:26:42",
    "NETWORKID": "TESTNTWK",
    "SAFSTATUS": "Skipped",
    "TXNREFNUM": "1220--216615054652--CBSNTWK--",
    "CHN": "222300*******010",
    "AMOUNT": 10000,
    "REFNUM": 527809000296,
    "TRACENO": 288,
    "TERMINALID": "00008954",
    "TERMLOC": "TEST ATM"
  },
  {
    "selected": true,
    "SAFRECORDNO": "00000000000000000035",
    "TRANDATE": "16-JUN-22",
    "TRANTIME": "11:12:06",
    "NETWORKID": "TESTCBS",
    "SAFSTATUS": "Pending",
    "TXNREFNUM": "1220--216711054666--TESTLCBS--",
    "CHN": "9700*******0102",
    "AMOUNT": 500,
    "REFNUM": 527809000288,
    "TRACENO": 705,
    "TERMINALID": "000067432",
    "TERMLOC": "TEST ATM"
  },
  {
    "selected": true,
    "SAFRECORDNO": "00000000000000000046",
    "TRANDATE": "19-SEP-22",
    "TRANTIME": "16:03:59",
    "NETWORKID": "SWITCHNTWK",
    "SAFSTATUS": "Pending",
    "TXNREFNUM": "1220--216716054696--SWITCHCBS--",
    "CHN": "100011*******280",
    "AMOUNT": 5000,
    "REFNUM": 528312001434,
    "TRACENO": 961,
    "TERMINALID": "00020003",
    "TERMLOC": "TEST ATM"
  },
  {
    "selected": true,
    "SAFRECORDNO": "00000000000000000047",
    "TRANDATE": "16-JUN-22",
    "TRANTIME": "16:06:18",
    "NETWORKID": "ITNTWK",
    "SAFSTATUS": "Pending",
    "TXNREFNUM": "1220--216716054698--ITCBS--",
    "CHN": "5631*******780",
    "AMOUNT": 100,
    "REFNUM": 524613001060,
    "TRACENO": 237,
    "TERMINALID": "00002111",
    "TERMLOC": "TEST ATM"
  },
  {
    "selected": true,
    "SAFRECORDNO": "00000000000000000049",
    "TRANDATE": "17-JUN-22",
    "TRANTIME": "10:08:03",
    "NETWORKID": "SWITCHNTWK",
    "SAFSTATUS": "Time out",
    "TXNREFNUM": "1220--216810054710--SWITCHCBS--",
    "CHN": "3820*******800",
    "AMOUNT": 1000,
    "REFNUM": 524613001060,
    "TRACENO": 230,
    "TERMINALID": "00001190",
    "TERMLOC": "TEST ATM"
  },
  {
    "selected": true,
    "SAFRECORDNO": "00000000000000000056",
    "TRANDATE": "17-JUN-22",
    "TRANTIME": "12:47:16",
    "NETWORKID": "TESTCBS",
    "SAFSTATUS": "Skipped",
    "TXNREFNUM": "1220--216812054734--TESTCBS--",
    "CHN": "781*******453",
    "AMOUNT": 2000,
    "REFNUM": 524615001061,
    "TRACENO": 275,
    "TERMINALID": "00002654",
    "TERMLOC": "TEST ATM"
  }
  ]
  cols = [
    { field: 'selected', header: 'Select' },
    { field: 'SAFRECORDNO', header: 'SAF RECORD NO.', sort: true, type: 'string' },
    { field: 'TRANDATE', header: 'TRAN DATE', sort: true, type: 'string' },
    { field: 'TRANTIME', header: 'TRAN TIME', sort: true, type: 'string' },
    { field: 'NETWORKID', header: 'NETWORK ID', sort: true, type: 'string' },
    { field: 'SAFSTATUS', header: 'SAF STATUS', sort: true, type: 'string' },
    { field: 'TXNREFNUM', header: 'TXN REFNUM', sort: true, type: 'string' },
    { field: 'CHN', header: 'CHN', sort: true, type: 'string' },
    { field: 'AMOUNT', header: 'AMOUNT', sort: true, type: 'number' },
    { field: 'REFNUM', header: 'REFNUM', sort: true, type: 'number' },
    { field: 'TRACENO', header: 'TRACE NO.', sort: true, type: 'number' },
    { field: 'TERMINALID', header: 'TERMINAL ID', sort: true, type: 'string' },
    { field: 'TERMLOC', header: 'TERM LOC', sort: true, type: 'string' },
  ];
  selectedRows: any[] = [];
  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) { }
  ngOnInit() {
    this.tableData = this.tableDataOrg;
    this.SAFForm = this.fb.group({
      networkName: [null, Validators.required],
      safRecStatus: [null, Validators.required],
    })
  }

  onView() {
    if (this.SAFForm.valid) {
      console.log('Form Data:', this.SAFForm.value);
      this.showTable = true;
    } else {
      console.log('Form is invalid', this.SAFForm);
      this.SAFForm.markAllAsTouched();
    }
  }

  checkedData(data: any) {
    console.log(data, 'data event');
    let row = data?.data;
    const isChecked = data?.event?.checked;
    if (isChecked) {
      // If checked, add the row to the selectedRows array if it doesn't exist already
      if (!this.isRowSelected(row)) {
        this.selectedRows.push(row);
      }
    } else {
      // If unchecked, remove the row from the selectedRows array if it exists
      this.selectedRows = this.selectedRows.filter(selectedRow => selectedRow !== row);
    }
    console.log(this.selectedRows, 'this.selectedRows');

  }

  isRowSelected(row: any): boolean {
    return this.selectedRows.includes(row);
  }

  reset() {
    this.showTable = false;
    const formData = {
      networkName: null,
      safRecStatus: null,
    };
    this.SAFForm.reset(formData);
    this.tableData = this.tableDataOrg.map((row: any) => ({
      selected: false,
      ...row
    }));
    this.selectedRows = [];
    console.log(this.tableData, ' this.tableData');

  }

  delateData() {
    this.delete_visible = false
  }

}
