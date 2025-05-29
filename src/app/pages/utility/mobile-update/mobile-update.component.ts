import { ChangeDetectionStrategy, Component} from '@angular/core';
import { TableComponent } from '../../../layout/component/table/table.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
changeDetection:ChangeDetectionStrategy.OnPush,
  selector: 'app-mobile-update',
  imports: [TableComponent,DialogModule,ButtonModule,CommonModule],
  templateUrl: './mobile-update.component.html',
  styleUrl: './mobile-update.component.scss'
})
export class MobileUpdateComponent {
mobileGroups = [
    {
      "groupId": "NTWK_DWN",
      "mobileList": [
        "9454454855",
        "9497979255",
        "9454536555"
      ]
    },
    {
      "groupId": "OUT_SERV",
      "mobileList": [
         "9497979255",
        "9454536555"
      ]
    },
    {
      "groupId": "OFF_LINE",
      "mobileList": [
       "974793437", "7732473692" ,"837483467"
      ]
    },
    {
      "groupId": "WARNING",
      "mobileList": [
         "974793437"
      ]
    }
  ];

  transformedmobileGroups: any = [];
 cols = [
    { field: 'groupId', header: 'Group ID' },
    { field: 'formattedmobileList', header: 'mobile List' },
    { field: 'Action', header: 'Action', type: ['view'] }
  ];

  // Fields for global filter
  globalFilterFields: any = ['groupId', 'formattedmobileList'];
  viewVisible!: boolean;
  group:any =  {
      "groupId": "",
      "mobileList": []
    };
userRole: any = localStorage.getItem('userRole');
  constructor(private router: Router){}

  ngOnInit() {
       this.cols = this.userRole === 'maker'
  ? this.cols
  : this.cols.filter(col => col.field !== 'Action');
    this.transformedmobileGroups = this.mobileGroups.map(group => {
      return {
        groupId: group.groupId,
        mobileList: group.mobileList,
        formattedmobileList: group.mobileList.join(' , ')  // Convert the array to a comma-separated string
      };
    });
  }

  view(data:any,type:any){
    console.log(type,data);
    if(type == 'Add'){
       this.router.navigate(['/pages/add_mobile_update'], { state:{ data:data?.data , type:type} });
    }else{
      this.viewVisible = true;
      this.group = data?.data;
    }
    
  }
}
