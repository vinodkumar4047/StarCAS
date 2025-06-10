import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TabsModule } from 'primeng/tabs';
import { NewWindowService } from '../../../layout/service/new-window-service.service';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-fraud-monitoring',
  imports: [TabsModule, CommonModule, ButtonModule, InputTextModule,LucideAngularModule],
  templateUrl: './fraud-monitoring.component.html',
  styleUrl: './fraud-monitoring.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FraudMonitoringComponent {
  constructor(private newWindowService: NewWindowService, private cd: ChangeDetectorRef,) { }

  openWindow() {
    // this.newWindowService.openNewWindow(AtmMonitoringDetailsComponent);
    const url = '/fraud_Monitoring_details'; // Correct path routing
    window.open(url, '_blank');
    // this.cd.detectChanges();

  }
}
