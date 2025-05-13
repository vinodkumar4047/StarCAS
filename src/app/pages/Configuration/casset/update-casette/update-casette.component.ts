import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-update-casette',
  imports: [CommonModule, ButtonModule, FormsModule, FloatLabel, Select, InputText, TableModule, ReactiveFormsModule],
  templateUrl: './update-casette.component.html',
  styleUrl: './update-casette.component.scss'
})
export class UpdateCasetteComponent {
  atmIdOpt: any = [
    { name: 'Test001', code: '1' }, { name: 'Test002', code: '2' }
  ];
  atmId: any = null;
  denominationForm: FormGroup | any;

  denominations = [
    {
      id: 'A',
      denomination: 10000,
      currencyCode: 925,
      notesLoaded: 18925,
      notesDispensed: 4928,
      notesRemaining: 13997,
    },
    {
      id: 'B',
      denomination: 5000,
      currencyCode: 925,
      notesLoaded: 0,
      notesDispensed: 0,
      notesRemaining: 0,
    },
    {
      id: 'C',
      denomination: 1000,
      currencyCode: 925,
      notesLoaded: 0,
      notesDispensed: 0,
      notesRemaining: 0,
    },
    {
      id: 'D',
      denomination: 100,
      currencyCode: 925,
      notesLoaded: 0,
      notesDispensed: 0,
      notesRemaining: 0,
    },
  ];
  constructor(private location: Location, private fb: FormBuilder) { }

  ngOnInit() {
    this.denominationForm = this.fb.group({
      batchId: ['123456789000', Validators.required],
      atmId: ['TEST008', Validators.required],
      denominationsArray: this.fb.array(
        this.denominations.map(d =>
          this.fb.group({
            notesLoaded: [d.notesLoaded, [Validators.required, Validators.min(0)]]
          })
        )
      )
    });
  }

  get denominationsArray(): FormArray {
    return this.denominationForm.get('denominationsArray') as FormArray;
  }

  goBack() {
    this.location.back();
  }

  onSubmit(){
    console.log(this.denominationForm.value,'denominationForm');
    this.atmId = null;
    
  }

}
