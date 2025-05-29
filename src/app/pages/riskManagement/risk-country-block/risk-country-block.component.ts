import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableComponent } from '../../../layout/component/table/table.component';
import { Router } from '@angular/router';
import { Select } from 'primeng/select';

@Component({
changeDetection:ChangeDetectionStrategy.OnPush,
  selector: 'app-risk-country-block',
  imports: [TableComponent, DialogModule, ButtonModule,
    CommonModule, FormsModule, FormsModule, InputTextModule,Select],
  templateUrl: './risk-country-block.component.html',
  styleUrl: './risk-country-block.component.scss'
})
export class RiskCOUNTRYBLOCKComponent {
  delete_visible: any;
   rawData = [
    {
        "INSTID": "TEST",
        "BLOCKEDCOUNTRYCODE": "17",
        "COUNTRYDESC": "Afgani",
        "TXNALLOWEDFLAG": "BLOCKED",
        "STATUS": "A",
        "USERTYPE": "C",
        "MAKER_ID": "24",
        "CHECKER_ID": "25",
        "CHECKER_DATE": "07-APR-2025",
        "MAKER_DATE": "07-APR-2025",
        "USERNAME": "demomaker"
    },
    {
        "INSTID": "TEST",
        "BLOCKEDCOUNTRYCODE": "165",
        "COUNTRYDESC": "Russia",
        "TXNALLOWEDFLAG": "BLOCKED",
        "STATUS": "A",
        "USERTYPE": "C",
        "MAKER_ID": "24",
        "CHECKER_ID": "3",
        "CHECKER_DATE": "23-MAR-2022",
        "MAKER_DATE": "24-AUG-2022",
        "USERNAME": "demomaker"
    },
    {
        "INSTID": "TEST",
        "BLOCKEDCOUNTRYCODE": "355",
        "COUNTRYDESC": "Albania",
        "TXNALLOWEDFLAG": "UNBLOCKED",
        "STATUS": "A",
        "USERTYPE": "C",
        "MAKER_ID": "24",
        "CHECKER_ID": "11",
        "CHECKER_DATE": "24-AUG-2022",
        "MAKER_DATE": "24-AUG-2022",
        "USERNAME": "demomaker"
    },
    {
        "INSTID": "TEST",
        "BLOCKEDCOUNTRYCODE": "931",
        "COUNTRYDESC": "Afghanistan",
        "TXNALLOWEDFLAG": "BLOCKED",
        "STATUS": "A",
        "USERTYPE": "C",
        "MAKER_ID": "25",
        "CHECKER_ID": "11",
        "CHECKER_DATE": "25-AUG-2022",
        "MAKER_DATE": "24-AUG-2022",
        "USERNAME": "demochecker"
    },
    {
        "INSTID": "TEST",
        "BLOCKEDCOUNTRYCODE": "232",
        "COUNTRYDESC": "Afganis",
        "TXNALLOWEDFLAG": "UNBLOCKED",
        "STATUS": "A",
        "USERTYPE": "M",
        "MAKER_ID": "25",
        "CHECKER_ID": "3",
        "CHECKER_DATE": "23-MAR-2022",
        "MAKER_DATE": "24-AUG-2022",
        "USERNAME": "demochecker"
    },
    {
        "INSTID": "TEST",
        "BLOCKEDCOUNTRYCODE": "856",
        "COUNTRYDESC": "Laos",
        "TXNALLOWEDFLAG": "BLOCKED",
        "STATUS": "A",
        "USERTYPE": "M",
        "MAKER_ID": "25",
        "CHECKER_ID": "11",
        "CHECKER_DATE": "15-SEP-2022",
        "MAKER_DATE": "16-DEC-2022",
        "USERNAME": "demochecker"
    }
];
    optvalue:any = [
      {name:'BLOCKED',code:'BLOCKED'},
      {name:'UNBLOCKED',code:'UNBLOCKED'}
    ]
  cols = [
    { field: 'INSTID', header: 'INST ID' },
    { field: 'BLOCKEDCOUNTRYCODE', header: 'Blocked Country Code' },
    { field: 'COUNTRYDESC', header: 'Country Desc' },
    { field: 'TXNALLOWEDFLAG', header: 'TXN Allowed Flag' },
    { field: 'Action', header: 'Action', type: ['view', 'edit'] },
  ];
      globalFilterFields: any = [
    'INSTID',
    'BLOCKEDCOUNTRYCODE',
    'COUNTRYDESC',
    'TXNALLOWEDFLAG'
  ];
  
    editVisible:any;
    Edit_data:any={
      BLOCKEDCOUNTRYCODE: '',
      COUNTRYDESC: '',
      TXNALLOWEDFLAG: '',
      INSTID: ''
    };
    tpCheck!: boolean;
    buttonsList: any = [
    { label: 'Authorize Country', icon: 'pi pi-verified', type: 'AuthorizedCountry', variant: 'outlined', severity: "info" }
  ]
  userRole: any = localStorage.getItem('userRole');
  constructor(private router: Router) { };
  
     ngOnInit(){
    this.cols = this.userRole === 'maker'
  ? this.cols
  : this.cols.filter(col => col.field !== 'Action');
  }
    edit(data:any,type:any){
      this.Edit_data = {...data?.data};
      console.log(data);
      this.tpCheck = type == 'View' ? true:false;
      this.editVisible = true;
  
    }
  
    addOrEdit(type:any,data:any){
      this.router.navigate(['/pages/add_risk_ctry'], { state:{ data:data?.data , type:type} });
    }
}
