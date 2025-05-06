import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TableModule, Table } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-branch',
  imports: [TooltipModule,
    TableModule,  // Only import TableModule
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    InputTextModule,
    DialogModule,
    ButtonModule],
  templateUrl: './branch.component.html',
  styleUrl: './branch.component.scss'
})
export class BranchComponent {
  visible: boolean = false;
  edit_visible: boolean = false;
  showViewData: any = null;
  Edit_data: any
  delete_visible: boolean = false;
  customers = [{ INSTID: "TEST", INSTNAME: "TEST BANK", INSTROUTETYPE: "CBS", INSTTYPE: "FIN", INSTCURRENCYCODE: "925", MAXATMPINCOUNT: 3, MAXTELEPINCOUNT: 3 },
  { INSTID: "TEST", INSTNAME: "TEST BANK", INSTROUTETYPE: "EXTNTWK", INSTTYPE: "EXTNTWK", INSTCURRENCYCODE: "925", MAXATMPINCOUNT: 3, MAXTELEPINCOUNT: 3 },
  { INSTID: "TEST", INSTNAME: "TEST BANK", INSTROUTETYPE: "EXTNTWK", INSTTYPE: "EXTNTWK", INSTCURRENCYCODE: "925", MAXATMPINCOUNT: 3, MAXTELEPINCOUNT: 3 }];
  clear(able: Table) {

  }
  showFunction(customer?: any) {
    this.showViewData = customer;
    this.visible = true;
    console.log(this.showViewData);
  }
  editFunction(customer?: any) {
    this.Edit_data = customer
    this.edit_visible = true;
  }
  deleteItem() {
    console.log('Item deleted!');
    this.delete_visible = true;
  }
}
