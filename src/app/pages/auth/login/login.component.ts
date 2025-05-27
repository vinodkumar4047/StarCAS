import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../../layout/component/app.floatingconfigurator';
import { SelectButton } from 'primeng/selectbutton';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule,
    RippleModule, AppFloatingConfigurator,SelectButton,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
loginOptions = [
  { label: 'User Login', value: 'user' },
  { label: 'Admin Login', value: 'admin' }
];

selectedLogin = this.loginOptions[0]; // Default to 'User Login'

// Models
userEmail: string = '';
userPassword: string = '';
rememberUser: boolean = false;

adminEmail: string = '';
adminPassword: string = '';
rememberAdmin: boolean = false;
 constructor( private router : Router) { }
// Methods
onUserLogin() {
  // Add user login logic here
  console.log('User Login', this.userEmail, this.userPassword);
  localStorage.setItem('userRole', 'user');
  this.router.navigate(['/pages/dashboard']);
  
}

onAdminLogin() {
  // Add admin login logic here
  console.log('Admin Login', this.adminEmail, this.adminPassword);
   localStorage.setItem('userRole', 'admin');
  this.router.navigate(['/pages/dashboard']);
}

}
