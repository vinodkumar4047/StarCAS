import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { DialogModule } from 'primeng/dialog';
import { TableComponent } from '../../../layout/component/table/table.component';
import { RestService } from '../../../layout/service/rest.service';
import { take } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';
import { DialogService } from '../../../layout/component/commonDialog.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-task-manager',
  imports: [TooltipModule,
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    ButtonModule,
    TableComponent,
    DialogModule,
  ],
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.scss'
})

export class TaskManagerComponent {
  @Input() minimalView: boolean = false;
  taskManagerData: any;
  loading: boolean = true;
  constructor(private restApi: RestService, private cdr: ChangeDetectorRef, private dialogService: DialogService) { };

  ngOnInit() {
    this.getData()
  };

  globalFilterFields: any = [
    'taskName',
    'taskId',
    'status',
    'startDate',
    'startTime',
  ];
  cols = [
    { field: 'taskName', header: 'TASK_NAME' },
    { field: 'taskId', header: 'TASK_ID' },
    { field: 'status', header: 'STATUS' },
    { field: 'startDate', header: 'START_DATE' },
    { field: 'startTime', header: 'START_TIME' },

  ];

  // getData() {
  //   console.log('Fetching task manager data...',);

  //   this.restApi.get('/control/taskManager').pipe(
  //     take(1),
  //   ).subscribe({
  //     next: (res) => {
  //       if (res) {
  //         this.taskManagerData = res;
  //         this.cdr.detectChanges();
  //         console.log('taskManager data:', res);

  //       } else {
  //         console.warn('No data received or request failed.');
  //       };
  //     },
  //     error: (err) => {
  //       console.error('Subscription error:', err);
  //       this.cdr.detectChanges();

  //     }
  //   });
  // };

  getData() {
    console.log('Fetching task manager data...');

    this.restApi.get('/control/taskManager').pipe(
      take(1)
    ).subscribe({
      next: (res) => {
        if (!res) {
          this.dialogService.show('No response from server', 'Try again later', 'error', 3000);
          return;
        }

        this.taskManagerData = res;
        console.log('Task manager data:', res);
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Subscription error:', err);
        this.dialogService.show('Error', 'Failed to fetch task manager data', 'error', 3000);
        this.cdr.detectChanges();
      }
    });
  }



}
