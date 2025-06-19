import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Location } from '@angular/common';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { NgIf } from '@angular/common';
import { RestService } from '../../../layout/service/rest.service';
import { take } from 'rxjs/operators';
import { LogIn } from 'lucide-angular';

interface City {
  name: string;
  code: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-atm-type',
  imports: [FormsModule, DropdownModule, FloatLabelModule, InputTextModule,
    ButtonModule, SelectButtonModule, TableModule, NgIf],
  templateUrl: './atm-type.component.html',
  styleUrl: './atm-type.component.scss'
})
export class ATMTypeComponent {
  constructor(private location: Location, private restApi: RestService, private cdr: ChangeDetectorRef) { }
  loading: boolean = true;
  atmTypeData: any;
  cities: City[] | undefined;
  table: boolean = false
  selectedCity: City | undefined;
  value: string = 'NDC ATMs';
  filteredProducts: any;

  ngOnInit() {
    this.getBinData();

    // this.onATMTypeChange(this.value);
  }
  goBack() {
    this.location.back();
  }
  stateOptions: any[] = [{ label: 'NDC ATMs', value: 'NDC ATMs', },
  { label: 'WINCOR', value: 'WINCOR ATMs' },
    // { label: 'Diebold ATMs', value: 'DIEBOLD ATMs' },
  ];

  onATMTypeChange(selectedValue: string) {
    console.log('selectedValue', selectedValue);

    this.filteredProducts = this.atmTypeData.filter(
      (product: any) => product.atmTypeDescription === selectedValue
    );
    this.table = true;
  }

  getBinData(selectedValue?: string) {
    console.log('getBinData called with selectedValue:', selectedValue);
    // this.loading = true;
    // const instId = localStorage.getItem('instId')
    const instId = 'CLFSC'; // Static value for now


    this.restApi.get('/configuration/atmType').pipe(
      take(1)
    ).subscribe({
      next: (res) => {
        if (res) {
          this.atmTypeData = res;
          this.onATMTypeChange(this.value);
          console.log('taskManager data:', this.atmTypeData);
        } else {
          console.warn('No data received or request failed.');
        } setTimeout(() => {
          this.loading = false;
          this.cdr.detectChanges();
        }, );
      },
      error: (err) => {
        console.error('Subscription error:', err);
        this.loading = false;
        this.cdr.detectChanges();

      }
    });
  };
}
