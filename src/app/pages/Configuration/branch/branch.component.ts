import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TableModule, Table } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableComponent } from '../../../layout/component/table/table.component';
import { Router } from '@angular/router';
import { MenuService } from '../../../layout/service/menu.service';
import { RestService } from '../../../layout/service/rest.service';
import { HttpParams } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogService } from '../../../layout/component/commonDialog.service';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-branch',
  imports: [TooltipModule,
    TableModule,  // Only import TableModule
    CommonModule,
    RouterModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    InputTextModule,
    DialogModule,
    ButtonModule, TableComponent, ReactiveFormsModule,
    DialogModule,],
  templateUrl: './branch.component.html',
  styleUrl: './branch.component.scss'
})
export class BranchComponent {
  branchForm!: FormGroup;
  branchData: any
  loading: boolean = true;
  edit_visible: boolean = false;
  showViewData: any = null;
  Edit_data: any = {
    instId: '',
    branchCode: '',
    branchMapCode: '',
    branchName: ''
  };
  ADDvisible: boolean = false;
  tpCheck: any;


  globalFilterFields: any = [
    'instId',
    'branchCode',
    'branchMapCode',
    'branchName',
  ];
  delete_visible: any;
  buttonsList: any = [
    { label: 'Authorize Branch', icon: 'pi pi-verified', type: 'auth', variant: 'outlined', severity: "info" },
    { label: 'Edit Authorize Profile', icon: 'pi pi-pencil', type: 'edit', variant: 'outlined', severity: "arn" },
    { label: 'Authorize Delete Branch', icon: 'pi pi-user-minus', type: 'deleteAuth', variant: 'outlined', severity: "danger" },
  ]

  userRole: string = localStorage.getItem('userRole') || '';
  userType: any = localStorage.getItem('userType');
  permission: any[] = [];
  filteredButtons: any[] = [];
  canAddBranch: boolean = false;

  cols: any[] = [
    { field: 'instId', header: 'INST ID' },
    { field: 'branchCode', header: 'Branch ID' },
    { field: 'branchMapCode', header: 'Branch Map Code' },
    { field: 'branchName', header: 'Branch Name' },
    { field: 'Action', header: 'Action', type: ['view', 'edit', 'delete'] },
  ];
  BrType: any;

  constructor(private location: Location, private dialogService: DialogService, private fb: FormBuilder, private cdr: ChangeDetectorRef, private restApi: RestService, private router: Router, private menuService: MenuService) {

    this.branchForm = this.fb.group({
      instId: [{ value: 'CLFSC', disabled: true }],
      branchCode: ['', Validators.required],
      branchMapCode: ['', Validators.required],
      branchName: ['', Validators.required]
    });


  }
  goBack(): void {
    this.location.back();
  }
  ngOnInit() {
    this.getBranchData()
    // this.permission = this.menuService.getMenuitem();
    // const perms = this.getCheckedPermissions('Branch');

    const actionsMap: any = {
      'View Branch': 'view',
      'Edit Branch': 'edit',
      'Delete Branch': 'delete'
    };

    const buttonsMap: any = {
      'Authorize Branch': { label: 'Authorize Branch', icon: 'pi pi-verified', type: 'auth', variant: 'outlined', severity: 'info' },
      'Delete Authorize Branch': { label: 'Authorize Delete Branch', icon: 'pi pi-user-minus', type: 'deleteAuth', variant: 'outlined', severity: 'danger' }
    };

    this.cols = this.userType === 'M'
      ? this.cols
      : this.cols.filter(col => col.field !== 'Action');
  }


  addOrEdit(data1?: any, type?: any) {
    this.ADDvisible = !this.ADDvisible
    console.log('this.branchForm', type);
    this.BrType = type;
  }
  authFunc(event: any) {
    this.router.navigate(['/pages/auth-branch'], { state: { type: event.type } });
  }

  editFunction(customer: any, type: any) {
    this.Edit_data = { ...customer.data };
    this.edit_visible = true;
    this.tpCheck = type == 'view' ? true : false;
    this.BrType = type;
    console.log(this.BrType);

  }
  deleteItem() {
    console.log('Item deleted!');
    this.delete_visible = true;
  }

