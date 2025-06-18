import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableComponent } from "../../../../layout/component/table/table.component";
import { RestService } from '../../../../layout/service/rest.service';
import { take } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { Router } from '@angular/router';

@Component({
changeDetection:ChangeDetectionStrategy.OnPush,
  selector: 'app-block-user',
  imports: [CommonModule, ButtonModule, TableComponent],
  templateUrl: './block-user.component.html',
  styleUrl: './block-user.component.scss'
})
export class BlockUserComponent { 

  cols: any = [
    { field: 'INSTID', header: 'INST ID' },
    { field: 'userId', header: 'User ID' },
    { field: 'userName', header: 'Username' },
    { field: 'emailId', header: 'E-Mail ID' },
    {
      field: 'Action',
      header: 'Action',
      type: ['view']
    }
  ];
   globalFilterFields: any = [
    "userId",
    "userName",
    "INSTID",
    "emailId",
  ];
  tableData: any = [];
  loading: boolean = false;
  constructor(private location: Location, private fb: FormBuilder,private restApi : RestService,private cd:ChangeDetectorRef,private router: Router,) { }
ngOnInit() {
  this.getUserListData();
}

blockButton(event: any) {
  console.log(event);
  if (event.type === 'BlockAuth') {
    this.getUserListData();
  } 
}
  goBack() {
      this.location.back();
  }
    getUserListData() {
         this.loading = true;
            this.restApi.get(`/usermanagement/user/getAllUsersByStatus/UBA`).pipe(
              take(1),
            ).subscribe({
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
                }
              },
              error: (err) => {
                console.error('Subscription error:', err);
                this.loading = false;
        
              }
            });
      }
      editView(event: any, type: any,check:any) {
    this.router.navigate(['/pages/add_user'], { state: { data: event?.data, type: type ,check:check} });
  }
}
