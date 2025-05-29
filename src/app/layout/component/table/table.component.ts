import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Checkbox } from 'primeng/checkbox';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
changeDetection:ChangeDetectionStrategy.OnPush,
  selector: 'app-table',
  imports: [
    TooltipModule,
    TableModule,
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    ButtonModule,
    Checkbox,
    ProgressSpinnerModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',

})
export class TableComponent {
  @Input() paginator: boolean = true;
  @Input() loading: boolean = false;
  @Input() componentHeader: any = '';
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
  @Output() rowSelected = new EventEmitter<any>();
  search: any = '';
  constructor() { }

  ngOnInit() {
    console.log('loading', this.loading);

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


  customSort(event: any) {
    const { field, order } = event.multiSortMeta[0];
    console.log(field, order, event);

    // Get column metadata (type, etc.)
    const column = this.cols.find((col: any) => col.field === field);
    const columnType = column?.type;

    // Sort by the column's field
    this.tableData.sort((a: any, b: any) => {
      const valA = a[field];
      const valB = b[field];

      // Handle string sorting
      if (columnType === 'string') {
        const comparison = valA.localeCompare(valB);
        return order === 1 ? comparison : -comparison;
      }

      // Handle numeric sorting
      if (columnType === 'number') {
        return order === 1 ? valA - valB : valB - valA;
      }

      // Handle date sorting
      if (columnType === 'date') {
        const dateA = new Date(valA);
        const dateB = new Date(valB);
        return order === 1 ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
      }

      // Fallback (non-sortable)
      return 0;
    });
  }


  emitRowSelection(data: any, event: any) {
    console.log({ data: data, event: event }, '{ data: data, event: event }');
    this.rowSelected.emit({ data: data, event: event });
  }

}
