import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { SpeedDial, SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { RadioButtonModule } from 'primeng/radiobutton';
import { NgIf } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-transaction-search',
  imports: [CalendarModule, FormsModule, ToastModule, SpeedDialModule,
    InputTextModule, NgIf, RadioButtonModule],
  templateUrl: './transaction-search.component.html',
  styleUrl: './transaction-search.component.scss',
  providers: [MessageService]
})
export class TransactionSearchComponent {
  date: Date | undefined;
  date2: Date | undefined;
  items: MenuItem[] = [];
  showRadioOptions = false;
  isSpeedDialOpen = false;
  ingredient!: string;
  constructor(private messageService: MessageService) { }
  ngOnInit() {
  }
  toggleRadioContent() {
    this.isSpeedDialOpen = !this.isSpeedDialOpen;
    this.showRadioOptions = this.isSpeedDialOpen;
  }
}
