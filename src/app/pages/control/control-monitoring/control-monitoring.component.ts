import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TabsModule } from 'primeng/tabs';
import { NewWindowService } from '../../../layout/service/new-window-service.service';

@Component({
  selector: 'app-control-monitoring',
  imports: [TabsModule, CommonModule, ButtonModule, InputTextModule],
  templateUrl: './control-monitoring.component.html',
  styleUrl: './control-monitoring.component.scss'
})
export class ControlMonitoringComponent {
  constructor(private newWindowService: NewWindowService, private cd: ChangeDetectorRef,) { }

  openWindow() {
    // this.newWindowService.openNewWindow(AtmMonitoringDetailsComponent);
    const url = '/control_Monitoring_Details'; // Correct path routing
    window.open(url, '_blank');
    // this.cd.detectChanges();

  }
}

