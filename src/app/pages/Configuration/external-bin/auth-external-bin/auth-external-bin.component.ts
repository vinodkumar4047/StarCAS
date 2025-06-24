import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableComponent } from '../../../../layout/component/table/table.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { RestService } from '../../../../layout/service/rest.service';
import { DialogService } from '../../../../layout/component/commonDialog.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-auth-external-bin',
  imports: [CommonModule, ButtonModule, TableComponent,DialogModule,FormsModule],
  templateUrl: './auth-external-bin.component.html',
  styleUrl: './auth-external-bin.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AuthExternalBinComponent {
 header: any;
  routeData:any = history.state;
  tableData:any = [];
 globalFilterFields: any = [
    'instId',
    'bin',
    'description',
    'recordId',
  ];
  
  cols = [
    { field: 'instId', header: 'INST ID' },
  { field: 'bin', header: 'BIN' },
  { field: 'description', header: 'Description' },
  { field: 'recordId', header: 'Record ID' },
  { field: 'Action', header: 'Action' ,type:[this.routeData.type == 'auth'?'view':'delete']},
  ];
edit_visible: boolean = false;
 delete_visible: any;
loading: boolean = false;


  constructor(private location: Location,private restApi: RestService, private cdr: ChangeDetectorRef,private dialogService:DialogService) { }
  ngOnInit(){
    this.header = this.routeData.type == 'auth'?'View External BIN Authorization':'View External BIN Delete Authorization';
    this. getList();
  }
  
    getList() {
      this.restApi.get(`/configuration/external-bin/pendingForAuth/${this.routeData.type == 'auth'? 'U':this.routeData.type == 'EditAuth'? 'E':'D'}`).pipe(
        take(1)
      ).subscribe({
        next: (res) => {
          if (res) {
            this.tableData = res;
            console.log(res,'res----');
            
          } else {
            console.warn('No data received or request failed.');
          }
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Subscription error:', err);
          this.loading = false;
          this.cdr.detectChanges();
        }
      });
    }
    goBack() {
    this.location.back();
  }
}
