import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TabsModule } from 'primeng/tabs';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { Dialog } from 'primeng/dialog';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-atm-monitoring-details',
  imports: [TabsModule,CommonModule,ButtonModule,InputTextModule,InputGroupAddonModule,Dialog,TableModule ],
  templateUrl: './atm-monitoring-details.component.html',
  styleUrl: './atm-monitoring-details.component.scss',
  // encapsulation:ViewEncapsulation.None
})
export class AtmMonitoringDetailsComponent {
  dataATM = [
    { atmStatus: 'G', atmName: 'TN000' },
    { atmStatus: 'O', atmName: 'TN001' },
    { atmStatus: 'W', atmName: 'TN002' },
    { atmStatus: 'N', atmName: 'TN003' },
    { atmStatus: 'L', atmName: 'TN004' },
    { atmStatus: 'C', atmName: 'TN005' },
    { atmStatus: 'S', atmName: 'TN006' },
    { atmStatus: 'G', atmName: 'TN007' },
    { atmStatus: 'W', atmName: 'TN008' },
    { atmStatus: 'O', atmName: 'TN009' },
    { atmStatus: 'N', atmName: 'TN010' },
    { atmStatus: 'L', atmName: 'TN011' },
    { atmStatus: 'G', atmName: 'TN012' },
    { atmStatus: 'C', atmName: 'TN013' },
    { atmStatus: 'S', atmName: 'TN014' },
    { atmStatus: 'W', atmName: 'TN015' },
    { atmStatus: 'G', atmName: 'TN016' },
    { atmStatus: 'O', atmName: 'TN017' },
    { atmStatus: 'C', atmName: 'TN018' },
    { atmStatus: 'N', atmName: 'TN019' },
    { atmStatus: 'L', atmName: 'TN020' },
    { atmStatus: 'G', atmName: 'TN021' },
    { atmStatus: 'W', atmName: 'TN022' },
    { atmStatus: 'O', atmName: 'TN023' },
    { atmStatus: 'S', atmName: 'TN024' },
    { atmStatus: 'L', atmName: 'TN025' },
    { atmStatus: 'C', atmName: 'TN026' },
    { atmStatus: 'N', atmName: 'TN027' },
    { atmStatus: 'W', atmName: 'TN028' },
    { atmStatus: 'G', atmName: 'TN029' }
  ];
  atmSearchTerm: string = '';
  filteredATMList: any[] = [];
  lenOfData:any
  visible: boolean = false;
  mainDailogDetails:any = { atmStatus: '', atmName: '' };
  headerDia:any;
  atmDetails = {
    atmId: "TEST006",
    atmTypeId: "ndc+atm",
    terminalId: "test006",
    atmLocation: "clock tower atm kabul afg",
    atmLogicalGroup: "ndc+atm",
    maxNoteDispense: 40,
    acquirerBranchCode: "006",
    maxAmountDispense: 800,
    denominations: {
      "10000": { loaded: 21, dispensed: 0, available: 21 },
      "5000": { loaded: 559, dispensed: 410, available: 149 },
      "1000": { loaded: 2499, dispensed: 0, available: 2499 },
      "100": { loaded: 2499, dispensed: 0, available: 2499 }
    },
    totals: {
      loaded: 5578,
      dispensed: 410,
      available: 5168
    }
  };

  denominationArray: any[] = [];
  displayHardwareDialog: boolean = false;

  statuses: any = {
    "TIME OF DAY CLOCK": "no error",
    "HIGH ORDER COMMUNICATIONS": "no error",
    "SYSTEM DESK": "no error",
    "MAGNETIC CARD READER/WRITER": "no error",
    "CASH HANDLER": "no error",
    "DEPOSITORY": "no error",
    "RECEIPT PRINTER": "no error",
    "JOURNAL PRINTER": "no error",
    "ENHANCED THERMAL STATEMENT PRINTER": "no error",
    "NIGHT SAFE DIPOSITERY": "no error",
    "ENCRYPTOR": "no error",
    "SECURITY CAMERA": "no error",
    "DOOR ACCESS": "no error",
    "FLEX DISK": "no error",
    "CASSETTE TYPE 1": "no error",
    "CASSETTE TYPE 2": "no error",
    "CASSETTE TYPE 3": "no error",
    "CASSETTE TYPE 4": "no error",
    "STATEMENT PRINTER": "error"
  };
  

   constructor(private cd: ChangeDetectorRef) {
   }
  
  ngOnInit() {
    this.filteredATMList = this.dataATM; // initialize with full list
    this.lenOfData = {
      good: this.dataATM.filter(atm => atm?.atmStatus == 'G').length,
      offline: this.dataATM.filter(atm => atm?.atmStatus == 'O').length,
      warn: this.dataATM.filter(atm => atm?.atmStatus == 'W').length,
      outOfService: this.dataATM.filter(atm => atm?.atmStatus == 'N').length,
      lowCash: this.dataATM.filter(atm => atm?.atmStatus == 'L').length,
      critical: this.dataATM.filter(atm => atm?.atmStatus == 'C').length,
      supervisor: this.dataATM.filter(atm => atm?.atmStatus == 'S').length,
    };
    this.denominationArray = Object.entries(this.atmDetails.denominations).map(
      ([denomination, data]: [string, any]) => ({
        denomination,
        ...data
      })
    );
    setTimeout(() => {
      this.cd.detectChanges();
    }, 1000);

  }
  
  onSearchInput(event: any) {
    const term = event.target.value.toLowerCase();
    this.filteredATMList = this.dataATM.filter(atm =>
      atm.atmName.toLowerCase().includes(term)
    );
  }

  showDialog(data:any) {
      this.visible = true;
      this.mainDailogDetails = data;
      this.headerDia = 'Detail of '+this.mainDailogDetails?.atmName;
      console.log(this.headerDia,this.mainDailogDetails,'this.headerDiathis.mainDailogDetails?.atmName;');
      
  }


get statusKeys(): string[] {
  return Object.keys(this.statuses);
}

onHardwareDialog(){
  this.displayHardwareDialog = true
}

}
