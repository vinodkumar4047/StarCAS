import { ChangeDetectionStrategy, Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Location } from '@angular/common';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { NgIf } from '@angular/common';

interface City {
  name: string;
  code: string;
}

@Component({
changeDetection:ChangeDetectionStrategy.OnPush,
  selector: 'app-atm-type',
  imports: [FormsModule, DropdownModule, FloatLabelModule, InputTextModule,
    ButtonModule, SelectButtonModule, TableModule, NgIf],
  templateUrl: './atm-type.component.html',
  styleUrl: './atm-type.component.scss'
})
export class ATMTypeComponent {
  constructor(private location: Location) { }
  cities: City[] | undefined;
  table: boolean = false
  selectedCity: City | undefined;
  value: string = 'NDC ATMs';
  filteredProducts: any;
  products = [{ ATMTYPEID: "NDC+ATM", ATMTYPEDESCRIPTION: "NDC ATMs", DRIVERCHANNEL: "EzNDCDriver" },
  { ATMTYPEID: "WINCOR", ATMTYPEDESCRIPTION: "WINCOR", DRIVERCHANNEL: "EzNDCDriver" },
  { ATMTYPEID: "D912ATM", ATMTYPEDESCRIPTION: "Diebold ATMs", DRIVERCHANNEL: "EzD912Driver" }
  ]
  ngOnInit() {
    this.onATMTypeChange(this.value);
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }
  goBack() {
    this.location.back();
  }
  stateOptions: any[] = [{ label: 'NDC ATMs', value: 'NDC ATMs', },
  { label: 'WINCOR', value: 'WINCOR' }, { label: 'Diebold ATMs', value: 'Diebold ATMs' },];

  onATMTypeChange(selectedValue: string) {
    console.log('selectedValue', selectedValue);

    this.filteredProducts = this.products.filter(
      product => product.ATMTYPEDESCRIPTION === selectedValue
    );
    this.table = true;
  }

}
