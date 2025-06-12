import { CommonModule, Location } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { TableComponent } from '../../../../layout/component/table/table.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { take } from 'rxjs';
import { RestService } from '../../../../layout/service/rest.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-auth-user',
  imports: [CommonModule, TableComponent, FormsModule, ButtonModule, DialogModule],
  templateUrl: './auth-user.component.html',
  styleUrl: './auth-user.component.scss'
})
export class AuthUserComponent {
  header: any;
  routeData: any = history.state;
  tableData: any = [];
  globalFilterFields: any = [
    "userId",
    "userName",
    "INSTID",
    "addedBy",
    "addedDate",
    "profileName"
  ];
  cols = [
    { field: 'userName', header: 'USERNAME' },
    { field: 'userId', header: 'USER ID', sort: true, type: 'number' },
    { field: 'INSTID', header: 'INST ID', sort: true, type: 'string' },
    { field: 'profileName', header: 'PROFILE NAME', sort: true, type: 'string' },
    { field: 'addedDate', header: 'ADDED DATE', sort: true, type: 'date' },
    { field: 'addedBy', header: 'ADDED BY', sort: true, type: 'string' },
    { field: 'Action', header: 'Action', type: 'view' },
  ];
  edit_visible: boolean = false;
  delete_visible: any;
  loading: boolean = false;


  constructor(private location: Location, private restApi: RestService, public cd:ChangeDetectorRef) { }
  ngOnInit() {
    this.header = this.routeData.type == 'auth' ? 'View User Authorization' : this.routeData.type == 'EditAuth'? 'View User Edit Authorization': 'View User Delete Authorization'
    this.getUserListData();
  }
  getUserListData() {
    this.loading = true;
    this.restApi.get(`/usermanagement/user/getAllUsersByStatus/${this.routeData.type == 'auth' ?'UA':this.routeData.type == 'EditAuth'?'UE' :'UD'}`).subscribe({
      next: (res) => {
        if (res) {
          this.tableData = res.data.map((o: any) => {
            o.INSTID = environment.adminInstId;
            return o;
          });
          console.log('this.tableData data:', this.tableData)
           this.loading = false;
           this.cd.detectChanges();
        } else {
          console.warn('No data received or request failed.');
          this.loading = false;
          this.cd.detectChanges();
        }
      },
      error: (err) => {
        console.error('Subscription error:', err);
        this.loading = false;
        this.cd.detectChanges();

      }
    });
  };
  goBack() {
    this.location.back();
  }
}
