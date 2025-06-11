import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { TableComponent } from '../../../../layout/component/table/table.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { Router } from '@angular/router';
import { RestService } from '../../../../layout/service/rest.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-auth-profile',
  imports: [CommonModule, TableComponent, ButtonModule, FormsModule, DialogModule],
  templateUrl: './auth-profile.component.html',
  styleUrl: './auth-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthProfileComponent {
  loading: boolean = false;
  profileData: any = [];

  header: any;
  routeData: any = history.state;
  tableData: any = [{ "PROFILE_ID": 14, "PROFILE_NAME": "TESTMAKER", "PROFILE_DESC": "Maker", "INSTID": "TEST", "LOGINIPADDRESSREQUIRED": "0", "LOGINEXPIRYDATEREQUIRED": "0", "LOGINRETRYCOUNTREQUIRED": "0", "LOGINBRANCHCODEREQUIRED": "0", "USERPASSWORDREPEATABLE": "0", "USERPASSWORDEXPIRYCHECK": "0", "USERTYPE": "M", "USER_CODE": "24", "AUTH_CODE": "AUTHORIZED", "AUTH_DATE": "10-07-2024", "AUTH_BY": "adminchecker", "ADDED_BY": "adminmaker", "ADDED_DATE": "10-07-2024", "REMARKS": "AUTHORIZED" },
  { "PROFILE_ID": 20, "PROFILE_NAME": "demoadmin2", "PROFILE_DESC": "checker", "INSTID": "TEST", "LOGINIPADDRESSREQUIRED": "0", "LOGINEXPIRYDATEREQUIRED": "0", "LOGINRETRYCOUNTREQUIRED": "0", "LOGINBRANCHCODEREQUIRED": "0", "USERPASSWORDREPEATABLE": "0", "USERPASSWORDEXPIRYCHECK": "0", "USERTYPE": "C", "USER_CODE": "24", "AUTH_CODE": "AUTHORIZED", "AUTH_DATE": "15-07-2024", "AUTH_BY": "adminchecker", "ADDED_BY": "adminmaker", "ADDED_DATE": "15-07-2024", "REMARKS": "AUTHORIZED" },
  { "PROFILE_ID": 18, "PROFILE_NAME": "CheckerDemo", "PROFILE_DESC": "checker", "INSTID": "TEST", "LOGINIPADDRESSREQUIRED": "0", "LOGINEXPIRYDATEREQUIRED": "0", "LOGINRETRYCOUNTREQUIRED": "0", "LOGINBRANCHCODEREQUIRED": "0", "USERPASSWORDREPEATABLE": "0", "USERPASSWORDEXPIRYCHECK": "0", "USERTYPE": "C", "USER_CODE": "24", "AUTH_CODE": "AUTHORIZED", "AUTH_DATE": "15-07-2024", "AUTH_BY": "adminchecker", "ADDED_BY": "adminmaker", "ADDED_DATE": "15-07-2024", "REMARKS": "AUTHORIZED" },
  ];
  globalFilterFields: any = [
    'INSTID',
    'PROFILE_ID',
    'PROFILE_NAME',
    'AUTH_DATE',
    'AUTH_CODE',
  ];

  cols = [
    { field: 'instId', header: 'INST ID' },
    { field: 'profileId', header: 'PROFILE_ID' },
    { field: 'profileName', header: 'PROFILE_NAME' },
    { field: 'profileDesc', header: 'PROFILE_DESC' },
    { field: 'addedDate', header: 'ADDED_DATE' },
    { field: 'AUTH_CODE', header: 'STATUS' },
    { field: 'Action', header: 'Action', type: [this.routeData.type == 'deleteAuth' ? 'delete' : 'view'] } // Optional, if you're using action buttons
  ];
  delete_visible: any;


  constructor(private location: Location, private router: Router, private restApi: RestService, private cdr: ChangeDetectorRef) { }
  ngOnInit() {
    console.log('Route data:', this.routeData);

    // this.header = 'View Profile Delete Authorization'
    this.header = this.routeData.type == 'deleteAuth' ? 'View Profile Delete Authorization' : 'View Profile Authorization'
    this.getprofileData();
  };

  goBack() {
    this.location.back();
  };

  getprofileData() {
    this.loading = true;
    this.restApi.get('/usermanagement/profile/getAllProfiles/PA').pipe(
      take(1),
    ).subscribe({
      next: (res) => {
        if (res) {
          this.profileData = res.data
          //   this.networkData = res.map((a: any) => {
          //     return {
          //       ...a,
          //       networkStatusText: a.networkStatus == 1 ? 'CONNECTED' : 'NOT CONNECTED',
          //     };
          //   }
          // );
          console.log('taskManager data:', res);
          this.cdr.detectChanges();
        } else {
          console.warn('No data received or request failed.');
        }
        setTimeout(() => {
          this.loading = false;
          this.cdr.detectChanges();
        }, 2000);
      },
      error: (err) => {
        console.error('Subscription error:', err);
        this.loading = false;

      }
    });
  };

}
