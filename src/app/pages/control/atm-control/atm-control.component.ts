import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ListboxModule } from 'primeng/listbox';
import { ButtonModule } from 'primeng/button';
import { RestService } from '../../../layout/service/rest.service';
import { take } from 'rxjs';
@Component({
  selector: 'app-atm-control',
  imports: [CommonModule, SelectButtonModule, FormsModule, SelectModule, ListboxModule, ButtonModule],
  templateUrl: './atm-control.component.html',
  styleUrl: './atm-control.component.scss'
})
export class ATMControlComponent {

  constructor(private rest: RestService) { };

  stateOptions: any[] = [{ label: 'Logical Group', value: 'logicalGroup' }, { label: 'ATM ID', value: 'atmId' }];
  typeOptions: any[] = [{ label: 'Downloads', value: 'downloads' }, { label: 'Commands', value: 'commands' }];
  value: string = 'logicalGroup';
  typevalue: String = 'downloads';
  OptValues: any = [];
  dwnOrCmdValue: any = null;
  dropdownValue: any = null;
  downloadValues = [
    { name: 'Load All', code: 'Load-All' },
    { name: 'Load State', code: 'Load-State' },
    { name: 'Load Screen', code: 'Load-Screen' },
    { name: 'Load Misc', code: 'Load-Misc' },
    { name: 'Load Misc-E', code: 'Load-Misc-E' },
    { name: 'Load Fit', code: 'Load-Fit' },
    { name: 'Load Key', code: 'Load-Key' },
    { name: 'Load Config ID', code: 'LoadConfig-Id' }
  ];

  commandValues = [
    { name: 'Go In Service', code: 'In-Service' },
    { name: 'Go Out Service', code: 'Out-Service' },
    { name: 'Get Config Info', code: 'Config-Info' },
    { name: 'Get Supply Count', code: 'Supply-Count' },
    { name: 'Ej Pulling', code: 'Ej-Pulling' }
  ];

  ngOnInit() {
    this.listApi('logicalGroup');
  }

  resetTop() {
    this.dropdownValue = null;
    this.reset();
  }

  reset() {
    this.dwnOrCmdValue = null;
  }

  listApi(type: any) {
    this.resetTop();
    console.log(type, 'type=============');

    const endpoint = type == 'atmId' ? 'atm-list' : 'logical-group-list'
    const url = `/control/v1/${endpoint}?instId=SCB`;
    this.rest.get(url).pipe(
      take(1),
    ).subscribe({
      next: (res) => {
        if (res) {
          console.log('Atm Control data:', res);
          this.OptValues = res;
        } else {
          console.warn('No data received or request failed.');
        }
      },
      error: (err) => {
        console.error('Subscription error:', err);
      }
    });

  }

  buttonCheck() {
    const url = `/control/v1/atmReset?condition=${this.dwnOrCmdValue}&${this.value == 'logicalGroup' ? 'logicalGroup' : 'atmId'}=${this.dropdownValue}`;
    this.rest.get(url).pipe(
      take(1),
    ).subscribe({
      next: (res) => {
        if (res) {
          console.log('Atm Control data:', res);
          alert('swd')
        } else {
          console.warn('No data received or request failed.');
        }
      },
      error: (err) => {
        console.error('Subscription error:', err);
      }
    });
  }
}
