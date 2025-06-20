import { ChangeDetectionStrategy, Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule, Location } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { LayoutService } from '../../layout/service/layout.service';
import { RestService } from '../../layout/service/rest.service';
import { DialogService } from '../../layout/component/commonDialog.service';
import { Router } from '@angular/router';

@Component({
changeDetection:ChangeDetectionStrategy.OnPush,
  standalone: true,
  selector: 'app-change-password',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FloatLabel,
    ButtonModule,
    PasswordModule
  ],
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  PasswordForm!: FormGroup;
  passwordValidationInp:any = {
      "id": "1",
      "instId": "CLFSC",
      "loweCase": "3",
      "upperCase": "1",
      "numbers": "3",
      "special": "1",
      "firstChar": "F",
      "lastChar": "L",
      "totalCount": "8",
      "createdDate": "2024-10-22 18:04:05.732",
      "modifiedDate": "NA",
      "createdBy": "1",
      "modifiedBy": "NA",
      "authStatus": "C",
      "reason": "NA",
      "pwdExpPeriod": "90",
      "pwdMinAge": "NA",
      "pwdReuseHist": "4",
      "mkckStatus": "C"
    }

  constructor(private fb: FormBuilder,public layoutService:LayoutService,private router: Router,
    public restApi:RestService,public dialogService:DialogService,private location: Location) {}

  ngOnInit(): void {
    this.layoutService.onMenuToggle()
    this.PasswordForm = this.fb.group({
      CurrentPassword: ['', Validators.required],
      NewPassword: ['', [Validators.required, this.passwordStrengthValidator()]],
      ConfirmPassword: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator()
    });
  } 
   goBack() {
    this.location.back();
  }
  
getPasswordRulesMessage(): string[] {
 const config = this.passwordValidationInp;
 return [
    `Your password should contain a minimum of ${config.totalCount} characters.`,
    `Your password should include at least:`,
    `• Lower Case: ${config.loweCase}`,
    `• Upper Case: ${config.upperCase}`,
    `• Number: ${config.numbers}`,
    `• Special Character: ${config.special}`
  ];
}

getFirstPasswordError(): string | null {
  const controlErrors = this.PasswordForm.get('NewPassword')?.errors?.['passwordStrength'];
  if (!controlErrors) return null;

  const errorKeys = ['lowercase', 'uppercase', 'numbers', 'special', 'firstChar', 'lastChar', 'totalLength'];

  for (const key of errorKeys) {
    if (controlErrors[key]) {
      return controlErrors[key];
    }
  }

  return null;
}

passwordStrengthValidator() {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const config = this.passwordValidationInp;

    const errors: any = {};

    const lowercaseMatches = (value.match(/[a-z]/g) || []).length;
    if (lowercaseMatches < +config.loweCase) {
      errors.lowercase = `At least ${config.loweCase} lowercase letter(s) required.`;
    }

    const uppercaseMatches = (value.match(/[A-Z]/g) || []).length;
    if (uppercaseMatches < +config.upperCase) {
      errors.uppercase = `At least ${config.upperCase} uppercase letter(s) required.`;
    }

    const numberMatches = (value.match(/[0-9]/g) || []).length;
    if (numberMatches < +config.numbers) {
      errors.numbers = `At least ${config.numbers} number(s) required.`;
    }

    const specialMatches = (value.match(/[!@#$%^&*(),.?":{}|<>]/g) || []).length;
    if (specialMatches < +config.special) {
      errors.special = `At least ${config.special} special character(s) required.`;
    }

    if (config.firstChar === 'F' && !/^[A-Za-z]/.test(value)) {
      errors.firstChar = `Password must start with a letter.`;
    }

    if (config.lastChar === 'L' && !/[A-Za-z0-9]$/.test(value)) {
      errors.lastChar = `Password must end with a letter or number.`;
    }

    if (value.length < +config.totalCount) {
      errors.totalLength = `Password must be at least ${config.totalCount} characters long.`;
    }

    return Object.keys(errors).length ? { passwordStrength: errors } : null;
  };
}


  passwordMatchValidator() {
    return (group: AbstractControl): ValidationErrors | null => {
      const newPassword = group.get('NewPassword')?.value;
      const confirmPassword = group.get('ConfirmPassword')?.value;

      return newPassword === confirmPassword ? null : { passwordMismatch: true };
    };
  }

 onSubmit() {
  if (this.PasswordForm.valid) {
    const currentPassword = this.PasswordForm.get('CurrentPassword')?.value;
    const newPassword = this.PasswordForm.get('NewPassword')?.value;
    const confirmPassword = this.PasswordForm.get('ConfirmPassword')?.value;
    const username = localStorage.getItem('username');

    const payload = {
      userName: username,
      oldPassword: currentPassword,
      firstPassword: newPassword,
      secondPassword: confirmPassword
    };

    this.restApi.post(payload, '/login/changePassword').subscribe({
      next: (res) => {
        if (res.respCode === '00') {
          this.router.navigate(['/auth/login'])
          this.dialogService.show('Success', res?.message, 'success', 3000);
        } else {
          this.dialogService.show('Oops!', res.message, 'error', 3000);
        }
      },
      error: (err) => {
        console.error('Password change failed', err);
        this.dialogService.show('Oops!', err?.message || 'Something went wrong', 'error');
      }
    });

  } else {
    console.log(this.PasswordForm,'this.PasswordForm');
    
    this.PasswordForm.markAllAsTouched();
  }
}

 ngOnDestroy(): void {
    this.layoutService.onMenuToggle(); 
  }

}
