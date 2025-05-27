import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TabsModule } from 'primeng/tabs';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { Dialog } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { RestService } from '../../../../layout/service/rest.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-atm-monitoring-details',
  imports: [TabsModule, CommonModule, ButtonModule, InputTextModule, InputGroupAddonModule, Dialog, TableModule],
  templateUrl: './atm-monitoring-details.component.html',
  styleUrl: './atm-monitoring-details.component.scss',
  // encapsulation:ViewEncapsulation.None
})
export class AtmMonitoringDetailsComponent {
  atmMonitoringrData: any[] = [];
  dataATM: { atmId: string, atmStatus: string }[] = [];
  selectedAtmDetails: any = null;
  hardwareFitness: any = {};
  configDetails: any = {};
  sensorStatus: any = {};
  supplyStatus: any = {};
  configEntries: any = {};
  SupplyStatus: any = {};
  atmDenominations: any[] = [];
  atmDetails1: any = null;

  // dataATM = [
  //   { atmStatus: 'G', atmId: 'TN000' },
  //   { atmStatus: 'O', atmId: 'TN001' },
  //   { atmStatus: 'W', atmId: 'TN002' },
  //   { atmStatus: 'N', atmId: 'TN003' },
  //   { atmStatus: 'L', atmId: 'TN004' },
  //   { atmStatus: 'C', atmId: 'TN005' },
  //   { atmStatus: 'S', atmId: 'TN006' },
  //   { atmStatus: 'G', atmId: 'TN007' },
  //   { atmStatus: 'W', atmId: 'TN008' },
  //   { atmStatus: 'O', atmId: 'TN009' },
  //   { atmStatus: 'N', atmId: 'TN010' },
  //   { atmStatus: 'L', atmId: 'TN011' },
  //   { atmStatus: 'G', atmId: 'TN012' },
  //   { atmStatus: 'C', atmId: 'TN013' },
  //   { atmStatus: 'S', atmId: 'TN014' },
  //   { atmStatus: 'W', atmId: 'TN015' },
  //   { atmStatus: 'G', atmId: 'TN016' },
  //   { atmStatus: 'O', atmId: 'TN017' },
  //   { atmStatus: 'C', atmId: 'TN018' },
  //   { atmStatus: 'N', atmId: 'TN019' },
  //   { atmStatus: 'L', atmId: 'TN020' },
  //   { atmStatus: 'G', atmId: 'TN021' },
  //   { atmStatus: 'W', atmId: 'TN022' },
  //   { atmStatus: 'O', atmId: 'TN023' },
  //   { atmStatus: 'S', atmId: 'TN024' },
  //   { atmStatus: 'L', atmId: 'TN025' },
  //   { atmStatus: 'C', atmId: 'TN026' },
  //   { atmStatus: 'N', atmId: 'TN027' },
  //   { atmStatus: 'W', atmId: 'TN028' },
  //   { atmStatus: 'G', atmId: 'TN029' }
  // ];
  atmSearchTerm: string = '';
  filteredATMList: any[] = [];
  lenOfData: any
  lenOfData1: any

  visible: boolean = false;
  mainDailogDetails: any = { atmStatus: '', atmId: '' };
  headerDia: any;
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

  // statuses: any = {
  //   "TIME OF DAY CLOCK": "no error",
  //   "HIGH ORDER COMMUNICATIONS": "no error",
  //   "SYSTEM DESK": "no error",
  //   "MAGNETIC CARD READER/WRITER": "no error",
  //   "CASH HANDLER": "no error",
  //   "DEPOSITORY": "fatal error",
  //   "RECEIPT PRINTER": "no error",
  //   "JOURNAL PRINTER": "no error",
  //   "ENHANCED THERMAL STATEMENT PRINTER": "no error",
  //   "NIGHT SAFE DIPOSITERY": "no error",
  //   "ENCRYPTOR": "no error",
  //   "SECURITY CAMERA": "no error",
  //   "DOOR ACCESS": "no error",
  //   "FLEX DISK": "no error",
  //   "CASSETTE TYPE 1": "no error",
  //   "CASSETTE TYPE 2": "no error",
  //   "CASSETTE TYPE 3": "no error",
  //   "CASSETTE TYPE 4": "no error",
  //   "STATEMENT PRINTER": "fatal error"
  // };
  displayConfigDialog: boolean = false;

