import { ChangeDetectionStrategy, Component} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableComponent } from '../../../layout/component/table/table.component';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
changeDetection:ChangeDetectionStrategy.OnPush,
  selector: 'app-external-bin',
  imports: [TableComponent,DialogModule,ButtonModule,CommonModule,FormsModule,],
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
  
 rawData = [
    { INSTID: 'TEST', BIN: '437551', DESCRIPTION: 'TEST', RECORDID: '4' },
    { INSTID: 'TEST', BIN: '63980700', DESCRIPTION: 'TEST', RECORDID: '1' },
    { INSTID: 'TEST', BIN: '611111', DESCRIPTION: 'TEST', RECORDID: '3' },
    { INSTID: 'TEST', BIN: '605736', DESCRIPTION: 'TEST', RECORDID: '5' },
    { INSTID: 'TEST', BIN: '451452', DESCRIPTION: 'TEST', RECORDID: '7' },
    { INSTID: 'TEST', BIN: '466096', DESCRIPTION: 'TEST', RECORDID: '6' },
    { INSTID: 'TEST', BIN: '607084', DESCRIPTION: 'TEST', RECORDID: '8' },
  ];
  
  cols = [
    { field: 'INSTID', header: 'INST ID' },
  { field: 'BIN', header: 'BIN' },
  { field: 'DESCRIPTION', header: 'Description' },
  { field: 'RECORDID', header: 'Record ID' },
  { field: 'Action', header: 'Action' ,type:['view','edit','delete']},
  ];

  editVisible:any;
  Edit_data:any={
    INSTID: '',
    BRANCHID: '',
    MAPCODE: '',
    BRANCHNAME: ''
  };
tpCheck!:boolean;
  buttonsList: any = [
    { label: 'Authorize Delete External BIN', icon: 'pi pi-user-minus', type: 'deleteAuth', variant: 'outlined', severity: "danger" },
    { label: 'Authorize External BIN', icon: 'pi pi-verified', type: 'auth', variant: 'outlined', severity: "info" }
  ]
  userRole: any = localStorage.getItem('userRole');
  userType: any = localStorage.getItem('userType');
constructor(private router: Router) { };

    ngOnInit(){
    this.cols = this.userType === 'maker'
  ? this.cols
  : this.cols.filter(col => col.field !== 'Action');
  }

  delateData(){
    this.delete_visible = false
  }

  edit(data:any,type:any){
    this.Edit_data = {...data?.data};
    console.log(data);
    this.tpCheck = type == 'View' ? true:false;
    this.editVisible = true;
  }

  authFunction(event:any){
     this.router.navigate(['/pages/auth-ext-bin'], { state: { type: event.type } });
  }

  addOrEdit(type:any,data:any){
    this.router.navigate(['/pages/add_externalBin'], { state:{ data:data?.data , type:type} });
  }
}
