import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { TableComponent } from "../../../layout/component/table/table.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { RestService } from '../../../layout/service/rest.service';
import { take } from 'rxjs';
import { DialogService } from '../../../layout/component/commonDialog.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-email-update',
  imports: [TableComponent, DialogModule, ButtonModule, CommonModule],
  templateUrl: './email-update.component.html',
  styleUrl: './email-update.component.scss'
})
export class EmailUpdateComponent {
  emailData: any;

  transformedEmailGroups: any = [];
  cols = [
    { field: 'groupId', header: 'Group ID' },
    { field: 'emailList', header: 'Email List' },
    { field: 'Action', header: 'Action', type: ['view'] }
  ];

  // Fields for global filter
  globalFilterFields: any = ['groupId', 'formattedEmailList'];
  viewVisible!: boolean;
  group: any = {
    "MAILALERTGROUPID": "",
    "TOLIST": []
  };
  userRole: any = localStorage.getItem('userRole');
  userType: any = localStorage.getItem('userType');
  constructor(private cdr: ChangeDetectorRef, private dialogService: DialogService, private router: Router, private restApi: RestService) { }
  ngOnInit() {
    this.getprofileData()
    this.cols = this.userType === 'M'
      ? this.cols
      : this.cols.filter(col => col.field !== 'Action');

  }

  view(data: any, type: any) {
    console.log(type, data);
    if (type == 'Add') {
      this.router.navigate(['/pages/add_email_update'], { state: { data: data?.data, type: type } });
    } else {
      this.viewVisible = true;
      this.group = data?.data;
    }

  }
  getprofileData() {

    this.restApi.get('/utility/emailDetails-list').pipe(
      take(1),
    ).subscribe({
      next: (res) => {
        if (res) {
          this.emailData = res.map((group: any) => {
            console.log(group.TOLIST);
            let a = group.TOLIST?.split('\n').map((email: any) => email.trim()).join(', ')
            return {
              groupId: group.MAILALERTGROUPID,
              emailList: a,
              formattedEmailList: a.split(',').map((email: any) => email.trim()) // Convert the array to a comma-separated string
            };
          });
          console.log(this.transformedEmailGroups);

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


