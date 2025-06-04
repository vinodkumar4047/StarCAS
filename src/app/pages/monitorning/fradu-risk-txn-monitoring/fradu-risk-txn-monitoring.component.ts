import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-fradu-risk-txn-monitoring',
  imports: [TabsModule, CommonModule, ButtonModule, InputTextModule],
  templateUrl: './fradu-risk-txn-monitoring.component.html',
  styleUrl: './fradu-risk-txn-monitoring.component.scss'
})
export class FraduRiskTxnMonitoringComponent {
  openWindow() {
    const url = '/FraudRisk_Db'; // Correct path routing
    window.open(url, '_blank');

  }
  graphOpenWindow() {
    const url = '/graph'; // Correct path routing
    window.open(url, '_blank');

  }
}
