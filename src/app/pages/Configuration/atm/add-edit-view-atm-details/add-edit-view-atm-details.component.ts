import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Location } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { SelectModule } from 'primeng/select';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-add-edit-view-atm-details',
  imports: [InputTextModule,FormsModule,CommonModule,ButtonModule,InputGroupModule,
    TableModule,InputGroupAddonModule,SelectModule,SelectButtonModule],
  templateUrl: './add-edit-view-atm-details.component.html',
  styleUrl: './add-edit-view-atm-details.component.scss'
})
export class AddEditViewAtmDetailsComponent {
routeData:any = history.state;
locat: string = 'New York';
mapUrl: SafeResourceUrl | undefined;
selectedType: any;
EMVValue:any='1';
aliveValue:any='1';
connectionValue:any='1';
statusValue:any='1';
headerValue:any='1';
EMVOptions: any[] = [{ label: 'ON', value: '1' }, { label: 'OFF', value: '0' }];
aliveOptions: any[] = [{ label: 'ON', value: '1' }, { label: 'OFF', value: '0' }];
connectionOptions: any[] = [{ label: 'Server', value: '1' }, { label: 'Client', value: '0' }];
statusOptions: any[] = [{ label: 'Active', value: '1' }, { label: 'Inactive', value: '0' }];
headerOptions: any[] = [{ label: 'HEX', value: '1' }, { label: 'ASCII', value: '0' }];
atmTypes = [
  { name: 'NDC ATMs', code: 'NDC ATMs' },
  { name: 'WINCOR', code: 'WINCOR' },
  { name: 'Diebold ATMs', code: 'Diebold ATMs' },
];
selectprod :any ;
products:any=[
  {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
  },
  {
      id: '1001',
      code: 'nvklal433',
      name: 'Black Watch',
  },
  {
      id: '1002',
      code: 'zz21cz3c1',
      name: 'Blue Band',
  },
  {
      id: '1003',
      code: '244wgerg2',
      name: 'Blue T-Shirt',
  },
  {
      id: '1004',
      code: 'h456wer53',
      name: 'Bracelet',
  },
  {
      id: '1005',
      code: 'av2231fwg',
      name: 'Brown Purse',
  },
  {
      id: '1006',
      code: 'bib36pfvm',
      name: 'Chakra Bracelet',
  },
  {
      id: '1007',
      code: 'mbvjkgip5',
      name: 'Galaxy Earrings',
  },
 ];

constructor(private location: Location,private sanitizer: DomSanitizer) {
   this.updateMap()
  }

ngOnInit(){
  console.log(this.routeData,'routedata');
}

goBack() {
  this.location.back();
}

updateMap() {
  const query = encodeURIComponent(this.locat);
  // const url = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${query}`;
  const url = " https://maps.google.com/maps?q=40.5509,-105.0668&output=svembed"
  this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
}

}
