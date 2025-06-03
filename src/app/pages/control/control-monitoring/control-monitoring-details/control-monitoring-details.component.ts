import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-control-monitoring-details',
  imports: [TooltipModule,
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    ButtonModule,
    DialogModule, TableModule, ProgressBarModule],
  templateUrl: './control-monitoring-details.component.html',
  styleUrl: './control-monitoring-details.component.scss'
})
export class ControlMonitoringDetailsComponent {

}
