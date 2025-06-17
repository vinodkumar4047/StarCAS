import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { AppFloatingConfigurator } from '../../../layout/component/app.floatingconfigurator';
import { SelectButton } from 'primeng/selectbutton';
import { CommonModule } from '@angular/common';
import { RestService } from '../../../layout/service/rest.service';
import { take } from 'rxjs';
import { MenuService } from '../../../layout/service/menu.service';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DialogService } from '../../../layout/component/commonDialog.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FloatLabelModule,
    ReactiveFormsModule, RouterModule, RippleModule, DropdownModule, CommonModule,
    AppFloatingConfigurator, SelectButton, CommonModule, FormsModule, DialogModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginOptions = [
    { label: 'User Login', value: 'user' },
    { label: 'Admin Login', value: 'admin' }
  ];
  selectedLogin = this.loginOptions[0]; // Default to 'User Login'
  forgotPass: boolean = false;
  loginForm!: FormGroup;
  showChangePasswordDialog = false;
  formData = {
    username: '',
    CurrentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  institutions = [
    { label: 'SCB', value: 'SCB' },
    { label: 'Institution B', value: 'institution_b' },
    { label: 'Institution C', value: 'institution_c' }
  ];

readonly usernameValidators = [Validators.required, Validators.maxLength(25)];

  constructor(private fb: FormBuilder, private router: Router, public restApi: RestService,private dialogService:DialogService,
    public menuSer: MenuService, private cd: ChangeDetectorRef) { }

ngOnInit(): void {
  this.loginForm = this.fb.group({
    username: ['', []],
    userPassword: ['', []],
    userInstitution: [null],
    rememberUser: [false],

    AdminUsername: ['', []],
    adminPassword: ['', []],
    rememberAdmin: [false]
  });

  this.setLoginValidators(this.selectedLogin.value);
}

  setLoginValidators(loginType: string): void {
    if (loginType === 'user') {
      // User login validators
         this.loginForm.get('username')?.setValidators(this.usernameValidators);
    this.loginForm.get('userPassword')?.setValidators([Validators.required]);
    this.loginForm.get('userInstitution')?.setValidators([Validators.required]);

      // Clear admin validators
      this.loginForm.get('AdminUsername')?.clearValidators();
      this.loginForm.get('adminPassword')?.clearValidators();
    } else {
      // Admin login validators
   this.loginForm.get('AdminUsername')?.setValidators(this.usernameValidators);
    this.loginForm.get('adminPassword')?.setValidators([Validators.required]);

      // Clear user validators
      this.loginForm.get('username')?.clearValidators();
      this.loginForm.get('userPassword')?.clearValidators();
      this.loginForm.get('userInstitution')?.clearValidators();
    }

    // Update validity
    Object.keys(this.loginForm.controls).forEach(field => {
      this.loginForm.get(field)?.updateValueAndValidity();
    });
  }

  forgotPasswordValidation() {
   this.loginForm.get('username')?.setValidators(this.usernameValidators);
  this.loginForm.get('userInstitution')?.setValidators([Validators.required]);
    this.loginForm.get('userPassword')?.clearValidators();
    this.loginForm.get('AdminUsername')?.clearValidators();
    this.loginForm.get('adminPassword')?.clearValidators();
    this.forgotPass = true;
  }

  forgotPassword() {
    if (this.loginForm.valid) {

      this.restApi.post(null, `/login/forgotPassword/${String(this.loginForm.value.username)?.trim()}`).subscribe({
        next: (res) => {
           if(res.respCode == '00'){
             console.log('User forgotPassword successfully:', res);
          this.forgotPass = false;
          this.cd.detectChanges();
          this.dialogService.show('Success', res?.respDesc, 'success');
           }else{
             this.dialogService.show('Oops!', res.respDesc, 'error');
          }
         
        },
        error: (err) => this.dialogService.show('Oops!', err.respDesc, 'error')
      });
    } else {
      this.loginForm.markAllAsTouched();
    }

  }

  onUserLogin() {
    if (this.loginForm.valid) {
      const role = this.loginForm.value.username === 'checker' ? 'checker' : 'maker';
      localStorage.setItem('userRole', role);

      const payload = {
        "username": String(this.loginForm.value.username)?.trim(),
        "password": this.loginForm.value.userPassword,
        "logintype": "user",
        "instname": this.loginForm.value.userInstitution
      };
      console.log(payload, 'payload');

      this.login(payload);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  onAdminLogin() {
    if (this.loginForm.valid) {

      // localStorage.setItem('userRole', 'admin');

      const payload = {
        "username": String(this.loginForm.value.AdminUsername)?.trim(),
        "password": this.loginForm.value.adminPassword,
        "logintype": "admin",
        "instname": ""
      };

      this.login(payload);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  onSubmitPassword() {
    const { username, CurrentPassword, newPassword, confirmPassword } = this.formData;

    // Basic validation
    if (!username || !CurrentPassword || !newPassword || !confirmPassword) {
      alert('All fields are required!');
      return;
    }

    if (newPassword.length < 6) {
      alert('New Password must be at least 6 characters long!');
      return;
    }

    if (newPassword !== confirmPassword) {
      alert('New Password and Confirm Password do not match!');
      return;
    }

    // Prepare payload for API
    const payload = {
      userName: username,
      oldPassword: CurrentPassword,
      firstPassword: newPassword,
      secondPassword: confirmPassword
    };

    // API call to change password
    this.restApi.post(payload, '/login/changePassword').subscribe({
      next: (res) => {
       if(res.respCode == '00'){
           // Reset form and close dialog
        this.formData = {
          username: '',
          CurrentPassword: '',
          newPassword: '',
          confirmPassword: ''
        };
        this.showChangePasswordDialog = false;
          this.dialogService.show('Success', res?.respDesc, 'success');
        }else{
             this.dialogService.show('Oops!', res.respDesc, 'error');
        }

      
      },
      error: (err) => {
        console.error('Password change failed', err);
       this.dialogService.show('Oops!', err.respDesc, 'error');
      }
    });
  }



  onCloseDialog() {
    // Optional logic when dialog is closed
    console.log('Dialog closed');
  }

  login(payload: any) {
    this.restApi.post(payload, '/login/auth').pipe(take(1)).subscribe({
      next: (res) => {
        if (res?.respDesc == 'Switch to Change Password Page') {
          this.showChangePasswordDialog = !this.showChangePasswordDialog;
          this.cd.detectChanges();
        } else {
          if(res.respCode == '00'){
             console.log('Login Success:', res);
          localStorage.setItem('userRole', res.userDetails[0].userId);
          localStorage.setItem('authToken', res.Token);
          localStorage.setItem('Token', res.Token);
          // localStorage.setItem('userDetails', res.userDetails[0]);
          localStorage.setItem('instId', res.userDetails[0].instId);
          localStorage.setItem('userType', res.userDetails[0].userType);
          this.router.navigate(['/pages/dashboard']);
          this.menuSer.menuItems = res.menuId;
          this.dialogService.show('Success', res?.respDesc, 'success');
          console.log("Menu Items:", this.menuSer.menuItems);
          }else{
             this.dialogService.show('Oops!', res.respDesc, 'error');
          }
         
        }

        // this.menuSer.menuItems =
        //   [
        //     {
        //       "title": "Dashboard",
        //       "link": "dashboard",
        //       "icon": "layout-dashboard",
        //       "color": "#1b5e20",
        //       "menuId": "M000001",
        //       "checked": true
        //     },
        //     {
        //       "title": "Configuration",
        //       "icon": "wrench",
        //       "color": "#1b5e20", 
        //       "menuId": "M000002",
        //       "checked": true,
        //       "subMenu": [
        //         {
        //           "title": "Institution",
        //           "link": "institution",
        //           "icon": "fa-solid fa-credit-card",
        //           "color": "#1b5e20",
        //           "menuId": "M00000201",
        //           "checked": true,
        //           "permissions": [
        //             {
        //               "title": "View Institution",
        //               "menuId": "M0000020101",
        //               "checked": true
        //             },
        //           ]
        //         },
        //         {
        //           "title": "Branch",
        //           "link": "branch",
        //           "icon": "fa-solid fa-credit-card",
        //           "color": "#1b5e20",
        //           "menuId": "M00000202",
        //           "checked": true,
        //           "permissions": [
        //             { "title": "Delete Authorize Branch", "menuId": "M0000020201", "checked": true },
        //             { "title": "Authorize Branch", "menuId": "M0000020202", "checked": true },
        //             { "title": "Add Branch", "menuId": "M0000020203", "checked": true },
        //             { "title": "View Branch", "menuId": "M0000020204", "checked": true },
        //             { "title": "Edit Branch", "menuId": "M0000020205", "checked": true },
        //             { "title": "Delete Branch", "menuId": "M0000020206", "checked": true }
        //           ]
        //         },
        //         {
        //           "title": "BIN",
        //           "link": "bin",
        //           "icon": "fa-solid fa-credit-card",
        //           "color": "#1b5e20",
        //           "menuId": "M00000203",
        //           "checked": true,
        //           "permissions": [
        //             { "title": "View BIN", "menuId": "M0000020301", "checked": true },
        //           ]
        //         },
        //         {
        //           "title": "ATM Type",
        //           "link": "atmType",
        //           "icon": "fa-solid fa-credit-card",
        //           "color": "#1b5e20",
        //           "menuId": "M00000204",
        //           "checked": true,
        //           "permissions": [
        //             {
        //               "title": "View ATM Type",
        //               "menuId": "M0000020401",
        //               "checked": true
        //             },
        //             {
        //               "title": "Add ATM Type",
        //               "menuId": "M0000020402",
        //               "checked": true
        //             }
        //           ]
        //         },
        //         {
        //           "title": "ATM",
        //           "link": "atm",
        //           "icon": "fa-solid fa-credit-card",
        //           "color": "#1b5e20",
        //           "menuId": "M00000205",
        //           "checked": true,
        //           "permissions": [
        //             {
        //               "title": "Authorize ATM",
        //               "menuId": "M0000020501",
        //               "checked": true
        //             },
        //             {
        //               "title": "Authorize Delete ATM",
        //               "menuId": "M0000020502",
        //               "checked": true
        //             },
        //             {
        //               "title": "Add ATM",
        //               "menuId": "M0000020503",
        //               "checked": true
        //             },
        //             {
        //               "title": "View ATM",
        //               "menuId": "M0000020504",
        //               "checked": true
        //             },
        //             {
        //               "title": "Edit ATM",
        //               "menuId": "M0000020505",
        //               "checked": true
        //             },
        //             {
        //               "title": "Delete ATM",
        //               "menuId": "M0000020506",
        //               "checked": true
        //             }
        //           ]
        //         },
        //         {
        //           "title": "External BIN",
        //           "link": "externalBin",
        //           "icon": "fa-solid fa-credit-card",
        //           "color": "#1b5e20",
        //           "menuId": "M00000206",
        //           "checked": true,
        //           "permissions": [
        //             {
        //               "title": "Authorize External Bin",
        //               "menuId": "M0000020601",
        //               "checked": true
        //             },
        //             {
        //               "title": "Delete Authorize External Bin",
        //               "menuId": "M0000020602",
        //               "checked": true
        //             },
        //             {
        //               "title": "Add External Bin",
        //               "menuId": "M0000020603",
        //               "checked": true
        //             },
        //             {
        //               "title": "View External Bin",
        //               "menuId": "M0000020604",
        //               "checked": true
        //             },
        //             {
        //               "title": "Edit External Bin",
        //               "menuId": "M0000020605",
        //               "checked": true
        //             },
        //             {
        //               "title": "Delete External Bin",
        //               "menuId": "M0000020606",
        //               "checked": true
        //             }
        //           ]
        //         },
        //         {
        //           "title": "FIT",
        //           "link": "fit",
        //           "icon": "fa-solid fa-credit-card",
        //           "color": "#1b5e20",
        //           "menuId": "M00000207",
        //           "checked": true,
        //           "permissions": [
        //             {
        //               "title": "Authorize Fit",
        //               "menuId": "M0000020701",
        //               "checked": true
        //             },
        //             {
        //               "title": "Delete Authorize Fit",
        //               "menuId": "M0000020702",
        //               "checked": true
        //             },
        //             {
        //               "title": "Add Fit",
        //               "menuId": "M0000020703",
        //               "checked": true
        //             },
        //             {
        //               "title": "View Fit",
        //               "menuId": "M0000020704",
        //               "checked": true
        //             },
        //             {
        //               "title": "Edit Fit",
        //               "menuId": "M0000020705",
        //               "checked": true
        //             },
        //             {
        //               "title": "Delete Fit",
        //               "menuId": "M0000020706",
        //               "checked": true
        //             }
        //           ]
        //         },
        //         {
        //           "title": "Casette",
        //           "link": "casset",
        //           "icon": "fa-solid fa-credit-card",
        //           "color": "#1b5e20",
        //           "menuId": "M00000208",
        //           "checked": true,
        //           "permissions": [
        //             {
        //               "title": "Authorize Casette",
        //               "menuId": "M0000020801",
        //               "checked": true
        //             },
        //             {
        //               "title": "Update Casette",
        //               "menuId": "M0000020802",
        //               "checked": true
        //             }
        //           ]
        //         },
        //         {
        //           "title": "Port",
        //           "link": "port",
        //           "icon": "fa-solid fa-credit-card",
        //           "color": "#1b5e20",
        //           "menuId": "M00000209",
        //           "checked": true,
        //           "permissions": [
        //             {
        //               "title": "View Port",
        //               "menuId": "M0000020901",
        //               "checked": true
        //             }
        //           ]
        //         },
        //         {
        //           "title": "Transaction",
        //           "link": "transaction",
        //           "icon": "fa-solid fa-credit-card",
        //           "color": "#1b5e20",
        //           "menuId": "M00000210",
        //           "checked": true,
        //           "permissions": [
        //             {
        //               "title": "View Transaction",
        //               "menuId": "M0000021001",
        //               "checked": true
        //             }
        //           ]
        //         }
        //       ]
        //     },

        //     {
        //       "title": "Monitoring",
        //       "icon": "monitor",
        //       "color": "#1b5e20",
        //       "menuId": "M000003",
        //       "checked": true,
        //       "subMenu": [
        //         {
        //           "title": "Network Monitoring",
        //           "link": "network_Monitoring",
        //           "icon": "fa fa-id-card",
        //           "color": "#1b5e20",
        //           "menuId": "M00000301",
        //           "checked": true
        //         },
        //         {
        //           "title": "HSM Monitoring",
        //           "link": "hsm_Monitoring",
        //           "icon": "fa fa-user-plus",
        //           "color": "#1b5e20",
        //           "menuId": "M00000302",
        //           "checked": true,
        //         },
        //         {
        //           "title": "TXN Monitoring",
        //           "link": "txn_Monitoring",
        //           "icon": "fa fa-user-plus",
        //           "color": "#1b5e20",
        //           "menuId": "M00000303",
        //           "checked": true,
        //         },
        //         {
        //           "title": "ATM Monitoring",
        //           "link": "atm_Monitoring",
        //           "icon": "fa fa-user-plus",
        //           "color": "#1b5e20",
        //           "menuId": "M00000304",
        //           "checked": true,
        //         },
        //         {
        //           "title": "Transaction Search",
        //           "link": "transaction_Search",
        //           "icon": "fa fa-user-plus",
        //           "color": "#1b5e20",
        //           "menuId": "M00000305",
        //           "checked": true,
        //         },
        //         {
        //           "title": "Fraud Monitoring",
        //           "link": "fraud_Monitoring",
        //           "icon": "fa fa-user-plus",
        //           "color": "#1b5e20",
        //           "menuId": "M00000306",
        //           "checked": true,
        //         },
        //         {
        //           "title": "Fraud and Risk Txn Management",
        //           "link": "FraduRisk_TxnMonitoring",
        //           "icon": "fa fa-user-plus",
        //           "color": "#1b5e20",
        //           "menuId": "M00000307",
        //           "checked": true,
        //         },
        //       ]
        //     },

        //     {
        //       "title": "Control",
        //       "icon": "SlidersHorizontal",
        //       "color": "#1b5e20",
        //       "menuId": "M000004",
        //       "checked": true,
        //       "subMenu": [
        //         {
        //           "title": "Task Manager",
        //           "link": "task_Manager",
        //           "icon": "fa-solid fa-file",
        //           "color": "#1b5e20",
        //           "menuId": "M00000401",
        //           "checked": true
        //         },
        //         {
        //           "title": "Port Manager",
        //           "link": "port_Manager",
        //           "icon": "fa-solid fa-file",
        //           "color": "#1b5e20",
        //           "menuId": "M00000402",
        //           "checked": true
        //         },
        //         {
        //           "title": "Channel Manager",
        //           "link": "instant-IND",
        //           "icon": "fa-solid fa-file",
        //           "color": "#1b5e20",
        //           "menuId": "M00000403",
        //           "checked": true
        //         },
        //         {
        //           "title": "Network Control",
        //           "link": "network_Control",
        //           "icon": "fa-solid fa-file",
        //           "color": "#1b5e20",
        //           "menuId": "M00000404",
        //           "checked": true
        //         },
        //         {
        //           "title": "ATM Controller",
        //           "link": "atm_control",
        //           "icon": "fa fa-home",
        //           "color": "#1b5e20",
        //           "menuId": "M00000405",
        //           "checked": true
        //         },
        //         {
        //           "title": "Control Monitoring",
        //           "link": "control_Monitoring",
        //           "icon": "fa fa-envelope-square",
        //           "color": "#1b5e20",
        //           "menuId": "M00000406",
        //           "checked": true
        //         },
        //       ]
        //     },
        //     {
        //       "title": "Risk Management",
        //       "icon": "shield-alert",
        //       "color": "#1b5e20",
        //       "menuId": "M000005",
        //       "checked": true,
        //       "subMenu": [
        //         {
        //           "title": "International TXN Enabled",
        //           "link": "internationalTXNEnadisable",
        //           "icon": "fa-solid fa-person-chalkboard",
        //           "color": "#1b5e20",
        //           "menuId": "M00000501",
        //           "checked": true,
        //           "permissions": [
        //             {
        //               "title": "Edit Fraud",
        //               "menuId": "M0000050101",
        //               "checked": true
        //             }
        //           ]
        //         },
        //         {
        //           "title": "TXN Allow Without PIN",
        //           "link": "txnAllowWithoutPin",
        //           "icon": "fa-solid fa-person-chalkboard",
        //           "color": "#1b5e20",
        //           "menuId": "M00000501",
        //           "checked": true,
        //           "permissions": [
        //             { "title": "Authorize Card", "menuId": "M0000050201", "checked": true },
        //             { "title": "Auth Deleted Card", "menuId": "M0000050202", "checked": true },
        //             { "title": "View Card", "menuId": "M0000050203", "checked": true },
        //             { "title": "Delete Card", "menuId": "M0000050204", "checked": true },
        //             { "title": "Edit Card", "menuId": "M0000050205", "checked": true },
        //             { "title": "Add Card", "menuId": "M0000050206", "checked": true }
        //           ]
        //         },
        //         {
        //           "title": "Risk Country Block",
        //           "link": "riskCountryBlock",
        //           "icon": "fa-solid fa-person-chalkboard",
        //           "color": "#1b5e20",
        //           "menuId": "M00000501",
        //           "checked": true,
        //           "permissions": [
        //             { "title": "Authorize Country", "menuId": "M0000050301", "checked": true },
        //             { "title": "View Country", "menuId": "M0000050302", "checked": true },
        //             { "title": "Add Country", "menuId": "M0000050303", "checked": true },
        //             { "title": "Edit Country", "menuId": "M0000050304", "checked": true }
        //           ]
        //         },
        //         {
        //           "title": "TXN Allow For Risk Country",
        //           "link": "txnAllowedRiskCountry",
        //           "icon": "fa-solid fa-person-chalkboard",
        //           "color": "#1b5e20",
        //           "menuId": "M00000501",
        //           "checked": true,
        //           "permissions": [
        //             { "title": "Authorize Card", "menuId": "M0000050401", "checked": true },
        //             { "title": "View Card", "menuId": "M0000050402", "checked": true },
        //             { "title": "Add Card", "menuId": "M0000050403", "checked": true },
        //             { "title": "Delete Card", "menuId": "M0000050404", "checked": true }
        //           ]
        //         },
        //         {
        //           "title": "MCC Block",
        //           "link": "mccBlock",
        //           "icon": "fa-solid fa-person-chalkboard",
        //           "color": "#1b5e20",
        //           "menuId": "M00000501",
        //           "checked": true,
        //           "permissions": [
        //             { "title": "Authorize Delete MCC", "menuId": "M0000050501", "checked": true },
        //             { "title": "Authorize MCC", "menuId": "M0000050502", "checked": true },
        //             { "title": "Add MCC", "menuId": "M0000050503", "checked": true },
        //             { "title": "Edit MCC", "menuId": "M0000050504", "checked": true },
        //             { "title": "Add Allowed", "menuId": "M0000050505", "checked": true },
        //             { "title": "Delete MCC", "menuId": "M0000050506", "checked": true },
        //             { "title": "View MCC", "menuId": "M0000050507", "checked": true }
        //           ]
        //         },
        //         {
        //           "title": "TXN Allow For Blocked MCC",
        //           "link": "txnAllowBlockedMCC",
        //           "icon": "fa-solid fa-person-chalkboard",
        //           "color": "#1b5e20",
        //           "menuId": "M00000501",
        //           "checked": true,
        //           "permissions": [
        //             { "title": "Authorize Card", "menuId": "M0000050601", "checked": true },
        //             { "title": "Auth Deleted Card", "menuId": "M0000050602", "checked": true },
        //             { "title": "View Card", "menuId": "M0000050603", "checked": true },
        //             { "title": "Delete Card", "menuId": "M0000050604", "checked": true },
        //             { "title": "Edit Card", "menuId": "M0000050605", "checked": true },
        //             { "title": "Add Card", "menuId": "M0000050606", "checked": true }
        //           ]
        //         },
        //         {
        //           "title": "Risk Ecom Site Block",
        //           "link": "riskEcomSiteBlock",
        //           "icon": "fa-solid fa-person-chalkboard",
        //           "color": "#1b5e20",
        //           "menuId": "M00000501",
        //           "checked": true,
        //           "permissions": [
        //             { "title": "Delete Authorize", "menuId": "M0000050701", "checked": true },
        //             { "title": "Authorize Location", "menuId": "M0000050702", "checked": true },
        //             { "title": "View Location", "menuId": "M0000050703", "checked": true },
        //             { "title": "Add Location", "menuId": "M0000050704", "checked": true },
        //             { "title": "Delete Location", "menuId": "M0000050705", "checked": true }
        //           ]
        //         },
        //       ]
        //     },
        //     {
        //       "title": "Reports",
        //       "icon": "message-circle-warning",
        //       "color": "#1b5e20",
        //       "menuId": "M000006",
        //       "checked": true,
        //       "subMenu": [
        //         {
        //           "title": "MIS REPORT",
        //           "link": "mis-report",
        //           "icon": "fa-solid fa-chart-line",
        //           "color": "#1b5e20",
        //           "menuId": "M00000601",
        //           "checked": true,
        //           "permissions": [
        //             { "title": "Atm Cash Scroll", "menuId": "M0000060101", "checked": true },
        //             { "title": "Atm Performance", "menuId": "M0000060102", "checked": true },
        //             { "title": "ATM Live Denom Report", "menuId": "M0000060103", "checked": true },
        //             { "title": "Atm Transaction Status", "menuId": "M0000060104", "checked": true }
        //           ]
        //         },
        //         {
        //           "title": "SUMMARY REPORTS",
        //           "link": "summary-reports",
        //           "icon": "fa-solid fa-chart-pie",
        //           "color": "#1b5e20",
        //           "menuId": "M00000602",
        //           "checked": true,
        //           "permissions": [
        //             { "title": "Consolidated Report", "menuId": "M0000060201", "checked": true },
        //             { "title": "Network Summary Report", "menuId": "M0000060202", "checked": true },
        //             { "title": "OFUS_Txn Report", "menuId": "M0000060203", "checked": true }
        //           ]
        //         },
        //         {
        //           "title": "TERMINAL TRANSACTION REPORTS",
        //           "link": "terminal-txn-reports",
        //           "icon": "fa-solid fa-terminal",
        //           "color": "#1b5e20",
        //           "menuId": "M00000603",
        //           "checked": true,
        //           "permissions": [
        //             { "title": "ATM TRANSACTION Report", "menuId": "M0000060301", "checked": true }
        //           ]
        //         },
        //         {
        //           "title": "AUDIT REPORTS",
        //           "link": "audit-reports",
        //           "icon": "fa-solid fa-clipboard-check",
        //           "color": "#1b5e20",
        //           "menuId": "M00000604",
        //           "checked": true,
        //           "permissions": [
        //             { "title": "AUDIT REPORTS", "menuId": "M0000060401", "checked": true }
        //           ]
        //         }
        //       ]
        //     },
        //     {
        //       "title": "Utility",
        //       "icon": "plug",
        //       "color": "#1b5e20",
        //       "menuId": "M000007",
        //       "checked": true,
        //       "subMenu": [
        //         {
        //           "title": "Email Update",
        //           "icon": "fa-solid fa-address-card",
        //           "color": "#1b5e20",
        //           "link": "email_update",
        //           "menuId": "M00000701",
        //           "checked": true,
        //           "permissions": [
        //             { "title": "View Email", "menuId": "M0000070101", "checked": true },
        //             { "title": "Add Email", "menuId": "M0000070102", "checked": true },
        //             { "title": "Delete Email", "menuId": "M0000070103", "checked": true }
        //           ]
        //         },
        //         {
        //           "title": "Modile Update",
        //           "icon": "fa-solid fa-address-card",
        //           "color": "#1b5e20",
        //           "link": "mobile_update",
        //           "menuId": "M00000702",
        //           "checked": true, "permissions": [
        //             { "title": "View Mobile", "menuId": "M0000070201", "checked": true },
        //             { "title": "Add Mobile", "menuId": "M0000070202", "checked": true },
        //             { "title": "Delete Mobile", "menuId": "M0000070203", "checked": true }
        //           ]

        //         },
        //         {
        //           "title": "SAF Mnagement",
        //           "link": "saf",
        //           "icon": "fa-solid fa-address-card",
        //           "color": "#1b5e20",
        //           "menuId": "M00000703",
        //           "checked": true
        //         },
        //         {
        //           "title": "Admin Card",
        //           "link": "admin_card",
        //           "icon": "fa-solid fa-address-card",
        //           "color": "#1b5e20",
        //           "menuId": "M00000704",
        //           "checked": true
        //         },
        //       ]
        //     },
        //     {
        //       "title": "User Management",
        //       "link": "Rnf-details",
        //       "icon": "user-cog",
        //       "color": "#1b5e20",
        //       "menuId": "M000008",
        //       "checked": true,
        //       "subMenu": [
        //         {
        //           "title": "Profile",
        //           "icon": "fa-solid fa-address-card",
        //           "color": "#1b5e20",
        //           "link": "profile",
        //           "menuId": "M00000801",
        //           "checked": true,
        //           "permissions": [
        //             { "title": "Deleted Authorization", "menuId": "M0000080101", "checked": true },
        //             { "title": "Add Profile", "menuId": "M0000080102", "checked": true },
        //             { "title": "Edit Profile", "menuId": "M0000080103", "checked": true },
        //             { "title": "Delete Profile", "menuId": "M0000080104", "checked": true },
        //             { "title": "View Profile", "menuId": "M0000080105", "checked": true }
        //           ]
        //         },
        //         {
        //           "title": "User",
        //           "icon": "fa-solid fa-address-card",
        //           "color": "#1b5e20",
        //           "link": "user",
        //           "menuId": "M00000802",
        //           "checked": true,
        //           "permissions": [
        //             { "title": "Authorize User", "menuId": "M0000080201", "checked": true },
        //             { "title": "Unblock User", "menuId": "M0000080202", "checked": true },
        //             { "title": "Reset Password", "menuId": "M0000080203", "checked": true },
        //             { "title": "Block User", "menuId": "M0000080204", "checked": true },
        //             { "title": "Delete User Authorization", "menuId": "M0000080205", "checked": true },
        //             { "title": "Add User", "menuId": "M0000080206", "checked": true },
        //             { "title": "Edit User", "menuId": "M0000080207", "checked": true },
        //             { "title": "View User", "menuId": "M0000080208", "checked": true },
        //             { "title": "Delete User", "menuId": "M0000080209", "checked": true }
        //           ]
        //         },]
        //     },
        //   ];
        console.log(this.menuSer.menuItems, 'menuItems');

      },
      error: (err) => {
        console.error('Login Failed:', err);
         this.dialogService.show('Oops!', err.respDesc, 'error');
      }
    });
    //for now
    //  this.router.navigate(['/pages/dashboard']);
  }
}
