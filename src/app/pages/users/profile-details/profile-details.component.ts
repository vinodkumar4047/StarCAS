import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TooltipModule } from 'primeng/tooltip';
import { TableComponent } from '../../../layout/component/table/table.component';
import { Router } from '@angular/router';
import { RestService } from '../../../layout/service/rest.service';
import { take } from 'rxjs';
import { DialogService } from '../../../layout/component/commonDialog.service';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-profile-details',
  imports: [TooltipModule,
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    ButtonModule,
    TableComponent,
    DialogModule,],
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.scss'
})
export class ProfileDetailsComponent {
  loading: boolean = false;
  profileData: any = [];
  delete_visible: any;
  constructor(private router: Router, private dialogService: DialogService, private restApi: RestService, private cdr: ChangeDetectorRef) { };

  globalFilterFields: any = [
    'INSTID',
    'PROFILE_ID',
    'PROFILE_NAME',
    'AUTH_DATE',
    'AUTH_CODE',
  ];

  atmData = [{ "PROFILE_ID": 14, "PROFILE_NAME": "TESTMAKER", "PROFILE_DESC": "Maker", "INSTID": "TEST", "LOGINIPADDRESSREQUIRED": "0", "LOGINEXPIRYDATEREQUIRED": "0", "LOGINRETRYCOUNTREQUIRED": "0", "LOGINBRANCHCODEREQUIRED": "0", "USERPASSWORDREPEATABLE": "0", "USERPASSWORDEXPIRYCHECK": "0", "USERTYPE": "M", "USER_CODE": "24", "AUTH_CODE": "AUTHORIZED", "AUTH_DATE": "10-07-2024", "AUTH_BY": "adminchecker", "ADDED_BY": "adminmaker", "ADDED_DATE": "10-07-2024", "REMARKS": "AUTHORIZED" },
  { "PROFILE_ID": 20, "PROFILE_NAME": "demoadmin2", "PROFILE_DESC": "checker", "INSTID": "TEST", "LOGINIPADDRESSREQUIRED": "0", "LOGINEXPIRYDATEREQUIRED": "0", "LOGINRETRYCOUNTREQUIRED": "0", "LOGINBRANCHCODEREQUIRED": "0", "USERPASSWORDREPEATABLE": "0", "USERPASSWORDEXPIRYCHECK": "0", "USERTYPE": "C", "USER_CODE": "24", "AUTH_CODE": "AUTHORIZED", "AUTH_DATE": "15-07-2024", "AUTH_BY": "adminchecker", "ADDED_BY": "adminmaker", "ADDED_DATE": "15-07-2024", "REMARKS": "AUTHORIZED" },
  { "PROFILE_ID": 18, "PROFILE_NAME": "CheckerDemo", "PROFILE_DESC": "checker", "INSTID": "TEST", "LOGINIPADDRESSREQUIRED": "0", "LOGINEXPIRYDATEREQUIRED": "0", "LOGINRETRYCOUNTREQUIRED": "0", "LOGINBRANCHCODEREQUIRED": "0", "USERPASSWORDREPEATABLE": "0", "USERPASSWORDEXPIRYCHECK": "0", "USERTYPE": "C", "USER_CODE": "24", "AUTH_CODE": "AUTHORIZED", "AUTH_DATE": "15-07-2024", "AUTH_BY": "adminchecker", "ADDED_BY": "adminmaker", "ADDED_DATE": "15-07-2024", "REMARKS": "AUTHORIZED" },
  { "PROFILE_ID": 17, "PROFILE_NAME": "MakerDemo", "PROFILE_DESC": "Maker", "INSTID": "TEST", "LOGINIPADDRESSREQUIRED": "0", "LOGINEXPIRYDATEREQUIRED": "0", "LOGINRETRYCOUNTREQUIRED": "0", "LOGINBRANCHCODEREQUIRED": "0", "USERPASSWORDREPEATABLE": "0", "USERPASSWORDEXPIRYCHECK": "0", "USERTYPE": "M", "USER_CODE": "24", "AUTH_CODE": "AUTHORIZED", "AUTH_DATE": "15-07-2024", "AUTH_BY": "adminchecker", "ADDED_BY": "adminmaker", "ADDED_DATE": "15-07-2024", "REMARKS": "AUTHORIZED" },
  { "PROFILE_ID": 16, "PROFILE_NAME": "TESTCHECKER", "PROFILE_DESC": "checker", "INSTID": "TEST", "LOGINIPADDRESSREQUIRED": "0", "LOGINEXPIRYDATEREQUIRED": "0", "LOGINRETRYCOUNTREQUIRED": "0", "LOGINBRANCHCODEREQUIRED": "0", "USERPASSWORDREPEATABLE": "0", "USERPASSWORDEXPIRYCHECK": "0", "USERTYPE": "C", "USER_CODE": "24", "AUTH_CODE": "AUTHORIZED", "AUTH_DATE": "11-07-2024", "AUTH_BY": "adminchecker", "ADDED_BY": "adminmaker", "ADDED_DATE": "11-07-2024", "REMARKS": "AUTHORIZED" },
  { "PROFILE_ID": 19, "PROFILE_NAME": "demoadmin1", "PROFILE_DESC": "Maker", "INSTID": "TEST", "LOGINIPADDRESSREQUIRED": "0", "LOGINEXPIRYDATEREQUIRED": "0", "LOGINRETRYCOUNTREQUIRED": "0", "LOGINBRANCHCODEREQUIRED": "0", "USERPASSWORDREPEATABLE": "0", "USERPASSWORDEXPIRYCHECK": "0", "USERTYPE": "M", "USER_CODE": "24", "AUTH_CODE": "AUTHORIZED", "AUTH_DATE": "15-07-2024", "AUTH_BY": "adminchecker", "ADDED_BY": "adminmaker", "ADDED_DATE": "15-07-2024", "REMARKS": "AUTHORIZED" }]


