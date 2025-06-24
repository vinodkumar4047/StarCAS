import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableComponent } from '../../../../layout/component/table/table.component';
import { FormBuilder } from '@angular/forms';
import { RestService } from '../../../../layout/service/rest.service';
import { take } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { Router } from '@angular/router';

@Component({
changeDetection:ChangeDetectionStrategy.OnPush,
  selector: 'app-unblock-user',
  imports: [CommonModule, ButtonModule, TableComponent],
  templateUrl: './unblock-user.component.html',
  styleUrl: './unblock-user.component.scss'
})
export class UnblockUserComponent {
  cols: any = [
    { field: 'INSTID', header: 'INST ID', },
    { field: 'userId', header: 'User ID', },
    { field: 'userName', header: 'Username', },
    { field: 'emailId', header: 'E-Mail ID', },
    { field: 'Action', header: 'Action', type: ['view'] },
  ]
   globalFilterFields: any = [
    "userId",
    "userName",
    "INSTID",
    "emailId",
  ];
  tableData: any = [];
  buttonlist:any = [ { label: 'UnBlock Authorized User', icon: 'pi pi-lock-open', type: 'UnBlockAuth', variant: 'outlined', severity: "primary" }]
  loading: boolean = false;
  pageType: any = 'unBlock';
  constructor(private router: Router,private location: Location, private fb: FormBuilder,private restApi : RestService,private cd:ChangeDetectorRef) { }
 ngOnInit(){
   this.getUserListData();
 }
  goBack() {
    this.location.back();
  }

     getUserListData() {
          
              this.restApi.get('/usermanagement/user/getAllUsersByStatus/UUB').pipe(
                take(1),
              ).subscribe({
                next: (res) => {
                  if (res) {
                    this.tableData = res.data.map((o: any) => {
                      o.INSTID = environment.adminInstId;
                      return o;
                    });
                    console.log('this.tableData data:', this.tableData)
                    
                     this.cd.detectChanges();
                  } else {
                    console.warn('No data received or request failed.');
                    
                  }
                },
                error: (err) => {
                  console.error('Subscription error:', err);
                  
          
                }
              });
        };
  editView(event: any, type: any,check:any) {
    this.router.navigate(['/pages/add_user'], { state: { data: event?.data, type: type ,check:check} });
  }
}
