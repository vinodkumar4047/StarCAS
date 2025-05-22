import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';

@Component({
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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.PasswordForm = this.fb.group({
      CurrentPassword: ['', Validators.required],
      NewPassword: ['', [Validators.required, this.passwordStrengthValidator()]],
      ConfirmPassword: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator()
    });
  }

   passwordStrengthValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value || '';
      const hasUpperCase = /[A-Z]/.test(value);
      const hasNumber = /\d/.test(value);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
      const minLength = value.length >= 8;

      const isValid = hasUpperCase && hasNumber && hasSpecialChar && minLength;

      return isValid ? null : { passwordStrength: true };
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
      console.log('Form Submitted:', this.PasswordForm.value);
      // TODO: Call API to update password
    } else {
      console.log('Form is invalid:', this.PasswordForm.errors);
      this.PasswordForm.markAllAsTouched();
    }
  }
}