  getBranchData() {

    // const instId = localStorage.getItem('instId')
    const instId = 'CLFSC'; // Static value for now


    this.restApi.get('/configuration/branch/list', {
      params: new HttpParams().set('instId', instId)
    } as { responseType: 'text', params: HttpParams }).pipe(
      take(1)
    ).subscribe({
      next: (res) => {
        if (res) {
          this.branchData = res;
          this.cdr.detectChanges();
          console.log('taskManager data:', this.branchData);
        } else {
          console.warn('No data received or request failed.');
        }
      },
      error: (err) => {
        console.error('Subscription error:', err);
        this.cdr.detectChanges();

      }
    });
  };
  onSave() {
    console.log('save.................');

    // if (this.branchForm.invalid) {
    //   this.branchForm.markAllAsTouched();
    //   return;
    // }

    const formData = this.branchForm.getRawValue(); // includes disabled fields
    const url = '/configuration/branch/add';

    if (this.BrType === 'add') {
      console.log('Adding branch:', formData);
      this.restApi.post(formData, url, 'text').subscribe({
        next: (res) => {
          if (res) {
            this.dialogService.show('Success', res, 'success', 3000); // ✅ Success dialog
            this.ADDvisible = false;
            this.resetBranchForm();
            this.getBranchData()
            this.cdr.detectChanges();
          } else {
            console.log(res);

            this.dialogService.show('Error', res || 'Failed to add branch', 'error');
            this.ADDvisible = false;
            this.resetBranchForm();
            this.getBranchData();
            this.cdr.detectChanges();
          }
        },
        error: (err) => {
          this.dialogService.show('Oops!', err, 'error', 3000); // ✅ Error dialog
          this.ADDvisible = false;
          this.resetBranchForm();
          this.getBranchData();
          this.cdr.detectChanges();
        }
      });
    }

    if (this.BrType === 'edit') {
      const editPayload = {
        ...this.Edit_data
      };
      console.log('Editing branch:', editPayload);
      this.restApi.post(editPayload, '/configuration/branch/edit', 'text').subscribe({
        next: (res) => {
          if (res) {
            this.dialogService.show('Success', res, 'success', 3000); // ✅ Success dialog
            this.edit_visible = false;
            this.getBranchData()
            this.cdr.detectChanges();
          } else {
            this.dialogService.show('Error', res || 'Failed to update branch', 'error');
            this.edit_visible = false;
            this.getBranchData();
            this.cdr.detectChanges();
          }
        },
        error: (err) => {
          this.dialogService.show('Oops!', err, 'error', 3000); // ✅ Error dialog
          this.edit_visible = false;
          this.getBranchData();
          this.cdr.detectChanges();
        }
      });
    }
  }
  resetBranchForm() {
    this.branchForm.reset(); // Clear all values and states

    // Patch default values after reset
    this.branchForm.patchValue({
      instId: 'CLFSC',
      branchCode: '',
      branchMapCode: '',
      branchName: ''
    });

    // Clear validation error state
    this.branchForm.markAsPristine();
    this.branchForm.markAsUntouched();

    // Force form update if needed
    this.cdr.detectChanges();
  }
  deleteData: any
  example(data: any) {
    this.deleteData = data.data.branchCode
    this.delete_visible = true
  }
  deleteProfile(data?: any) {
    console.log('Delete Profile Data:', data);
    console.log(this.Edit_data.branchCode);


    this.restApi.post(null, `/configuration/branch/delete/${this.deleteData}`, 'text').subscribe({
      next: (res) => {
        console.log('Profile deleted successfully:', res);
        if (res) {
          this.dialogService.show('Success', res, 'success', 3000); // ✅ Success dialog
          this.getBranchData(); // ✅ Refresh table/list
          this.cdr.detectChanges();
          this.delete_visible = false; // ✅ Close dialog
        } else {
          this.dialogService.show('Oops!', res, 'error', 3000); // ✅ Success dialog 
          this.getBranchData(); // ✅ Refresh table/list
          this.cdr.detectChanges();
          this.delete_visible = false; // ✅ Close dialog

        }

      },
      error: (err) => {
        console.error('Error deleting profile:', err);
        this.dialogService.show('Oops!', err.message, 'error', 3000); // ✅ Error dialog

        // this.toast.showError('Error', err?.error?.message || 'Failed to delete profile'); // ✅ Error toast
      }
    });
  }
}
