import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TooltipModule } from 'primeng/tooltip';
import { TableComponent } from '../../../layout/component/table/table.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-details',
  imports: [TooltipModule,
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    ButtonModule,
    TableComponent,
    DialogModule,],
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.scss'
})
export class ProfileDetailsComponent {

  constructor(private router: Router) { };

  globalFilterFields: any = [
    'INSTID',
    'PROFILE_ID',
    'PROFILE_NAME',
    'AUTH_DATE',
    'AUTH_CODE',
  ];

  atmData = [{ "PROFILE_ID": 14, "PROFILE_NAME": "TESTMAKER", "PROFILE_DESC": "Maker", "INSTID": "TEST", "LOGINIPADDRESSREQUIRED": "0", "LOGINEXPIRYDATEREQUIRED": "0", "LOGINRETRYCOUNTREQUIRED": "0", "LOGINBRANCHCODEREQUIRED": "0", "USERPASSWORDREPEATABLE": "0", "USERPASSWORDEXPIRYCHECK": "0", "USERTYPE": "M", "USER_CODE": "24", "AUTH_CODE": "AUTHORIZED", "AUTH_DATE": "10-07-2024", "AUTH_BY": "adminchecker", "ADDED_BY": "adminmaker", "ADDED_DATE": "10-07-2024", "REMARKS": "AUTHORIZED" },
  { "PROFILE_ID": 20, "PROFILE_NAME": "demoadmin2", "PROFILE_DESC": "checker", "INSTID": "TEST", "LOGINIPADDRESSREQUIRED": "0", "LOGINEXPIRYDATEREQUIRED": "0", "LOGINRETRYCOUNTREQUIRED": "0", "LOGINBRANCHCODEREQUIRED": "0", "USERPASSWORDREPEATABLE": "0", "USERPASSWORDEXPIRYCHECK": "0", "USERTYPE": "C", "USER_CODE": "24", "AUTH_CODE": "AUTHORIZED", "AUTH_DATE": "15-07-2024", "AUTH_BY": "adminchecker", "ADDED_BY": "adminmaker", "ADDED_DATE": "15-07-2024", "REMARKS": "AUTHORIZED" },
  { "PROFILE_ID": 18, "PROFILE_NAME": "CheckerDemo", "PROFILE_DESC": "checker", "INSTID": "TEST", "LOGINIPADDRESSREQUIRED": "0", "LOGINEXPIRYDATEREQUIRED": "0", "LOGINRETRYCOUNTREQUIRED": "0", "LOGINBRANCHCODEREQUIRED": "0", "USERPASSWORDREPEATABLE": "0", "USERPASSWORDEXPIRYCHECK": "0", "USERTYPE": "C", "USER_CODE": "24", "AUTH_CODE": "AUTHORIZED", "AUTH_DATE": "15-07-2024", "AUTH_BY": "adminchecker", "ADDED_BY": "adminmaker", "ADDED_DATE": "15-07-2024", "REMARKS": "AUTHORIZED" },
  { "PROFILE_ID": 17, "PROFILE_NAME": "MakerDemo", "PROFILE_DESC": "Maker", "INSTID": "TEST", "LOGINIPADDRESSREQUIRED": "0", "LOGINEXPIRYDATEREQUIRED": "0", "LOGINRETRYCOUNTREQUIRED": "0", "LOGINBRANCHCODEREQUIRED": "0", "USERPASSWORDREPEATABLE": "0", "USERPASSWORDEXPIRYCHECK": "0", "USERTYPE": "M", "USER_CODE": "24", "AUTH_CODE": "AUTHORIZED", "AUTH_DATE": "15-07-2024", "AUTH_BY": "adminchecker", "ADDED_BY": "adminmaker", "ADDED_DATE": "15-07-2024", "REMARKS": "AUTHORIZED" },
  { "PROFILE_ID": 16, "PROFILE_NAME": "TESTCHECKER", "PROFILE_DESC": "checker", "INSTID": "TEST", "LOGINIPADDRESSREQUIRED": "0", "LOGINEXPIRYDATEREQUIRED": "0", "LOGINRETRYCOUNTREQUIRED": "0", "LOGINBRANCHCODEREQUIRED": "0", "USERPASSWORDREPEATABLE": "0", "USERPASSWORDEXPIRYCHECK": "0", "USERTYPE": "C", "USER_CODE": "24", "AUTH_CODE": "AUTHORIZED", "AUTH_DATE": "11-07-2024", "AUTH_BY": "adminchecker", "ADDED_BY": "adminmaker", "ADDED_DATE": "11-07-2024", "REMARKS": "AUTHORIZED" },
  { "PROFILE_ID": 19, "PROFILE_NAME": "demoadmin1", "PROFILE_DESC": "Maker", "INSTID": "TEST", "LOGINIPADDRESSREQUIRED": "0", "LOGINEXPIRYDATEREQUIRED": "0", "LOGINRETRYCOUNTREQUIRED": "0", "LOGINBRANCHCODEREQUIRED": "0", "USERPASSWORDREPEATABLE": "0", "USERPASSWORDEXPIRYCHECK": "0", "USERTYPE": "M", "USER_CODE": "24", "AUTH_CODE": "AUTHORIZED", "AUTH_DATE": "15-07-2024", "AUTH_BY": "adminchecker", "ADDED_BY": "adminmaker", "ADDED_DATE": "15-07-2024", "REMARKS": "AUTHORIZED" }]

  cols = [
    { field: 'INSTID', header: 'INST ID' },
    { field: 'PROFILE_ID', header: 'PROFILE_ID' },
    { field: 'PROFILE_NAME', header: 'PROFILE_NAME' },
    { field: 'PROFILE_DESC', header: 'PROFILE_DESC' },
    { field: 'AUTH_DATE', header: 'ADDED_DATE' },
    { field: 'AUTH_CODE', header: 'STATUS' },
    { field: 'Action', header: 'Action', type: ['view', 'edit', 'delete'] },
  ];
  delete_visible: any;
  addOrEdit(event: any, type: any) {
    this.router.navigate(['/pages/user_profile'], { state: { data: event?.data, type: type } });
  };

  viewProfile(event: any, type: any) {

  }
}