  // configEntries = [
  //   { component: 'SYSTEM DISK', status: 'hard disk present' },
  //   { component: 'ENCRYPTOR', status: 'double length keys, restricted mode with epp encryptor' },
  //   { component: 'MAGNETIC CARD READER/WRITER', status: 'track 2 smart card reader' },
  //   { component: 'SECURITY CAMERA', status: 'not configured' },
  //   { component: 'CASH HANDLER', status: 'configured' },
  //   { component: 'DOOR ACCESS', status: 'not configured' },
  //   { component: 'DEPOSITERY', status: 'not configured' },
  //   { component: 'FLEX DISK', status: 'not configured' },
  //   { component: 'RECEIPT PRINTER', status: 'Thermal printer - sideways printing, no black mark' },
  //   { component: 'TEMPER INDICATING BINS', status: 'secure cash, insecure cards, insecure ppd deposits or no ppd' },
  //   { component: 'NIGHT SAFE DEPOSITERY', status: 'not configured' },
  //   { component: 'CARDHOLDER KEYBOARD', status: '' },
  //   { component: 'OPERATOR KEYBOARD', status: 'keyboard plus fdks (enhanced)' },
  //   { component: 'STATEMENT PRINTER', status: 'Not configured' },
  //   { component: 'RDHOLDER DISPLAY/VOICE', status: 'Voice not supported null FDKs' }
  // ];

  displaySupplyDialog: boolean = false;

  // SupplyStatus = [
  //   { component: 'CARD CAPTURE BIN', status: 'good state' },
  //   { component: 'SUPCASTYPE1', status: 'media out' },
  //   { component: 'CASH HANDLER REJECT BIN', status: 'good state' },
  //   { component: 'SUPCASTYPE2', status: 'good state' },
  //   { component: 'DEPOSIT BIN', status: 'not configured' },
  //   { component: 'SUPCASTYPE3', status: 'media out' },
  //   { component: 'RECEIPT PAPER', status: 'media out' },
  //   { component: 'SUPCASTYPE4', status: 'media low' },
  //   { component: 'JOURNAL PAPER', status: 'good state' },
  //   { component: 'SUPSTMTPAPER', status: 'not configured' },
  //   { component: 'NIGHT SAFE', status: 'not configured' },
  //   { component: 'SUPSTMTRIBBON', status: 'good state' }
  // ];

  displaySensorDialog: boolean = false;

  // statusData = [
  //   { component: 'SUPERVISOR MODE', status: 'inactive' },
  //   { component: 'CARD BIN', status: 'active' },
  //   { component: 'VIBRATION AND/OR HEAT SENSOR', status: 'inactive' },
  //   { component: 'CURRENCY REJECT BIN', status: 'active' },
  //   { component: 'DOOR CONTACT SENSOR', status: 'inactive' },
  //   { component: 'CURRENCY CASSETTE IN POSITION1', status: 'active' },
  //   { component: 'ELECTRONICS ENCLOUSRE SENSOR', status: 'inactive' },
  //   { component: 'CURRENCY CASSETTE IN POSITION2', status: 'active' },
  //   { component: 'DEPOSIT BIN', status: 'inactive' },
  //   { component: 'CURRENCY CASSETTE IN POSITION3', status: 'active' },
  //   { component: 'SILENT SIGNAL SENSOR', status: 'inactive' },
  //   { component: 'CURRENCY CASSETTE IN POSITION4', status: 'active' }
  // ];

  constructor(private cd: ChangeDetectorRef, private restApi: RestService) {
  }

