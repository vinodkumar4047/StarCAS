import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';
import { NewWindowService } from '../../../layout/service/new-window-service.service';
import { AtmMonitoringDetailsComponent } from './atm-monitoring-details/atm-monitoring-details.component';
import { InputTextModule } from 'primeng/inputtext';

@Component({
changeDetection:ChangeDetectionStrategy.OnPush,
  selector: 'app-atm-monitoring',
  imports: [TabsModule, CommonModule, ButtonModule, InputTextModule],
  templateUrl: './atm-monitoring.component.html',
  styleUrl: './atm-monitoring.component.scss',
  // encapsulation:ViewEncapsulation.None
})
export class ATMMonitoringComponent {
  constructor(private newWindowService: NewWindowService, private cd: ChangeDetectorRef,) { }

  openWindow() {
    // this.newWindowService.openNewWindow(AtmMonitoringDetailsComponent);
    const url = '/atm_Monitoring_details'; // Correct path routing
    window.open(url, '_blank');
    // this.cd.detectChanges();

  }
}
