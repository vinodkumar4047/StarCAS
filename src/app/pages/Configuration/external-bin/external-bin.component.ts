import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableComponent } from '../../../layout/component/table/table.component';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { RestService } from '../../../layout/service/rest.service';
import { take } from 'rxjs';
import { DialogService } from '../../../layout/component/commonDialog.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-external-bin',
  imports: [TableComponent, DialogModule, ButtonModule, CommonModule, FormsModule,],
  templateUrl: './external-bin.component.html',
  styleUrl: './external-bin.component.scss'
})
export class ExternalBinComponent {
  delete_visible: any
  globalFilterFields: any = [
    'INSTID',
    'BIN',
    'DESCRIPTION',
    'RECORDID',
  ];

  rawData = [];

  cols = [
    { field: 'INSTID', header: 'INST ID' },
    { field: 'BIN', header: 'BIN' },
    { field: 'DESCRIPTION', header: 'Description' },
    { field: 'RECORDID', header: 'Record ID' },
    { field: 'Action', header: 'Action', type: ['view', 'edit', 'delete'] },
  ];

  editVisible: any;
  Edit_data: any = {
    INSTID: '',
    BRANCHID: '',
    MAPCODE: '',
    BRANCHNAME: ''
  };
  tpCheck!: boolean;
  buttonsList: any = [
    { label: 'Authorize Delete External BIN', icon: 'pi pi-user-minus', type: 'deleteAuth', variant: 'outlined', severity: "danger" },
    { label: 'Authorize External BIN', icon: 'pi pi-verified', type: 'auth', variant: 'outlined', severity: "info" }
  ]
  userRole: any = localStorage.getItem('userRole');
  userType: any = localStorage.getItem('userType');
  loading: any;
  constructor(private router: Router, private restApi: RestService, private cdr: ChangeDetectorRef,private dialogService:DialogService) { };

  ngOnInit() {
    this.cols = this.userType === 'M'
      ? this.cols
      : this.cols.filter(col => col.field !== 'Action');
       this.getList();
  }

  getList() {
    this.restApi.get('/configuration/external-bin/list').pipe(
      take(1)
    ).subscribe({
      next: (res) => {
        if (res) {
          this.rawData = res;
          console.log(res,'res----');
          
        } else {
          console.warn('No data received or request failed.');
        }
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Subscription error:', err);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  delateData() {
    this.delete_visible = false
  }

  edit(data: any, type: any) {
    this.Edit_data = { ...data?.data };
    console.log(data);
    this.tpCheck = type == 'View' ? true : false;
    this.editVisible = true;
  }

  authFunction(event: any) {
    this.router.navigate(['/pages/auth-ext-bin'], { state: { type: event.type } });
  }

  addOrEdit(type: any, data: any) {
    this.router.navigate(['/pages/add_externalBin'], { state: { data: data?.data, type: type } });
  }

  editExternalBin(){
      let payload = {}
      //   "instId": this.extBinForm.value?.Instution,
      //   "bin": this.extBinForm.value?.BIN,
      //   "description": this.extBinForm.value?.Description
      // }
      this.restApi.post(payload, '/configuration/external-bin/add').subscribe({
        next: (res) => {
         
            console.log('User added successfully:', res);
                this.editVisible = false
            this.dialogService.show('Success', res?.message, 'success',3000);
        },
        error: (err) => {
          console.error('Error adding profile:', err)
          this.dialogService.show('Oops!', err.message, 'error', 3000); // ✅ Error dialog
        }
      });

  }
}
