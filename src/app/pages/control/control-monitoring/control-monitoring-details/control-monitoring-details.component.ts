import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
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
import { HSMMonitoringComponent } from "../../../monitorning/hsm-monitoring/hsm-monitoring.component";

@Component({
  selector: 'app-control-monitoring-details',
  imports: [TooltipModule,
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    ButtonModule,
    DialogModule, TableModule, ProgressBarModule, TabsModule, TableModule, TableModule, TabViewModule, TaskManagerComponent, PortManagerComponent, NetworkControlComponent, NetworkMonitoringComponent, HSMMonitoringComponent],
  templateUrl: './control-monitoring-details.component.html',
  styleUrl: './control-monitoring-details.component.scss'
})
export class ControlMonitoringDetailsComponent {
  @ViewChild(NetworkMonitoringComponent) networkComp!: NetworkMonitoringComponent;
  @ViewChild(TaskManagerComponent) taskComp!: TaskManagerComponent;
  @ViewChild(PortManagerComponent) portComp!: PortManagerComponent;
  @ViewChild(NetworkControlComponent) controlComp!: NetworkControlComponent;
  @ViewChild(HSMMonitoringComponent) hsmComp!: HSMMonitoringComponent;

  countdown: number = 10;
  default: any = 0;

  intervalId: any;
  constructor(private cd: ChangeDetectorRef,) { }

  ngOnInit() {
    // this.itrate();
    this.startTimer();
  };

  // itrate() {
  //   setTimeout(() => {
  //     if (this.default <= 3) {
  //       this.default = this.default + 1;
  //     } else {
  //       this.default = 0;
  //     }

  //     this.cd.detectChanges();
  //     this.itrate();
  //   }, 10000)
  // };

  startTimer(): void {
    this.countdown = 10;

    this.intervalId = setInterval(() => {
      this.countdown--;

      if (this.countdown === 0) {
        this.refreshTabData(this.default);
        // Switch tab
        if (this.default < 4) {
          this.default += 1;
        } else {
          this.default = 0;
        }

        // Reset countdown
        this.countdown = 10;
      }

      this.cd.detectChanges();
    }, 1000); // Run every 1 second
  }
  refreshTabData(index: number): void {
    switch (index) {
      case 0:
        this.networkComp?.getData();
        break;
      case 1:
        this.taskComp?.getData();
        break;
      case 2:
        this.portComp?.getData();
        break;
      case 3:
        this.controlComp?.getData();
        break;
      case 4:
        this.hsmComp?.getData();
        break;
    }
  }

}
