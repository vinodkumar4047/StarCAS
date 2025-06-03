import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { TabsModule } from 'primeng/tabs';
import { TooltipModule } from 'primeng/tooltip';
import { TabViewModule } from 'primeng/tabview';
import { TaskManagerComponent } from "../../task-manager/task-manager.component";
import { PortManagerComponent } from "../../port-manager/port-manager.component";
import { NetworkControlComponent } from "../../network-control/network-control.component";
import { NetworkMonitoringComponent } from "../../../monitorning/network-monitoring/network-monitoring.component";

@Component({
  selector: 'app-control-monitoring-details',
  imports: [TooltipModule,
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    ButtonModule,
    DialogModule, TableModule, ProgressBarModule, TabsModule, TableModule, TableModule, TabViewModule, TaskManagerComponent, PortManagerComponent, NetworkControlComponent, NetworkMonitoringComponent],
  templateUrl: './control-monitoring-details.component.html',
  styleUrl: './control-monitoring-details.component.scss'
})
export class ControlMonitoringDetailsComponent {
  default: any = 0;

  constructor(private cd: ChangeDetectorRef,) { }

  ngOnInit() {
    this.itrate();
  };

  itrate() {
    setTimeout(() => {
      if (this.default <= 2) {
        this.default = this.default + 1;
      } else {
        this.default = 0;
      }

      this.cd.detectChanges();
      this.itrate();
    }, 10000)
  };

}
