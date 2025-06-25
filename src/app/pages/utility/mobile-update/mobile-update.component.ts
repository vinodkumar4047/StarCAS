import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { TableComponent } from '../../../layout/component/table/table.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RestService } from '../../../layout/service/rest.service';
import { DialogService } from '../../../layout/component/commonDialog.service';
import { take } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-mobile-update',
  imports: [TableComponent, DialogModule, ButtonModule, CommonModule],
  templateUrl: './mobile-update.component.html',
  styleUrl: './mobile-update.component.scss'
})
export class MobileUpdateComponent {
  mobileData: any
  transformedmobileGroups: any = [];
  cols = [
    { field: 'groupId', header: 'Group ID' },
    { field: 'formattedmobileList', header: 'mobile List' },
    { field: 'Action', header: 'Action', type: ['view'] }
  ];

  // Fields for global filter
  globalFilterFields: any = ['groupId', 'formattedmobileList'];
  viewVisible!: boolean;
  group: any = {
    "groupId": "",
    "mobileList": []
  };
  userRole: any = localStorage.getItem('userRole');
  userType: any = localStorage.getItem('userType');
  constructor(private router: Router, private cdr: ChangeDetectorRef, private dialogService: DialogService, private restApi: RestService) { }

  ngOnInit() {
    this.getprofileData()
    this.cols = this.userType === 'M'
      ? this.cols
      : this.cols.filter(col => col.field !== 'Action');
    // this.transformedmobileGroups = this.mobileGroups.map(group => {
    //   return {
    //     groupId: group.groupId,
    //     mobileList: group.mobileList,
    //     formattedmobileList: group.mobileList.join(' , ')  // Convert the array to a comma-separated string
    //   };
    // });
  }

  view(data: any, type: any) {
    console.log(type, data);
    if (type == 'Add') {
      this.router.navigate(['/pages/add_mobile_update'], { state: { data: data?.data, type: type } });
    } else {
      this.viewVisible = true;
      this.group = data?.data;
    }
  }
  getprofileData() {

    this.restApi.get('/utility/mobileDetails-list').pipe(
      take(1),
    ).subscribe({
      next: (res) => {
        if (res) {
          this.mobileData = res.map((group: any) => {
            console.log(group.TOLIST);
            let a = group.MOBILELIST?.split('\n').map((email: any) => email.trim()).join(', ')
            return {
              groupId: group.DEVICEID,
              mobileList: a,
              formattedmobileList: a.split(',').map((email: any) => email.trim()) // Convert the array to a comma-separated string
            };
          });

          this.cdr.detectChanges();

          console.log('taskManager data:', res);
          this.cdr.detectChanges();
        } else {
          console.warn('No data received or request failed.');
        };
      },
      error: (err) => {
        console.error('Subscription error:', err);


      }
    });
  };
}
