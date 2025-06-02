import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { TableComponent } from '../../../../layout/component/table/table.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-auth-user',
  imports: [CommonModule,TableComponent,FormsModule,ButtonModule,DialogModule],
  templateUrl: './auth-user.component.html',
  styleUrl: './auth-user.component.scss'
})
export class AuthUserComponent {
header: any;
  routeData:any = history.state;
  tableData:any = [
  {
      "USERID": 26,
      "USERNAME": "TEST1",
      "USERPASSWORD": "feyoEjJI3MijvVnTR/Nc+mnb9p4=",
      "PROFILEID": "14",
      "FIRSTNAME": "TEST",
      "LASTNAME": "DEMO",
      "EMAILID": "demo@gmail.com",
      "USERSTATUS": "1",
      "DESCRIPTION": "---",
      "BRANCHCODE": "634",
      "IPADDRESS": "N",
      "RETRYCOUNT": 0,
      "USERBLOCK": "Not Blocked",
      "EXPIRYDATE": "N",
      "CREATIONDATE": 1720636200000,
      "LOGINSTATUS": 0,
      "FIRSTTIME": 1,
      "PASSWORDEXPIRYDATE": "N",
      "PASSWORDEXPIRYFLAG": 0,
      "MODIFIEDDATE": null,
      "INSTID": "TEST",
      "CREATEDUSERID": "24",
      "FORGOTPASSWORDFLAG": "0",
      "LASTLOGIN": "lstlogin",
      "USERTYPE": "M",
      "PSWREPEATCOUNT": "N",
      "FRSTLOGINDATE": "frstlogin",
      "FRSTLOGIN": "F",
      "FORCEPSWEXP": "N",
      "SALT_KEY": "gdW42pbpEoY=",
      "CHANGPASS_DATE": null,
      "ADDED_BY": "adminmaker",
      "ADDED_DATE": "11-jul-2024",
      "AUTH_STATUS": "1",
      "AUTH_BY": "adminchecker",
      "AUTH_DATE": "11-jul-2024",
      "REMARKS": "AUTHORIZED",
      "UNBLOCKED_BY": null,
      "UNBLOCKED_DATE": null,
      "UNBLOCK_AUTHBY": null,
      "UNBLOCK_AUTHDATE": null,
      "PASSWDRESET_BY": null,
      "PASSWDRESET_DATE": null,
      "PASSWD_RESETAUTHBY": null,
      "PASSWD_RESETDATE": null,
      "DELETED_BY": null,
      "DELETED_DATE": null,
      "DELETED_FLAG": null,
      "CBS_USERNAME": "TEST1",
      "MOBILENO": 9835457135,
      "DOB": 1720636200000,
      "COUNTRY": "India",
      "CITY": "chennai",
      "ADDRESS": "egmore",
      "PROFILE_PIC": null,
      "PROFILE_PIC_TYPE": null,
      "UNBLOCK_TIME": null,
      "BLOCKEDDATE": null,
      "PASS_COUNT": null,
      "BRANCHNAME": "HEAD OFFICE",
      "PROFILE_ID": 14,
      "PROFILE_NAME": "TESTMAKER"
    },
    {
      "USERID": 27,
      "USERNAME": "TEST2",
      "USERPASSWORD": "CIwuL8QJ7sN4COM4gBujnY4Kp3c=",
      "PROFILEID": "16",
      "FIRSTNAME": "test",
      "LASTNAME": "demo",
      "EMAILID": "demo@gmail.com",
      "USERSTATUS": "1",
      "DESCRIPTION": "---",
      "BRANCHCODE": "634",
      "IPADDRESS": "N",
      "RETRYCOUNT": 0,
      "USERBLOCK": "Not Blocked",
      "EXPIRYDATE": "N",
      "CREATIONDATE": 1720636200000,
      "LOGINSTATUS": 0,
      "FIRSTTIME": 1,
      "PASSWORDEXPIRYDATE": "N",
      "PASSWORDEXPIRYFLAG": 0,
      "MODIFIEDDATE": null,
      "INSTID": "TEST",
      "CREATEDUSERID": "24",
      "FORGOTPASSWORDFLAG": "0",
      "LASTLOGIN": "lstlogin",
      "USERTYPE": "C",
      "PSWREPEATCOUNT": "N",
      "FRSTLOGINDATE": "frstlogin",
      "FRSTLOGIN": "F",
      "FORCEPSWEXP": "N",
      "SALT_KEY": "GxbMQXxqzW4=",
      "CHANGPASS_DATE": null,
      "ADDED_BY": "adminmaker",
      "ADDED_DATE": "11-jul-2024",
      "AUTH_STATUS": "1",
      "AUTH_BY": "adminchecker",
      "AUTH_DATE": "11-jul-2024",
      "REMARKS": "AUTHORIZED",
      "UNBLOCKED_BY": null,
      "UNBLOCKED_DATE": null,
      "UNBLOCK_AUTHBY": null,
      "UNBLOCK_AUTHDATE": null,
      "PASSWDRESET_BY": null,
      "PASSWDRESET_DATE": null,
      "PASSWD_RESETAUTHBY": null,
      "PASSWD_RESETDATE": null,
      "DELETED_BY": null,
      "DELETED_DATE": null,
      "DELETED_FLAG": null,
      "CBS_USERNAME": "TEST2",
      "MOBILENO": 8964673621,
      "DOB": 1720636200000,
      "COUNTRY": "India",
      "CITY": "chennai",
      "ADDRESS": "egmore",
      "PROFILE_PIC": null,
      "PROFILE_PIC_TYPE": null,
      "UNBLOCK_TIME": null,
      "BLOCKEDDATE": null,
      "PASS_COUNT": null,
      "BRANCHNAME": "HEAD OFFICE",
      "PROFILE_ID": 16,
      "PROFILE_NAME": "TESTCHECKER"
    },
];
 globalFilterFields: any = [
    "USERID",
    "USERNAME",
    "INSTID",
    "ADDED_BY",
    "ADDED_DATE",
    "PROFILE_NAME"
  ];
  
  cols = [
    { field: 'USERNAME', header: 'USERNAME' },
    { field: 'USERID', header: 'USER ID', sort: true, type: 'number' },
    { field: 'INSTID', header: 'INST ID', sort: true, type: 'string' },
    { field: 'PROFILE_NAME', header: 'PROFILE NAME', sort: true, type: 'string' },
    { field: 'ADDED_DATE', header: 'ADDED DATE', sort: true, type: 'date' },
    { field: 'ADDED_BY', header: 'ADDED BY', sort: true, type: 'string' },
  { field: 'Action', header: 'Action' ,type:[this.routeData.type == 'auth'?'view':'delete']},
  ];
edit_visible: boolean = false;
 delete_visible: any;


  constructor(private location: Location) { }
  ngOnInit(){
    this.header = this.routeData.type == 'auth'?'View User Authorization':'View User Delete Authorization'
  }
    goBack() {
    this.location.back();
  }
}
