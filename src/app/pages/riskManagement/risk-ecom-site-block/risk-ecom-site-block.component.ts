import { ChangeDetectionStrategy, Component} from '@angular/core';
import { Router } from '@angular/router';
import { TableComponent } from '../../../layout/component/table/table.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
changeDetection:ChangeDetectionStrategy.OnPush,
  selector: 'app-risk-ecom-site-block',
  imports: [TableComponent,DialogModule,ButtonModule,CommonModule,FormsModule,InputTextModule],
  templateUrl: './risk-ecom-site-block.component.html',
  styleUrl: './risk-ecom-site-block.component.scss'
})
export class RiskEcomSiteBLOCKComponent {
  delete_visible: any
  globalFilterFields: any = [
    'INSTID',
    'BLOCKEDMERCHANTLOCATION'
  ];
  
 rawData = [
    {
        "INSTID": "TEST",
        "BLOCKEDMERCHANTLOCATION": "TAMILNADU",
        "STATUS": "A",
        "USERTYPE": "M",
        "MAKER_ID": "24",
        "CHECKER_ID": "11",
        "FROMDATE": "25-AUG-22",
        "TODATE": "25-AUG-22",
        "CHECKER_DATE": "25-AUG-2022",
        "MAKER_DATE": "25-AUG-2022",
        "USERNAME": "demomaker"
    },
    {
        "INSTID": "TEST",
        "BLOCKEDMERCHANTLOCATION": "DELHI",
        "STATUS": "A",
        "USERTYPE": "M",
        "MAKER_ID": "24",
        "CHECKER_ID": "11",
        "FROMDATE": "16-NOV-22",
        "TODATE": "30-NOV-22",
        "CHECKER_DATE": "30-NOV-2022",
        "MAKER_DATE": "30-NOV-2022",
        "USERNAME": "demomaker"
    },
    {
        "INSTID": "TEST",
        "BLOCKEDMERCHANTLOCATION": "PUNE",
        "STATUS": "A",
        "USERTYPE": "M",
        "MAKER_ID": "24",
        "CHECKER_ID": "3",
        "FROMDATE": "11-MAY-22",
        "TODATE": "20-MAY-22",
        "CHECKER_DATE": "09-MAY-2022",
        "MAKER_DATE": "09-MAY-2022",
        "USERNAME": "demomaker"
    },
    {
        "INSTID": "TEST",
        "BLOCKEDMERCHANTLOCATION": "KERALA",
        "STATUS": "A",
        "USERTYPE": "M",
        "MAKER_ID": "25",
        "CHECKER_ID": "11",
        "FROMDATE": "25-AUG-22",
        "TODATE": "25-AUG-22",
        "CHECKER_DATE": "30-NOV-2022",
        "MAKER_DATE": "25-AUG-2022",
        "USERNAME": "demochecker"
    },
    {
        "INSTID": "TEST",
        "BLOCKEDMERCHANTLOCATION": "MUMBAI",
        "STATUS": "A",
        "USERTYPE": "M",
        "MAKER_ID": "25",
        "CHECKER_ID": "3",
        "FROMDATE": "06-MAY-22",
        "TODATE": "18-MAY-22",
        "CHECKER_DATE": "09-MAY-2022",
        "MAKER_DATE": "05-MAY-2022",
        "USERNAME": "demochecker"
    },
    {
        "INSTID": "TEST",
        "BLOCKEDMERCHANTLOCATION": "ANDRA",
        "STATUS": "A",
        "USERTYPE": "M",
        "MAKER_ID": "25",
        "CHECKER_ID": "3",
        "FROMDATE": "06-MAY-22",
        "TODATE": "28-MAY-22",
        "CHECKER_DATE": "10-MAY-2022",
        "MAKER_DATE": "05-MAY-2022",
        "USERNAME": "demochecker"
    },
    {
        "INSTID": "TEST",
        "BLOCKEDMERCHANTLOCATION": "BIHAR",
        "STATUS": "A",
        "USERTYPE": "M",
        "MAKER_ID": "25",
        "CHECKER_ID": "11",
        "FROMDATE": "08-NOV-22",
        "TODATE": "30-NOV-22",
        "CHECKER_DATE": "30-NOV-2022",
        "MAKER_DATE": "30-NOV-2022",
        "USERNAME": "demochecker"
    }
];
  
  cols = [
    { field: 'INSTID', header: 'INST ID' },
    { field: 'BLOCKEDMERCHANTLOCATION', header: 'Blocked Merchant Location',sort:true,type: 'string' },
  { field: 'Action', header: 'Action' ,type:['view','delete']},
  ];

  editVisible:any;
  Edit_data:any={
    BLOCKEDMERCHANTLOCATION: '',
    FROMDATE: '',
    TODATE: '',
    INSTID: ''
  };
  buttonsList: any = [
    { label: 'Authorize Delete Ecom Site', icon: 'pi pi-user-minus', type: 'deleteAuthorizedEcomSite', variant: 'outlined', severity: "danger" },
    { label: 'Authorize Ecom Site', icon: 'pi pi-verified', type: 'authorizedEcomSite', variant: 'outlined', severity: "info" }
  ]
  userRole: any = localStorage.getItem('userRole');
constructor(private router: Router) { };

  ngOnInit(){
    this.cols = this.userRole === 'maker'
  ? this.cols
  : this.cols.filter(col => col.field !== 'Action');
  }

  delateData(){
    this.delete_visible = false
  }

  edit(data:any,type:any){
    this.Edit_data = {...data?.data};
    console.log(data);
    this.editVisible = true;

  }

  addOrEdit(type:any,data:any){
    this.router.navigate(['/pages/add_EcomSite'], { state:{ data:data?.data , type:type} });
  }
}
