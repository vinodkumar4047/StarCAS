import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
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
    INSTID: '',
    BRANCHCODE: '',
    BRANCHMAPCODE: '',
    BRANCHNAME: ''
  };
  ADDvisible: boolean = false;
  tpCheck: any;


  globalFilterFields: any = [
    'INSTID',
    'BRANCHCODE',
    'BRANCHMAPCODE',
    'BRANCHNAME',
  ];
  delete_visible: any;
  buttonsList: any = [
    { label: 'Authorize Branch', icon: 'pi pi-verified', type: 'auth', variant: 'outlined', severity: "info" },
    { label: 'Edit Authorize Profile', icon: 'pi pi-pencil', type: 'edit', variant: 'outlined', severity: "arn" },
    { label: 'Authorize Delete Branch', icon: 'pi pi-user-minus', type: 'deleteAuth', variant: 'outlined', severity: "danger" },
  ]
  // userRole: any = localStorage.getItem('userRole');
  // filteredButtons: any;
  // permittedActions: any;
  // canAdd: any;
  // permissionActionMap: any = {
  //   'Authorize Branch': 'auth',
  //   'Authorize Delete Branch': 'deleteAuth',
  //   'Add User': 'add',
  //   'View User': 'view',
  //   'Edit User': 'edit',
  //   'Delete User': 'delete'
  // };
  // permission: any = [];
  // canAddBranch: any;
  // constructor(private router: Router, private menuService: MenuService) { };
  // ngOnInit() {
  //   this.permission = this.menuService.getMenuitem();
  //   console.log('Permissions:', this.permission);

  //   const branchPerms = this.getPermissionsFor('Branch');
  //   const { actions, buttons, canAdd } = this.mapPermissionsToActions(branchPerms);

  //   this.cols = [
  //     { field: 'INSTID', header: 'INST ID' },
  //     { field: 'BRANCHCODE', header: 'Branch ID' },
  //     { field: 'BRANCHMAPCODE', header: 'Branch Map Code' },
  //     { field: 'BRANCHNAME', header: 'Branch Name' },
  //     { field: 'Action', header: 'Action', type: actions }
  //   ];

  //   this.filteredButtons = buttons;
  //   this.canAddBranch = canAdd;

  //   this.cols = this.userRole === 'maker'
  //     ? this.cols
  //     : this.cols.filter((col: any) => col.field !== 'Action');
  // }

  // mapPermissionsToActions(perms: any[]) {
  //   const actions: string[] = [];
  //   const buttons: any[] = [];

  //   const actionMap: { [key: string]: string } = {
  //     'View Branch': 'view',
  //     'Edit Branch': 'edit',
  //     'Delete Branch': 'delete',
  //   };

  //   const buttonMap: { [key: string]: any } = {
  //     'Authorize Branch': {
  //       label: 'Authorize Branch',
  //       icon: 'pi pi-verified',
  //       type: 'auth',
  //       variant: 'outlined',
  //       severity: 'info'
  //     },
  //     'Delete Authorize Branch': {
  //       label: 'Authorize Delete Branch',
  //       icon: 'pi pi-user-minus',
  //       type: 'deleteAuth',
  //       variant: 'outlined',
  //       severity: 'danger'
  //     }
  //   };

  //   for (let p of perms) {
  //     if (actionMap[p.title]) actions.push(actionMap[p.title]);
  //     if (buttonMap[p.title]) buttons.push(buttonMap[p.title]);
  //   }

  //   return { actions, buttons, canAdd: perms.some(p => p.title === 'Add Branch') };
  // }

  // getPermissionsFor(title: string): any[] {
  //   const configMenu = this.permission.find((p: any) => p.title === 'Configuration');
  //   const submenu = configMenu?.subMenu?.find((s: any) => s.title === title);
  //   return submenu?.permissions?.filter((p: any) => p.checked) || [];
  // }

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

  constructor(private location: Location,private dialogService: DialogService, private fb: FormBuilder, private cdr: ChangeDetectorRef, private restApi: RestService, private router: Router, private menuService: MenuService) {
    this.branchForm = this.fb.group({
      instId: [{ value: 'CLFSC', disabled: true }],
      branchCode: ['', Validators.required],
      branchMapCode: ['', Validators.required],
      branchName: ['', Validators.required]
    });


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
    console.log('this.branchForm', this.branchForm);
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
  }
  deleteItem() {
    console.log('Item deleted!');
    this.delete_visible = true;
  }

  getBranchData() {
    this.loading = true;
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
  };
  onSave() {
    if (this.branchForm.invalid) {
      this.branchForm.markAllAsTouched();
      return;
    }

    const formData = this.branchForm.getRawValue(); // includes disabled fields
    const url = '/configuration/branch/add';

    if (this.BrType === 'add') {
      console.log('Adding branch:', formData);
      this.restApi.post(formData, url).subscribe({
        next: (res) => {
          if (res) {
            this.dialogService.show('Success', 'Branch added successfully', 'success');
            
          } else {
            this.dialogService.show('Error', res?.respDesc || 'Failed to add branch', 'error');
          }
        },
        error: (err) => {
          this.dialogService.show('Error', 'API error occurred', 'error');
        }
      });
    }

    if (this.BrType === 'edit') {
      console.log('Editing branch:', formData);
      this.restApi.post(formData, '/configuration/branch/edit').subscribe({
        next: (res) => {
          if (res) {
            this.dialogService.show('Success', 'Branch updated successfully', 'success');
          } else {
            this.dialogService.show('Error', res?.respDesc || 'Failed to update branch', 'error');
          }
        },
        error: (err) => {
          this.dialogService.show('Error', 'API error occurred', 'error');
        }
      });
    }
  }

}
