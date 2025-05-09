import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-atm-monitoring-details',
  imports: [TabsModule,CommonModule,ButtonModule,InputTextModule],
  templateUrl: './atm-monitoring-details.component.html',
  styleUrl: './atm-monitoring-details.component.scss'
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
  
  ngOnInit() {
    this.filteredATMList = this.dataATM; // initialize with full list
  }
  
  onSearchInput(event: any) {
    const term = event.target.value.toLowerCase();
    this.filteredATMList = this.dataATM.filter(atm =>
      atm.atmName.toLowerCase().includes(term)
    );
  }
}
