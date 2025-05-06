import { Component } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { Table, TableModule } from 'primeng/table';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-institution',
  imports: [TooltipModule,
    TableModule,  // Only import TableModule
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    ButtonModule],
  templateUrl: './institution.component.html',
  styleUrl: './institution.component.scss'
})
export class InstitutionComponent {
  customers = [{ INSTID: "TEST", INSTNAME: "TEST BANK", INSTROUTETYPE: "CBS", INSTTYPE: "FIN", INSTCURRENCYCODE: "925", MAXATMPINCOUNT: 3, MAXTELEPINCOUNT: 3 },
  { INSTID: "TEST", INSTNAME: "TEST BANK", INSTROUTETYPE: "EXTNTWK", INSTTYPE: "EXTNTWK", INSTCURRENCYCODE: "925", MAXATMPINCOUNT: 3, MAXTELEPINCOUNT: 3 },
  { INSTID: "TEST", INSTNAME: "TEST BANK", INSTROUTETYPE: "EXTNTWK", INSTTYPE: "EXTNTWK", INSTCURRENCYCODE: "925", MAXATMPINCOUNT: 3, MAXTELEPINCOUNT: 3 }];
  clear(able: Table) {

  }
}
