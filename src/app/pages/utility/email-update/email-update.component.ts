import { Component } from '@angular/core';
import { TableComponent } from "../../../layout/component/table/table.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-email-update',
  imports: [TableComponent,DialogModule,ButtonModule,CommonModule],
  templateUrl: './email-update.component.html',
  styleUrl: './email-update.component.scss'
})
export class EmailUpdateComponent {
 emailGroups = [
    {
      "groupId": "NTWK_DWN",
      "emailList": [
        "Networktest1@gmail.com",
        "Networkcheck@gmail.com",
        "demonetwork@gmail.com"
      ]
    },
    {
      "groupId": "OUT_SERV",
      "emailList": [
        "outofservicetest1@gmail.com",
        "outofservicecheck@gmail.com",
        "outofservice001@gmail.com"
      ]
    },
    {
      "groupId": "OFF_LINE",
      "emailList": [
        "showsoffline@gmail.com",
        "offlinecheck@gmail.com",
        "testoffline@gmail.com"
      ]
    },
    {
      "groupId": "WARNING",
      "emailList": [
        "warningaltert@gmail.com",
        "testwarning@gmail.com",
        "warningmessage001@gmail.com"
      ]
    }
  ];

  transformedEmailGroups: any = [];
 cols = [
    { field: 'groupId', header: 'Group ID' },
    { field: 'formattedEmailList', header: 'Email List' },
    { field: 'Action', header: 'Action', type: ['view'] }
  ];

  // Fields for global filter
  globalFilterFields: any = ['groupId', 'formattedEmailList'];
  viewVisible!: boolean;
  group:any =  {
      "groupId": "",
      "emailList": []
    };
  constructor(private router: Router){}

  ngOnInit() {
    this.transformedEmailGroups = this.emailGroups.map(group => {
      return {
        groupId: group.groupId,
        emailList: group.emailList,
        formattedEmailList: group.emailList.join(' , ')  // Convert the array to a comma-separated string
      };
    });
  }

  view(data:any,type:any){
    console.log(type,data);
    if(type == 'Add'){
       this.router.navigate(['/pages/add_email_update'], { state:{ data:data?.data , type:type} });
    }else{
      this.viewVisible = true;
      this.group = data?.data;
    }
    
  }
}

