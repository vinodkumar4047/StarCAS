import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonModule, CheckboxModule, InputTextModule, PasswordModule,
    ReactiveFormsModule, RouterModule, RippleModule, DropdownModule,
    AppFloatingConfigurator, SelectButton, CommonModule, FormsModule
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

  loginForm!: FormGroup;
  institutions = [
    { label: 'SCB', value: 'SCB' },
    { label: 'Institution B', value: 'institution_b' },
    { label: 'Institution C', value: 'institution_c' }
  ];

  constructor(private fb: FormBuilder, private router: Router, public restApi: RestService) { }

  ngOnInit(): void {
    localStorage.clear();
    sessionStorage.clear();
    this.loginForm = this.fb.group({
      username: [''],
      userPassword: [''],
      userInstitution: [null],
      rememberUser: [false],

      AdminUsername: [''],
      adminPassword: [''],
      rememberAdmin: [false]
    });

    // Set initial validators based on default selectedLogin
    this.setLoginValidators(this.selectedLogin.value);
  }

  setLoginValidators(loginType: string): void {
    if (loginType === 'user') {
      // User login validators
      this.loginForm.get('username')?.setValidators([Validators.required]);
      this.loginForm.get('userPassword')?.setValidators([Validators.required]);
      this.loginForm.get('userInstitution')?.setValidators([Validators.required]);

      // Clear admin validators
      this.loginForm.get('AdminUsername')?.clearValidators();
      this.loginForm.get('adminPassword')?.clearValidators();
    } else {
      // Admin login validators
      this.loginForm.get('AdminUsername')?.setValidators([Validators.required]);
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

  onUserLogin() {
    if (this.loginForm.valid) {
      const role = this.loginForm.value.username === 'checker' ? 'checker' : 'maker';
      localStorage.setItem('userRole', role);

      const payload = {
        "username": this.loginForm.value.username,
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

      localStorage.setItem('userRole', 'admin');

      const payload = {
        "username": this.loginForm.value.AdminUsername,
        "password": this.loginForm.value.adminPassword,
        "logintype": "admin",
        "instname": ""
      };

      this.login(payload);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  login(payload: any) {
    this.restApi.post(payload, '/auth').pipe(take(1)).subscribe({
      next: (res) => {
        console.log('Login Success:', res);
        localStorage.setItem('Token', res.Token);
        localStorage.setItem('userDetails', res.userDetails[0]);
        localStorage.setItem('instId', res.userDetails[0].instId);
        localStorage.setItem('userType', res.userDetails[0].userType);
        this.router.navigate(['/pages/dashboard']);
      },
      error: (err) => {
        console.error('Login Failed:', err);
      }
    });
    //for now
    //  this.router.navigate(['/pages/dashboard']);
  }
}