  cols = [
    { field: 'instId', header: 'INST ID' },
    { field: 'profileId', header: 'PROFILE_ID' },
    { field: 'profileName', header: 'PROFILE_NAME' },
    { field: 'profileDesc', header: 'PROFILE_DESC' },
    { field: 'addedDate', header: 'ADDED_DATE' },
    { field: 'authCode', header: 'STATUS' },
    { field: 'Action', header: 'Action', type: ['view', 'edit', 'delete'] },
  ];

  userRole: any = localStorage.getItem('userRole');
  buttonsList: any = this.userRole == 'SU1' || this.userRole == 'SU2' ? [
    { label: 'Authorize Delete Profile', icon: 'pi pi-user-minus', type: 'deleteAuth', variant: 'outlined', severity: "danger" },
    { label: 'Authorize Profile', icon: 'pi pi-verified', type: 'auth', variant: 'outlined', severity: "info" },
    { label: 'Edit Authorize Profile', icon: 'pi pi-pencil', type: 'edit', variant: 'outlined', severity: "arn" }

  ]
    : [
      { label: 'Authorize Delete Profile', icon: 'pi pi-user-minus', type: 'deleteAuth', variant: 'outlined', severity: "danger" },
    ]

  ngOnInit() {
    this.cols = this.userRole === 'maker' || this.userRole === 'SU1' || this.userRole === 'SU2'
      ? this.cols
      : this.cols.filter(col => col.field !== 'Action');
    this.getprofileData()
  }
  addOrEdit(event: any, type: any) {
    this.router.navigate(['/pages/user_profile'], { state: { data: event?.data, type: type } });
  };

  // deleteProfile(data: any) {
  //   console.log('Delete Profile Data:', data);
  //   this.restApi.delete(data, '/usermanagement/profile/delete').subscribe({
  //     next: (res) => {
  //       console.log('Profile added successfully:', res);
  //       const msg = res?.message || 'Saved successfully';
  //       this.toast.showCenterToast('Success', msg);
  //       this.getprofileData(); // Refresh the profile data after deletion
  //       this.cdr.detectChanges();
  //       this.delete_visible = false; // Close the delete confirmation dialog
  //     },
  //     error: (err) => console.error('Error adding profile:', err)
  //   });
  // }
  deleteProfile(data: any) {
    console.log('Delete Profile Data:', data);
    this.restApi.delete(data, '/usermanagement/profile/delete').subscribe({
      next: (res) => {
        console.log('Profile deleted successfully:', res);
        const msg = res?.message || 'Deleted successfully';
        this.dialogService.show('Success', res?.message, 'success');
        this.getprofileData(); // ✅ Refresh table/list
        this.cdr.detectChanges();
        this.delete_visible = false; // ✅ Close dialog
      },
      error: (err) => {
        console.error('Error deleting profile:', err);
        this.dialogService.show('Oops!', err.message, 'error');

        // this.toast.showError('Error', err?.error?.message || 'Failed to delete profile'); // ✅ Error toast
      }
    });
  }

  deleteData: any
  example(data: any) {
    this.deleteData = data.data.profileId
    this.delete_visible = true
  }
  authFunc(event: any) {
    console.log(event);
    this.router.navigate(['/pages/auth-profile'], { state: { type: event?.type } });
  }

  getprofileData() {
    this.loading = true;
    this.restApi.get('/usermanagement/profile/getAllProfiles/P').pipe(
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
