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
    "DEPOSITORY": "fatal error",
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
    "STATEMENT PRINTER": "fatal error"
  };
  displayConfigDialog: boolean = false;

  configEntries = [
    { component: 'SYSTEM DISK', status: 'hard disk present' },
    { component: 'ENCRYPTOR', status: 'double length keys, restricted mode with epp encryptor' },
    { component: 'MAGNETIC CARD READER/WRITER', status: 'track 2 smart card reader' },
    { component: 'SECURITY CAMERA', status: 'not configured' },
    { component: 'CASH HANDLER', status: 'configured' },
    { component: 'DOOR ACCESS', status: 'not configured' },
    { component: 'DEPOSITERY', status: 'not configured' },
    { component: 'FLEX DISK', status: 'not configured' },
    { component: 'RECEIPT PRINTER', status: 'Thermal printer - sideways printing, no black mark' },
    { component: 'TEMPER INDICATING BINS', status: 'secure cash, insecure cards, insecure ppd deposits or no ppd' },
    { component: 'NIGHT SAFE DEPOSITERY', status: 'not configured' },
    { component: 'CARDHOLDER KEYBOARD', status: '' },
    { component: 'OPERATOR KEYBOARD', status: 'keyboard plus fdks (enhanced)' },
    { component: 'STATEMENT PRINTER', status: 'Not configured' },
    { component: 'RDHOLDER DISPLAY/VOICE', status: 'Voice not supported null FDKs' }
  ];

  displaySupplyDialog: boolean = false;

SupplyStatus = [
  { component: 'CARD CAPTURE BIN', status: 'good state' },
  { component: 'SUPCASTYPE1', status: 'media out' },
  { component: 'CASH HANDLER REJECT BIN', status: 'good state' },
  { component: 'SUPCASTYPE2', status: 'good state' },
  { component: 'DEPOSIT BIN', status: 'not configured' },
  { component: 'SUPCASTYPE3', status: 'media out' },
  { component: 'RECEIPT PAPER', status: 'media out' },
  { component: 'SUPCASTYPE4', status: 'media low' },
  { component: 'JOURNAL PAPER', status: 'good state' },
  { component: 'SUPSTMTPAPER', status: 'not configured' },
  { component: 'NIGHT SAFE', status: 'not configured' },
  { component: 'SUPSTMTRIBBON', status: 'good state' }
];

displaySensorDialog: boolean = false;

statusData = [
  { component: 'SUPERVISOR MODE', status: 'inactive' },
  { component: 'CARD BIN', status: 'active' },
  { component: 'VIBRATION AND/OR HEAT SENSOR', status: 'inactive' },
  { component: 'CURRENCY REJECT BIN', status: 'active' },
  { component: 'DOOR CONTACT SENSOR', status: 'inactive' },
  { component: 'CURRENCY CASSETTE IN POSITION1', status: 'active' },
  { component: 'ELECTRONICS ENCLOUSRE SENSOR', status: 'inactive' },
  { component: 'CURRENCY CASSETTE IN POSITION2', status: 'active' },
  { component: 'DEPOSIT BIN', status: 'inactive' },
  { component: 'CURRENCY CASSETTE IN POSITION3', status: 'active' },
  { component: 'SILENT SIGNAL SENSOR', status: 'inactive' },
  { component: 'CURRENCY CASSETTE IN POSITION4', status: 'active' }
];

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

onConfigDialog(){
  this.displayConfigDialog = true
}

onsSupplyDialog(){
  this.displaySupplyDialog = true
}

openSensorDialog() {
  this.displaySensorDialog = true;
}

}
