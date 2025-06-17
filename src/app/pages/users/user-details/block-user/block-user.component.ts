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
  pageType: any = 'Block'
  cols: any = []
   globalFilterFields: any = [
    "userId",
    "userName",
    "INSTID",
    "emailId",
  ];
  tableData: any = [];
  loading: boolean = false;
   ;
    buttonlist:any = [ { label: 'Block Authorized User', icon: 'pi pi-lock', type: 'BlockAuth', variant: 'outlined', severity: "primary" }]
  constructor(private location: Location, private fb: FormBuilder,private restApi : RestService,private cd:ChangeDetectorRef,private router: Router,) { }
ngOnInit() {
  this.updateColumns();
  this.getUserListData(this.pageType);
}

blockButton(event: any) {
  console.log(event);
  
  if (event.type === 'BlockAuth') {
    this.pageType = 'BlockAuth';
    this.updateColumns(); // Update columns
    this.getUserListData(this.pageType);
     this.buttonlist = []
  } else if (event.type === 'Block'){
    this.restApi.post(null, `/usermanagement/user/block/${event?.data?.userId}`).subscribe({
      next: (res) => {
        console.log('Profile blocked successfully:', res);
        this.getUserListData(this.pageType);
        this.cd.detectChanges();
      },
      error: (err) => {
        console.error('Error blocking profile:', err);
      }
    });
  }
}
updateColumns() {
  this.cols = [
    { field: 'INSTID', header: 'INST ID' },
    { field: 'userId', header: 'User ID' },
    { field: 'userName', header: 'Username' },
    { field: 'emailId', header: 'E-Mail ID' },
    {
      field: 'Action',
      header: 'Action',
      type: this.pageType === 'Block' ? ['Block'] : ['view']
    }
  ];
}

  goBack() {
    if( this.pageType == 'BlockAuth'){
      this.pageType = 'Block';
           this.buttonlist = [ { label: 'Block Authorized User', icon: 'pi pi-lock', type: 'BlockAuth', variant: 'outlined', severity: "primary" }]
       this.updateColumns(); // Update columns
    this.getUserListData(this.pageType);
    }else{
      this.location.back();
    }
    
  }
    getUserListData(type:any) {
         this.loading = true;
            this.restApi.get(`/usermanagement/user/getAllUsersByStatus/${type == 'BlockAuth'? 'UBA': 'U'}`).pipe(
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
