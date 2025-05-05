import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ListboxModule } from 'primeng/listbox';
import { ButtonModule } from 'primeng/button';
import { RestService } from '../../../layout/service/rest.service';
import { catchError, of } from 'rxjs';
@Component({
  selector: 'app-atm-control',
  imports: [CommonModule, SelectButtonModule, FormsModule, SelectModule,ListboxModule,ButtonModule],
  templateUrl: './atm-control.component.html',
  styleUrl: './atm-control.component.scss'
})
export class ATMControlComponent {

  constructor( private rest:RestService){};
  
  stateOptions: any[] = [{ label: 'Logical Group', value: 'logicalGroup' }, { label: 'ATM ID', value: 'atmId' }];
  typeOptions: any[] = [{ label: 'Downloads', value: 'downloads' }, { label: 'Commands', value: 'commands' }];
  value: string = 'logicalGroup';
  typevalue: String = 'downloads';
  ATMValues = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

  LogicValues = [
    { name: 'INDIA', code: 'IND' },
    { name: 'FRANCE', code: 'FR' },
    { name: 'USA', code: 'USA' },
    { name: 'RUSSIA', code: 'RUS' },
    { name: 'GERMENY', code: 'GER' }
  ];
  dwnOrCmdValue: any = null;
  dropdownValue: any = null;
  downloadValues = [
    { name: 'Load All', code: '01' },
    { name: 'Load State', code: '02' },
    { name: 'Load Screen', code: '03' },
    { name: 'Load Misc', code: '04' },
    { name: 'Load Misc-E', code: '05' },
    { name: 'Load Fit', code: '06' },
    { name: 'Load Config ID', code: '07' }
  ];

  commandValues = [
    { name: 'Go In Service', code: '11' },
    { name: 'Go Out Service', code: '12' },
    { name: 'Get Config Info', code: '13' },
    { name: 'Get Supply Count', code: '14' },
  ];

  ngOnInit(){
    this.listApi('logicalGroup');
  }

  resetTop(){
    this.dropdownValue = null;
    this.reset();
  }

  reset(){
    this.dwnOrCmdValue = null;
  }

  atmControllerApi(){
    console.log(this.dwnOrCmdValue ,this.dropdownValue,'----dropdownValue' );
    
  }

  listApi(type:any){
    this.resetTop(); 
    console.log(type,'type=============');
    if(type == 'atmId'){
     
       const url = ''
        this.rest.get(url)
          .pipe(
            catchError(error => {
              console.error('Error fetching atmId data:', error);
            
              return of([]); 
            })
          )
          .subscribe((res: any[]) => {
            console.log(res,'res---');
          
          });
    }else{
      const url = ''
      this.rest.get(url)
        .pipe(
          catchError(error => {
            console.error('Error fetching logicalGroup data:', error);
          
            return of([]); 
          })
        )
        .subscribe((res: any[]) => {
          console.log(res,'res---');
        
        });
    }
   
  }
}
