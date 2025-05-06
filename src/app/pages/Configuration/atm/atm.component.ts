import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-atm',
  imports: [
    TooltipModule,
    TableModule,
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    ButtonModule],
  templateUrl: './atm.component.html',
  styleUrl: './atm.component.scss'
})
export class ATMComponent {
  search: any = '';
  customers = [
    { name: 'Task A', taskId: 'T001', status: 'In Progress', startDate: '2025-04-01', startTime: '08:00 AM' },
    { name: 'Task B', taskId: 'T002', status: 'Completed', startDate: '2025-04-02', startTime: '09:30 AM' },
    { name: 'Task C', taskId: 'T003', status: 'Pending', startDate: '2025-04-03', startTime: '10:00 AM' },
    { name: 'Task D', taskId: 'T004', status: 'In Progress', startDate: '2025-04-04', startTime: '11:15 AM' },
    { name: 'Task E', taskId: 'T005', status: 'Completed', startDate: '2025-04-05', startTime: '12:30 PM' },
    { name: 'Task F', taskId: 'T006', status: 'Pending', startDate: '2025-04-06', startTime: '01:45 PM' },
    { name: 'Task G', taskId: 'T007', status: 'In Progress', startDate: '2025-04-07', startTime: '02:00 PM' },
    { name: 'Task H', taskId: 'T008', status: 'Completed', startDate: '2025-04-08', startTime: '03:15 PM' },
    { name: 'Task I', taskId: 'T009', status: 'In Progress', startDate: '2025-04-09', startTime: '04:30 PM' },
    { name: 'Task J', taskId: 'T010', status: 'Completed', startDate: '2025-04-10', startTime: '05:00 PM' },
    { name: 'Task K', taskId: 'T011', status: 'Pending', startDate: '2025-04-11', startTime: '06:15 PM' },
    { name: 'Task L', taskId: 'T012', status: 'In Progress', startDate: '2025-04-12', startTime: '07:30 PM' },
    { name: 'Task M', taskId: 'T013', status: 'Completed', startDate: '2025-04-13', startTime: '08:45 PM' },
    { name: 'Task N', taskId: 'T014', status: 'In Progress', startDate: '2025-04-14', startTime: '09:00 PM' },
    { name: 'Task O', taskId: 'T015', status: 'Completed', startDate: '2025-04-15', startTime: '10:30 AM' },
    { name: 'Task P', taskId: 'T016', status: 'Pending', startDate: '2025-04-16', startTime: '11:00 AM' },
    { name: 'Task Q', taskId: 'T017', status: 'In Progress', startDate: '2025-04-17', startTime: '12:00 PM' },
    { name: 'Task R', taskId: 'T018', status: 'Completed', startDate: '2025-04-18', startTime: '01:30 PM' },
    { name: 'Task S', taskId: 'T019', status: 'Pending', startDate: '2025-04-19', startTime: '02:45 PM' },
    { name: 'Task T', taskId: 'T020', status: 'In Progress', startDate: '2025-04-20', startTime: '03:00 PM' },
  ];

  constructor(private router: Router) { };

  clear(table: any) {
    table.clear();
    this.search = '';
  }
  onGlobalFilter(event: Event, table: any) {
    const input = event.target as HTMLInputElement;
    table.filterGlobal(input.value, 'contains');
  }
  addOrEdit(type: any, data: any) {
    if (type == 'add') {
      this.router.navigate(['/pages/add_edit_atm'], { state: data });
    }
  }
}
