import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { TableComponent } from "../../../layout/component/table/table.component";
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { Router } from '@angular/router';
import { RestService } from '../../../layout/service/rest.service';
import { take } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { DialogService } from '../../../layout/component/commonDialog.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-user-details',
  imports: [TableComponent, CommonModule, ButtonModule, DialogModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {

  rawData: any = [];
  userRole: any = localStorage.getItem('userRole');
  userType: any = localStorage.getItem('userType');
  globalFilterFields: any = [
    "userId",
    "userName",
    "INSTID",
    "addedBy",
    "addedDate",
    "profileName"
  ];
  cols: any = [
    { field: 'userName', header: 'USERNAME' },
    { field: 'userId', header: 'USER ID', sort: true, type: 'number' },
    { field: 'INSTID', header: 'INST ID', sort: true, type: 'string' },
    { field: 'profileName', header: 'PROFILE NAME', sort: true, type: 'string' },
    { field: 'addedDate', header: 'ADDED DATE', sort: true, type: 'date' },
    { field: 'addedBy', header: 'ADDED BY', sort: true, type: 'string' },
    { field: 'Action', header: 'Action', type: ['view', 'edit', 'delete'] },
  ]
  buttonsList: any = this.userType == 'SU' ? [
    { label: 'Add User', icon: 'pi pi-user-plus', type: 'addUser', variant: 'raised', severity: "primary" },
    { label: 'Authorize Block User', icon: 'pi pi-lock', type: 'blockUser', variant: 'outlined', severity: "warn" },
    { label: 'Authorize Unblock User', icon: 'pi pi-lock-open', type: 'unblockUser', variant: 'outlined', severity: "success" },
    { label: 'Authorize Reset Password', icon: 'pi pi-refresh', type: 'resetPassword', variant: 'outlined', severity: "primary" },
    { label: 'Add Authorized User', icon: 'pi pi-verified', type: 'auth', variant: 'outlined', severity: "info" },
    { label: 'Edit Authorized User', icon: 'pi pi-pencil', type: 'EditAuth', variant: 'outlined', severity: "primary" },
    { label: 'Delete Authorized User', icon: 'pi pi-user-minus', type: 'deleteAuth', variant: 'outlined', severity: "danger" }
  ] : this.userType == 'M' ? [
    { label: 'Add User', icon: 'pi pi-user-plus', type: 'addUser', variant: 'raised', severity: "primary" },
    // { label: 'Authorize Block User', icon: 'pi pi-lock', type: 'blockUser', variant: 'outlined', severity: "danger" },
    // { label: 'Authorize Unblock User', icon: 'pi pi-lock-open', type: 'unblockUser', variant: 'outlined', severity: "warn" },
    // { label: 'Authorize Reset Password', icon: 'pi pi-refresh', type: 'resetPassword', variant: 'outlined', severity: "primary" },
  ] : [
    { label: 'Authorize Block User', icon: 'pi pi-lock', type: 'blockUser', variant: 'outlined', severity: "warn" },
    { label: 'Authorize Unblock User', icon: 'pi pi-lock-open', type: 'unblockUser', variant: 'outlined', severity: "success" },
    { label: 'Authorize Reset Password', icon: 'pi pi-refresh', type: 'resetPassword', variant: 'outlined', severity: "primary" },
    { label: 'Add Authorized User', icon: 'pi pi-verified', type: 'auth', variant: 'outlined', severity: "info" },
    { label: 'Edit Authorized User', icon: 'pi pi-pencil', type: 'EditAuth', variant: 'outlined', severity: "primary" },
    { label: 'Delete Authorized User', icon: 'pi pi-user-minus', type: 'deleteAuth', variant: 'outlined', severity: "danger" }
  ];
  delete_visible: boolean = false;
  loading: boolean = false;
  deleteData: any
  constructor(private router: Router, private restApi: RestService, private cd: ChangeDetectorRef, private dialogService: DialogService) { };

  ngOnInit() {
    this.cols = this.userType === 'M' || this.userType == 'SU'
      ? this.cols
      : this.cols.filter((col: any) => col.field !== 'Action');
    this.getUserListData();
  }

  MultiButton(event: any) {

    if (event.type == 'addUser') {
      this.router.navigate(['/pages/add_user'], { state: { data: event?.data, type: event?.type } });
    } else if (event.type == 'blockUser') {
      this.router.navigate(['/pages/block_user'], { state: { data: event?.data, type: event?.type } });
    } else if (event.type == 'unblockUser') {
      this.router.navigate(['/pages/unblock_user'], { state: { data: event?.data, type: event?.type } });
    } else if (event.type == 'resetPassword') {
      this.router.navigate(['/pages/reset_user_password'], { state: { data: event?.data, type: event?.type } });
    } else if (event.type == 'auth' || event.type == 'deleteAuth' || event.type == 'EditAuth') {
      this.router.navigate(['/pages/auth-User'], { state: { data: event?.data, type: event?.type } });
    } else if (event.type == 'Block') {
      this.restApi.post(null, `/usermanagement/user/block/${event?.data?.userId}`).subscribe({
        next: (res) => {
          console.log('User blocked successfully:', res);
          if (res.respCode == '00') {
            this.getUserListData();
            this.cd.detectChanges();
            this.dialogService.show('Success', res?.respDesc, 'success');
          } else {
            this.dialogService.show('Oops!', res.respDesc, 'error');
          }
        },
        error: (err) => {
          console.error('Error blocking profile:', err);
          this.dialogService.show('Oops!', err.respDesc, 'error');
        }
      });
    } else if (event.type == 'UnBlock') {
      this.restApi.post(null, `/usermanagement/user/unblock/${event?.data?.userId}`).subscribe({
        next: (res) => {
          if (res.respCode == '00') {
            console.log('Profile Unblock successfully:', res);
            this.getUserListData();
            this.cd.detectChanges();
            this.dialogService.show('Success', res?.message, 'success');
          } else {
            this.dialogService.show('Oops!', res.message, 'error');
          }
        },
        error: (err) => {
          this.dialogService.show('Oops!', err.message, 'error');
        }
      });
    }
    else if (event.type == 'ResetPassword') {
      this.restApi.post(null, `/forgotPassword/initiateResetUserPassword/${event?.data?.userId}`).subscribe({
        next: (res) => {
          if (res.respCode == '00') {
            console.log('Profile reset successfully:', res);
            this.getUserListData();
            this.cd.detectChanges();
            this.dialogService.show('Success', res?.message, 'success');
          } else {
            this.dialogService.show('Oops!', res.message, 'error');
          }
        },
        error: (err) => {
          this.dialogService.show('Oops!', err.message, 'error');
        }
      });
    }
  }

  getUserListData() {

    this.restApi.get('/usermanagement/user/getAllUsersByStatus/U').pipe(
      take(1),
    ).subscribe({
      next: (res) => {
        if (res) {
          this.rawData = res.data.map((o: any) => {
            o.INSTID = environment.adminInstId;
            return o;
          });
          console.log('this.tableData data:', this.rawData)

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


  deletePopup(data: any) {
    this.deleteData = data.data.userId
    this.delete_visible = true
  }

  delateDataFunc(data: any) {
    console.log('Delete Profile Data:', data);
    this.restApi.delete(data, '/usermanagement/user/delete').subscribe({
      next: (res) => {
        console.log('Profile deleted successfully:', res);
        const msg = res?.message || 'Deleted successfully';

        this.getUserListData();
        this.cd.detectChanges();
        this.delete_visible = false; 
        this.dialogService.show('Success', msg, 'success');
      },
      error: (err) => {
        console.error('Error deleting profile:', err);
         this.dialogService.show('Oops!', err.message, 'error');
      }
    });
  }

  editView(event: any, type: any) {
    this.router.navigate(['/pages/add_user'], { state: { data: event?.data, type: type } });
  }

}
