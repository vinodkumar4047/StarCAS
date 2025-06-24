import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableComponent } from "../../../../layout/component/table/table.component";
import { DialogModule } from 'primeng/dialog';
import { take } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { RestService } from '../../../../layout/service/rest.service';
import { DialogService } from '../../../../layout/component/commonDialog.service';
@Component({
  selector: 'app-auth-branch',
  imports: [CommonModule, ButtonModule, TableComponent, DialogModule, FormsModule],
  templateUrl: './auth-branch.component.html',
  styleUrl: './auth-branch.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthBranchComponent {

  branchData: any
  loading: boolean = true;
  header: any;
  routeData: any = history.state;
  globalFilterFields = ['INST_ID', 'BRANCH_ID', 'BRANCH_MAP_CODE', 'BRANCH_NAME'];
  cols = [
    { field: 'institutionId', header: 'INST ID' },
    { field: 'branchCode', header: 'BRANCH ID', },
    { field: 'branchMapCode', header: 'BRANCH MAP CODE', },
    { field: 'branchName', header: 'BRANCH NAME', },
    { field: 'Action', header: 'Action', type: [this.routeData.type == 'auth' ? 'view' : 'delete'] } // Optional, if you're using action buttons
  ];
  edit_visible: boolean = false;
  Edit_data: any = {
    INST_ID: '',
    BRANCH_ID: '',
    BRANCH_MAP_CODE: '',
    BRANCH_NAME: ''
  };
  delete_visible: any;


  constructor(private dialogService: DialogService, private location: Location, private cdr: ChangeDetectorRef, private restApi: RestService,) { }
  ngOnInit() {
    this.getAuthBranchdata()
    this.header = this.routeData.type == 'deleteAuth' ? 'View Branch Delete Authorization' : 'View Branch Authorization'
    console.log(this.routeData);

  }
  editFunction(customer: any, type: any) {
    this.Edit_data = { ...customer.data };
    console.log(this.Edit_data);

    console.log(this.Edit_data.institutionId);

    this.edit_visible = true;
  }
  goBack() {
    this.location.back();
  }
  getAuthBranchdata() {
    this.loading = true;
    let requestType = 'U'; // default
    if (this.routeData.type === 'deleteAuth') {
      requestType = 'D';
    } else if (this.routeData.type === 'edit') {
      requestType = 'E'; // Assuming 'PE' is for edit — replace with correct one if needed
    }
    // const instId = localStorage.getItem('instId')
    const instId = 'CLFSC'; // Static value for now


    this.restApi.get(`/configuration/branch/branchToAuthorize/${requestType}`, {
      params: new HttpParams().set('instId', instId)
    } as { responseType: 'text', params: HttpParams }).pipe(
      take(1)
    ).subscribe({
      next: (res) => {
        if (res) {
          this.branchData = res;
          console.log('taskManager data:', this.branchData);
        } else {
          console.warn('No data received or request failed.');
        } setTimeout(() => {
          this.loading = false;
          this.cdr.detectChanges();
        }, 2000);
      },
      error: (err) => {
        console.error('Subscription error:', err);
        this.loading = false;
        this.cdr.detectChanges();

      }
    });
  }
  Authorized(action: any): void {

    if (this.routeData.type === 'auth' || this.routeData === 'deleteAuth' || this.routeData === 'edit') {
      console.log('kamal', this.routeData);

      if (action === 'authorize') {
        console.log('Calling Authorize API...');
        this.restApi.post(null, `/configuration/branch/authorize/${this.Edit_data.branchCode}`).subscribe({
          next: (res) => {
            console.log('Profile added successfully:', res);
            this.dialogService.show('Success', res?.message, 'success', 3000); // ✅ Success dialog
            this.goBack();
          },
          error: (err) => {
            console.error('Error adding profile:', err)
            this.dialogService.show('Oops!', err.message, 'error', 3000); // ✅ Error dialog
          }
        });


      } else if (action === 'reject') {
        console.log('Calling Reject API...');
        this.restApi.post(null, `/configuration/branch/deAuthorize/${this.Edit_data.branchCode}`).subscribe({
          next: (res) => {
            console.log('Profile added successfully:', res);
            this.dialogService.show('Success', res?.message, 'success', 3000); // ✅ Success dialog
            this.goBack();
          },
          error: (err) => {
            console.error('Error adding profile:', err)
            this.dialogService.show('Oops!', err.message, 'error', 3000); // ✅ Error dialog
          }
        });

      } else if (action === 'deleteProfileAuth') {
        console.log('Calling Delete Profile Authorization API...');
        this.restApi.delete(this.Edit_data.branchCode, '/configuration/branch/delete/authorize/').subscribe({
          next: (res) => {
            console.log('Profile delete authorization added successfully:', res);
            this.dialogService.show('Success', res?.message, 'success', 3000); // ✅ Success dialog
            this.goBack();
          },
          error: (err) => {
            console.error('Error adding profile delete authorization:', err)
            this.dialogService.show('Oops!', err.message, 'error', 3000); // ✅ Error dialog
          }
        });
      } else if (action === 'deleteProfileDeAuth') {
        console.log('Calling Delete Profile De-Authorization API...');
        this.restApi.delete(this.Edit_data.branchCode, '/usermanagement/profile/deleteDeAuth/').subscribe({
          next: (res) => {
            console.log('Profile delete de-authorization added successfully:', res);
            this.dialogService.show('Success', res?.message, 'success', 3000); // ✅ Success dialog
            this.goBack();
          },
          error: (err) => {
            console.error('Error adding profile delete de-authorization:', err)
            this.dialogService.show('Oops!', err.message, 'error', 3000); // ✅ Error dialog
          }
        });
      } else if (action === 'editProfileAuth') {
        console.log('Calling Delete Profile De-Authorization API...');
        this.restApi.post(null, `/configuration/branch/edit/authorize/${this.Edit_data.branchCode}`).subscribe({
          next: (res) => {
            console.log('Profile delete de-authorization added successfully:', res);
            this.dialogService.show('Success', res?.message, 'success', 3000); // ✅ Success dialog
            this.goBack();
          },
          error: (err) => {
            console.error('Error adding profile delete de-authorization:', err)
            this.dialogService.show('Oops!', err.message, 'error', 3000); // ✅ Error dialog
          }
        });
      } else if (action === 'editProfileDeAuth') {
        console.log('Calling Delete Profile De-Authorization API...');
        this.restApi.post(null, `/configuration/branch/edit/deAuthorize/${this.Edit_data.branchCode}`).subscribe({
          next: (res) => {
            console.log('Profile delete de-authorization added successfully:', res);
            this.dialogService.show('Success', res?.message, 'success', 3000); // ✅ Success dialog
            this.goBack();
          },
          error: (err) => {
            console.error('Error adding profile delete de-authorization:', err)
            this.dialogService.show('Oops!', err.message, 'error', 3000); // ✅ Error dialog
          }
        });
      }
    }
  }

}
