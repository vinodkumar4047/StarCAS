import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
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
    ButtonModule, TableComponent,
    DialogModule,],
  templateUrl: './branch.component.html',
  styleUrl: './branch.component.scss'
})
export class BranchComponent {
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

  customers = [{ "INSTID": "TEST", "BRANCHCODE": "634", "BRANCHNAME": "HEAD OFFICE", "BRANCHMAPCODE": "001", "STATUS": "A", "USERTYPE": "C", "MAKER_ID": "24", "CHECKER_ID": "24", "CHECKER_DATE": "05-JUL-2024", "MAKER_DATE": "05-JUL-2024", "USERNAME": "demomaker" },
  { "INSTID": "TEST", "BRANCHCODE": "453", "BRANCHNAME": "TEST OFFICE", "BRANCHMAPCODE": "002", "STATUS": "A", "USERTYPE": "C", "MAKER_ID": "24", "CHECKER_ID": "24", "CHECKER_DATE": "05-JUL-2024", "MAKER_DATE": "05-JUL-2024", "USERNAME": "demomaker" },
  { "INSTID": "TEST", "BRANCHCODE": "903", "BRANCHNAME": "ADMIN OFFICE", "BRANCHMAPCODE": "003", "STATUS": "A", "USERTYPE": "C", "MAKER_ID": "24", "CHECKER_ID": "24", "CHECKER_DATE": "05-JUL-2024", "MAKER_DATE": "05-JUL-2024", "USERNAME": "demomaker" },
  { "INSTID": "TEST", "BRANCHCODE": "387", "BRANCHNAME": "CGS OFFICE", "BRANCHMAPCODE": "004", "STATUS": "A", "USERTYPE": "C", "MAKER_ID": "24", "CHECKER_ID": "24", "CHECKER_DATE": "05-JUL-2024", "MAKER_DATE": "05-JUL-2024", "USERNAME": "demomaker" }];
  delete_visible: any;
  buttonsList: any = [
    { label: 'Authorize Delete Branch', icon: 'pi pi-user-minus', type: 'deleteAuth', variant: 'outlined', severity: "danger" },
    { label: 'Authorize Branch', icon: 'pi pi-verified', type: 'auth', variant: 'outlined', severity: "info" }
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
    { field: 'INSTID', header: 'INST ID' },
    { field: 'BRANCHCODE', header: 'Branch ID' },
    { field: 'BRANCHMAPCODE', header: 'Branch Map Code' },
    { field: 'BRANCHNAME', header: 'Branch Name' },
    { field: 'Action', header: 'Action', type: [] }
  ];

  constructor(private router: Router, private menuService: MenuService) { }

  ngOnInit() {
    this.permission = this.menuService.getMenuitem();
    const perms = this.getCheckedPermissions('Branch');

    const actionsMap: any = {
      'View Branch': 'view',
      'Edit Branch': 'edit',
      'Delete Branch': 'delete'
    };

    const buttonsMap: any = {
      'Authorize Branch': { label: 'Authorize Branch', icon: 'pi pi-verified', type: 'auth', variant: 'outlined', severity: 'info' },
      'Delete Authorize Branch': { label: 'Authorize Delete Branch', icon: 'pi pi-user-minus', type: 'deleteAuth', variant: 'outlined', severity: 'danger' }
    };

    this.cols.find((col: any) => col.field === 'Action')!.type = perms
      .map((p: any) => actionsMap[p.title])
      .filter(Boolean);

    this.filteredButtons = perms
      .map((p: any) => buttonsMap[p.title])
      .filter(Boolean);

    this.canAddBranch = perms.some((p: any) => p.title === 'Add Branch');

    if (this.userType !== 'M') {
      this.cols = this.cols.filter((col: any) => col.field !== 'Action');
    }
  }

  getCheckedPermissions(title: string): any[] {
    return this.permission
      .find((p: any) => p.title === 'Configuration')?.subMenu
      ?.find((s: any) => s.title === title)?.permissions
      ?.filter((p: any) => p.checked) || [];
  }

  addOrEdit(data1?: any, data?: any) {
    this.ADDvisible = !this.ADDvisible
  }
  authFunc(event: any) {
    this.router.navigate(['/pages/auth-branch'], { state: { type: event.type } });
  }

  editFunction(customer: any, type: any) {
    this.Edit_data = { ...customer.data };
    this.edit_visible = true;
    this.tpCheck = type == 'view' ? true : false;
  }
  deleteItem() {
    console.log('Item deleted!');
    this.delete_visible = true;
  }

}
