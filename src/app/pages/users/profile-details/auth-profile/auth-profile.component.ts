import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableComponent } from '../../../../layout/component/table/table.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-auth-profile',
  imports: [CommonModule, TableComponent, ButtonModule, FormsModule, DialogModule],
  templateUrl: './auth-profile.component.html',
  styleUrl: './auth-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthProfileComponent {
  header: any;
  routeData: any = history.state;
  tableData: any = [{ "PROFILE_ID": 14, "PROFILE_NAME": "TESTMAKER", "PROFILE_DESC": "Maker", "INSTID": "TEST", "LOGINIPADDRESSREQUIRED": "0", "LOGINEXPIRYDATEREQUIRED": "0", "LOGINRETRYCOUNTREQUIRED": "0", "LOGINBRANCHCODEREQUIRED": "0", "USERPASSWORDREPEATABLE": "0", "USERPASSWORDEXPIRYCHECK": "0", "USERTYPE": "M", "USER_CODE": "24", "AUTH_CODE": "AUTHORIZED", "AUTH_DATE": "10-07-2024", "AUTH_BY": "adminchecker", "ADDED_BY": "adminmaker", "ADDED_DATE": "10-07-2024", "REMARKS": "AUTHORIZED" },
  { "PROFILE_ID": 20, "PROFILE_NAME": "demoadmin2", "PROFILE_DESC": "checker", "INSTID": "TEST", "LOGINIPADDRESSREQUIRED": "0", "LOGINEXPIRYDATEREQUIRED": "0", "LOGINRETRYCOUNTREQUIRED": "0", "LOGINBRANCHCODEREQUIRED": "0", "USERPASSWORDREPEATABLE": "0", "USERPASSWORDEXPIRYCHECK": "0", "USERTYPE": "C", "USER_CODE": "24", "AUTH_CODE": "AUTHORIZED", "AUTH_DATE": "15-07-2024", "AUTH_BY": "adminchecker", "ADDED_BY": "adminmaker", "ADDED_DATE": "15-07-2024", "REMARKS": "AUTHORIZED" },
  { "PROFILE_ID": 18, "PROFILE_NAME": "CheckerDemo", "PROFILE_DESC": "checker", "INSTID": "TEST", "LOGINIPADDRESSREQUIRED": "0", "LOGINEXPIRYDATEREQUIRED": "0", "LOGINRETRYCOUNTREQUIRED": "0", "LOGINBRANCHCODEREQUIRED": "0", "USERPASSWORDREPEATABLE": "0", "USERPASSWORDEXPIRYCHECK": "0", "USERTYPE": "C", "USER_CODE": "24", "AUTH_CODE": "AUTHORIZED", "AUTH_DATE": "15-07-2024", "AUTH_BY": "adminchecker", "ADDED_BY": "adminmaker", "ADDED_DATE": "15-07-2024", "REMARKS": "AUTHORIZED" },
  ];
  globalFilterFields: any = [
    'INSTID',
    'PROFILE_ID',
    'PROFILE_NAME',
    'AUTH_DATE',
    'AUTH_CODE',
  ];

  cols = [
    { field: 'INSTID', header: 'INST ID' },
    { field: 'PROFILE_ID', header: 'PROFILE_ID' },
    { field: 'PROFILE_NAME', header: 'PROFILE_NAME' },
    { field: 'PROFILE_DESC', header: 'PROFILE_DESC' },
    { field: 'AUTH_DATE', header: 'ADDED_DATE' },
    { field: 'AUTH_CODE', header: 'STATUS' },
    { field: 'Action', header: 'Action', type: 'delete' },
  ];
  delete_visible: any;


  constructor(private location: Location) { }
  ngOnInit() {
    this.header = 'View Profile Delete Authorization'
  }
  goBack() {
    this.location.back();
  }
}