  ngOnInit() {
    this.atmMonitoringGetData();
    this.getAtmDetails('TEST008');

    // this.filteredATMList = this.dataATM; // initialize with full list
    // this.lenOfData = {
    //   good: this.dataATM.filter(atm => atm?.atmStatus == 'G').length,
    //   offline: this.dataATM.filter(atm => atm?.atmStatus == 'O').length,
    //   warn: this.dataATM.filter(atm => atm?.atmStatus == 'W').length,
    //   outOfService: this.dataATM.filter(atm => atm?.atmStatus == 'N').length,
    //   lowCash: this.dataATM.filter(atm => atm?.atmStatus == 'L').length,
    //   critical: this.dataATM.filter(atm => atm?.atmStatus == 'C').length,
    //   supervisor: this.dataATM.filter(atm => atm?.atmStatus == 'S').length,
    // };
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

  atmMonitoringGetData() {
    const instId = 'SCB';
    this.restApi.get(`/monitoring/v1/atmMonitoringDetails?instId=${instId}`).pipe(
      take(1),
    ).subscribe({
      next: (res) => {
        if (res) {
          const statusMap = [
            { key: 'onlineAtms', status: 'G' },       // Good
            { key: 'offlineAtms', status: 'O' },      // Offline
            { key: 'warningAtms', status: 'W' },      // Warning
            { key: 'lowCashAtms', status: 'L' },      // Low Cash
            { key: 'outOfCashAtms', status: 'L' },    // Treat same as Low Cash
            { key: 'outOfServiceAtms', status: 'N' }, // Out of Service
            { key: 'criticalAtms', status: 'C' },     // Critical
            { key: 'supervisorAtms', status: 'S' }    // Supervisor
          ];

          // Flatten into individual ATM entries with status code
          this.dataATM = statusMap.flatMap(({ key, status }) => {
            const atmList = res[key] || [];
            return atmList.map((atmId: string) => ({ atmId, atmStatus: status }));
          }).sort((a, b) => a.atmId.localeCompare(b.atmId));
          this.filteredATMList = this.dataATM; // initialize with full list

          // Compute lengths
          this.lenOfData = {
            good: this.dataATM.filter(atm => atm?.atmStatus === 'G').length,
            offline: this.dataATM.filter(atm => atm?.atmStatus === 'O').length,
            warn: this.dataATM.filter(atm => atm?.atmStatus === 'W').length,
            outOfService: this.dataATM.filter(atm => atm?.atmStatus === 'N').length,
            lowCash: this.dataATM.filter(atm => atm?.atmStatus === 'L').length,
            critical: this.dataATM.filter(atm => atm?.atmStatus === 'C').length,
            supervisor: this.dataATM.filter(atm => atm?.atmStatus === 'S').length,
          };

          console.log('Flattened ATM Data:', this.dataATM);
          console.log('Status Counts:', this.lenOfData);
        } else {
          console.warn('No data received or request failed.');
        }
      },
      error: (err) => {
        console.error('Subscription error:', err);
      }
    });
  }

  getAtmDetails(atmId: string) {
  const instId = 'SCB';
  const url = `/monitoring/v1/atmDetails/${atmId}?instId=${instId}`;

  this.restApi.get(url).pipe(take(1)).subscribe({
    next: (res) => {
      if (res) {
        this.hardwareFitness = res.hardwareFitnessResponse || {};
        this.configDetails = res.configDetailsResponse || {};
        this.configEntries = this.convertConfigToEntries(this.configDetails);

        this.sensorStatus = res.sensorStatusResponse || {};
        this.supplyStatus = res.supplyStatusResponse || {};
        this.SupplyStatus = this.convertConfigToEntries(this.supplyStatus);
        const denomData = res.atmDenomDetailsResponse?.[0];
        if (denomData) {
          const values = denomData.denomValue.split(',').map(Number);
          const loadedNotes = denomData.denomNotesLoaded.split(',').map(Number);
          const dispensedNotes = denomData.denomDispensed.split(',').map(Number);

          let totalLoaded = 0;
          let totalDispensed = 0;
          let totalAvailable = 0;

          this.denominationArray = values.map((value: any, index: any) => {
            const loaded = loadedNotes[index];
            const dispensed = dispensedNotes[index] ;
            const available = loaded - dispensed;

            totalLoaded += loaded;
            totalDispensed += dispensed;
            totalAvailable += available;

            return {
              denomination: value,
              loaded,
              dispensed,
              available
            };
          });

          this.atmDetails = {
            ...res.atmDetailsResponse,
            atmId:atmId,
            totals: {
              loaded: totalLoaded,
              dispensed: totalDispensed,
              available: totalAvailable
            }
          };
        }
      } else {
        console.warn('No details returned from API');
      }
    },
    error: (err) => {
      console.error('Failed to fetch ATM details:', err);
    }
  });
}


  convertConfigToEntries(config: any): { component: string; status: string }[] {
    if (!config) return [];
    return Object.entries(config).map(([key, value]) => ({
      component: key,
      status: String(value)
    }));
  }

  onSearchInput(event: any) {
    const term = event.target.value.toLowerCase();
    this.filteredATMList = this.dataATM.filter(atm =>
      atm.atmId.toLowerCase().includes(term)
    );
  }

  showDialog(data: any) {
    this.visible = true;
    this.mainDailogDetails = data;
    this.headerDia = 'Detail of ' + this.mainDailogDetails?.atmId;
    this.getAtmDetails(this.mainDailogDetails?.atmId)
    console.log(this.headerDia, this.mainDailogDetails, 'this.headerDiathis.mainDailogDetails?.atmId;');

  }

  get statusData(): { key: string; value: string }[] {
    return Object.entries(this.sensorStatus || {}).map(([key, value]) => ({
      key,
      value: String(value)
    }));
  }

  get statusKeys(): string[] {
    return Object.keys(this.hardwareFitness);
  }

  onHardwareDialog() {
    this.displayHardwareDialog = true
  }

  onConfigDialog() {
    this.displayConfigDialog = true
  }

  onsSupplyDialog() {
    this.displaySupplyDialog = true
  }

  openSensorDialog() {
    this.displaySensorDialog = true;
  }

}
