import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SortEvent } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-table',
  imports: [
    TooltipModule,
    TableModule,
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    ButtonModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',

})
export class TableComponent {
  @Input() paginator: boolean = true;

  @Input() tableData: any;
  @Input() cols: any;
  @Input() globalFilterFields: any;
  @Input() addButton: any;
  @Input() updateButton: any;
  @Input() multipleButton: any;

  @Output() addEvent = new EventEmitter<any>();
  @Output() editEvent = new EventEmitter<any>();
  @Output() deleteEvent = new EventEmitter<any>();
  @Output() viewEvent = new EventEmitter<any>();
  @Output() event = new EventEmitter<any>();
  search: any = '';
  constructor() { }

  ngOnInit() {

  }

  clear(table: any) {
    table.clear();
    this.search = '';
  }

  onGlobalFilter(event: Event, table: any) {
    const input = event.target as HTMLInputElement;
    table.filterGlobal(input.value, 'contains');
  }

  add(event: any) {
    this.addEvent.emit(event);
  }

  edit(data: any, event: any) {
    this.editEvent.emit({ data: data, event: event });
  }

  view(data: any, event: any) {
    this.viewEvent.emit({ data: data, event: event });
  }

  delete(data: any, event: any) {
    this.deleteEvent.emit({ data: data, event: event });
  }

  otherEvents(data: any, event: any, type: any) {
    this.event.emit({ data: data, event: event, type: type });
  }

  customSort(event: SortEvent) {
    console.log(event, 'event=====');

  }


}
