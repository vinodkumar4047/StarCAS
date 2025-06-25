import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { SelectButton } from 'primeng/selectbutton';
import { take } from 'rxjs';
import { DialogService } from '../../../../layout/component/commonDialog.service';
import { Router } from '@angular/router';
import { RestService } from '../../../../layout/service/rest.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-add-email',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonModule, FloatLabel, Select, InputText, SelectButton],
  templateUrl: './add-email.component.html',
  styleUrl: './add-email.component.scss'
})
export class AddEmailComponent {
  groupIdOptions: any
  constructor(private location: Location, private fb: FormBuilder, private cdr: ChangeDetectorRef, private dialogService: DialogService, private router: Router, private restApi: RestService) { }

  emailForm!: FormGroup;
  institution = [
    { name: 'NTW_DOWN', code: '1' },
    { name: 'OUT_SEVR', code: '2' },
    { name: 'OFF_LINE', code: '3' },
    { name: 'WARNING', code: '4' },
  ];
  EMVOptions: any[] = [{ label: 'Add Id', value: 'addEmail' }, { label: 'Delete Id', value: 'deleteEmail' }];
  ngOnInit() {
    this.getGroupIdData()
    this.emailForm = this.fb.group({
      action: ['addEmail', Validators.required],
      emailId: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)]],
      groupIds: [null, Validators.required],
    });
  }

  goBack() {
    this.location.back();
  }
  onSubmit() {
    if (this.emailForm.valid) {
      console.log('Form Data:', this.emailForm.value);
      this.restApi.post(this.emailForm.value, '/utility/add-email', 'text').subscribe({
        next: (res) => {
          if (res) {
            this.dialogService.show('Success', res, 'success', 3000); // ✅ Success dialog
            // this.location.back()
            this.cdr.detectChanges();
          } else {
            this.dialogService.show('Error', res || 'Failed to update branch', 'error');
            // this.location.back()
            this.cdr.detectChanges();
          }
        },
        error: (err) => {
          this.dialogService.show('Oops!', err, 'error', 3000); // ✅ Error dialog
          // this.location.back()
          this.cdr.detectChanges();
        }
      });

      // Process the form data here 
    } else {
      console.log('Form is invalid', this.emailForm);
      this.emailForm.markAllAsTouched();
    }
  }
  getGroupIdData() {
    this.restApi.get('/utility/groupIds').pipe(
      take(1),
    ).subscribe({
      next: (res) => {
        if (res) {
          this.groupIdOptions = res.MAILALERTGROUPID.map((groupId: string) => ({
            label: groupId,
            value: groupId
          }));
          console.log(this.groupIdOptions);

          this.cdr.detectChanges();

          console.log('taskManager data:', res);
          this.cdr.detectChanges();
        } else {
          console.warn('No data received or request failed.');
        };
      },
      error: (err) => {
        console.error('Subscription error:', err);


      }
    });
  };
}
