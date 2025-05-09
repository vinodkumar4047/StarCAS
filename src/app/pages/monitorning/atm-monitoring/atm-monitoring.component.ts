import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';
import { NewWindowServiceService } from '../../../layout/service/new-window-service.service';
import { AtmMonitoringDetailsComponent } from './atm-monitoring-details/atm-monitoring-details.component';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-atm-monitoring',
  imports: [TabsModule,CommonModule,ButtonModule,InputTextModule],
  templateUrl: './atm-monitoring.component.html',
  styleUrl: './atm-monitoring.component.scss'
})
export class ATMMonitoringComponent {
  constructor(private newWindowService: NewWindowServiceService) {}

  openWindow(){
    this.newWindowService.openNewWindow(AtmMonitoringDetailsComponent);
  }
}
