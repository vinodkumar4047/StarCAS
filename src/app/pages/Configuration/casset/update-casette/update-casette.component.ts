import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { take } from 'rxjs';
import { RestService } from '../../../../layout/service/rest.service';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-update-casette',
  imports: [CommonModule, ButtonModule, FormsModule, FloatLabel, Select, InputText, TableModule, ReactiveFormsModule],
  templateUrl: './update-casette.component.html',
  styleUrl: './update-casette.component.scss'
})
export class UpdateCasetteComponent {
  atmIdOpt: any = [];
  atmId: any = null;
  denominationForm: FormGroup | any;
  denominations: any = [];

  constructor(private location: Location, private fb: FormBuilder, private restApi: RestService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.getATM();
    this.denominationForm = this.fb.group({
      batchId: [{ value: '', disabled: true }],
      atmId: [{ value: '', disabled: true }],
    });
  }


  goBack() {
    this.location.back();
  }

  getATM() {
    const instId = localStorage.getItem('instId')
    this.restApi.get(`/configuration/cassette/atmList?acquirerInst=${instId}`).pipe(
      take(1),
    ).subscribe({
      next: (res) => {
        console.log(res, '----res');
        this.atmIdOpt = res
      }
    })
  }

  getData(value: any) {
    this.denominations =  [];
    this.restApi.get(`/configuration/cassette/details?atmId=${value}`).pipe(take(1))
      .subscribe({
        next: (res) => {
          const denomDetails = res?.data?.atmDenomDetails[0];
          // Update form values
          this.denominationForm.patchValue({
            batchId: res?.data?.oldBatchId,
            atmId: res?.data?.selectedAtm
          });
          // Dynamically extract denomination keys
          const denomKeys = Object?.keys(denomDetails)
            ?.filter(key => key?.startsWith('denom_') && key.endsWith('_NOTESLOADED'))
            ?.map(key => key?.split('_')[1])
            ?.filter((value, index, self) => self?.indexOf(value) === index);

          // Create denomination objects
          this.denominations = denomKeys?.map((key) => {
            const denomination = parseInt(denomDetails[`denom${key?.toLowerCase()}value`] || 0, 10);
            const currencyCode = parseInt(denomDetails[`denom${key?.toLowerCase()}currcode`] || 0, 10);
            const notesLoaded = parseInt(denomDetails[`denom_${key}_NOTESLOADED`] || 0, 10);
            const notesDispensed = parseInt(denomDetails[`denom_${key}_NOTESDISP`] || 0, 10);
            const notesRemaining = notesLoaded - notesDispensed;

            return {
              id: key,
              denomination,
              currencyCode,
              notesLoaded,
              notesDispensed,
              notesRemaining,
            };
          });
          this.cd.detectChanges();
        }
      });
  }

  onAtmChange() {
    this.getData(this.atmId);
    this.cd.detectChanges();
  }

  onSubmit() {
    console.log(this.denominationForm.value, 'denominationForm');

    if (this.denominationForm.valid) {
      console.log('Form Data:', this.denominationForm.value);
      this.atmId = null;
      // Process the form data here 
    } else {
      console.log('Form is invalid', this.denominationForm);
      this.denominationForm.markAllAsTouched();
    }

  }

}
