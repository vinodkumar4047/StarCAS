import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, Component} from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
changeDetection:ChangeDetectionStrategy.OnPush,
  selector: 'app-add-offline-pin-config',
  imports: [InputTextModule, FormsModule, CommonModule, ButtonModule, ReactiveFormsModule,
          DatePicker, FloatLabel],
  templateUrl: './add-offline-pin-config.component.html',
  styleUrl: './add-offline-pin-config.component.scss'
})
export class AddOfflinePinConfigComponent {
  offlineForm:any;
  routeData: any = history.state;
  constructor(private location: Location, private fb: FormBuilder) { }

  ngOnInit() {
    this.offlineForm = this.fb.group({
      INSTID: ['Test', Validators.required],
      CHN: ['', Validators.required],
      FromToDate: ['', Validators.required]
    });
    this.offlineForm.get('INSTID')?.disable();
  }

  goBack() {
    this.location.back();
  }
  onSubmit() {
    if (this.offlineForm.valid) {
      console.log('Form Data:', this.offlineForm.value);
      // Process the form data here 
  } else {
      console.log('Form is invalid', this.offlineForm);
      this.offlineForm.markAllAsTouched();
  }
  }
}
