import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component} from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TabsModule } from 'primeng/tabs';

@Component({
changeDetection:ChangeDetectionStrategy.OnPush,
  selector: 'app-txn-monitoring',
  imports: [TabsModule, CommonModule, ButtonModule, InputTextModule,LucideAngularModule],
  templateUrl: './txn-monitoring.component.html',
  styleUrl: './txn-monitoring.component.scss'
})
export class TxnMonitoringComponent {
  openWindow() {
    const url = '/trans_monitoringDP'; // Correct path routing
    window.open(url, '_blank');

  }
  graphOpenWindow() {
    const url = '/graph'; // Correct path routing
    window.open(url, '_blank');

  }
}
