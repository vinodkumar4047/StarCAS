import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, Component} from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';

@Component({
changeDetection:ChangeDetectionStrategy.OnPush,
  selector: 'app-add-mcc',
  imports: [InputTextModule, FormsModule, CommonModule, ButtonModule, ReactiveFormsModule,
    Select, FloatLabel],
  templateUrl: './add-mcc.component.html',
  styleUrl: './add-mcc.component.scss'
})
export class AddMccComponent {
  MccForm: any;
  routeData: any = history.state;
  MccCodeopt: any = [
    {
      "MCC_CODE": "7230",
      "MCC_DESC": "Barber and Beauty Shops"
    },
    {
      "MCC_CODE": "7251",
      "MCC_DESC": "Shoe Repair/Hat Cleaning"
    },
    {
      "MCC_CODE": "7261",
      "MCC_DESC": "Funeral Services, Crematories"
    },
    {
      "MCC_CODE": "7273",
      "MCC_DESC": "Dating/Escort Services"
    },
    {
      "MCC_CODE": "7276",
      "MCC_DESC": "Tax Preparation Services"
    },
    {
      "MCC_CODE": "7277",
      "MCC_DESC": "Counseling Services"
    },
    {
      "MCC_CODE": "7278",
      "MCC_DESC": "Buying/Shopping Services"
    },
    {
      "MCC_CODE": "7296",
      "MCC_DESC": "Clothing Rental"
    },
    {
      "MCC_CODE": "7297",
      "MCC_DESC": "Massage Parlors"
    },
    {
      "MCC_CODE": "7298",
      "MCC_DESC": "Health and Beauty Spas"
    },
    {
      "MCC_CODE": "7299",
      "MCC_DESC": "Miscellaneous General Services"
    },
    {
      "MCC_CODE": "7311",
      "MCC_DESC": "Advertising Services"
    },
    {
      "MCC_CODE": "7321",
      "MCC_DESC": "Credit Reporting Agencies"
    },
    {
      "MCC_CODE": "7333",
      "MCC_DESC": "Commercial Photography, Art and Graphics"
    },
    {
      "MCC_CODE": "7338",
      "MCC_DESC": "Quick Copy, Repro, and Blueprint"
    },
    {
      "MCC_CODE": "7339",
      "MCC_DESC": "Secretarial Support Services"
    },
    {
      "MCC_CODE": "7342",
      "MCC_DESC": "Exterminating Services"
    },
    {
      "MCC_CODE": "7349",
      "MCC_DESC": "Cleaning and Maintenance"
    },
    {
      "MCC_CODE": "7361",
      "MCC_DESC": "Employment/Temp Agencies"
    },
    {
      "MCC_CODE": "7372",
      "MCC_DESC": "Computer Programming"
    }
  ];
  StatusOpt: any = [
    { name: 'BLOCKED', code: 'BLOCKED' },
    { name: 'UNBLOCKED', code: 'UNBLOCKED' }
  ];
  constructor(private location: Location, private fb: FormBuilder) { }

  ngOnInit() {
    this.MccForm = this.fb.group({
      INSTID: ['Test', Validators.required],
      MccCode: [null, Validators.required],
      Status: [null, Validators.required]
    });
    this.MccForm.get('INSTID')?.disable();
  }

  goBack() {
    this.location.back();
  }
  onSubmit() {
    if (this.MccForm.valid) {
      console.log('Form Data:', this.MccForm.value);
      // Process the form data here 
    } else {
      console.log('Form is invalid', this.MccForm);
      this.MccForm.markAllAsTouched();
    }
  }
}
