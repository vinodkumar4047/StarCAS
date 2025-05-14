import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';

@Component({
  selector: 'app-add-user',
  imports: [CommonModule, Select, DatePicker, InputText, ButtonModule, FloatLabel, FormsModule, ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  routeData: any = history.state;
  userForm!: FormGroup;
  saveCheck: boolean = false;
institution: any = [];
profileOtp:any = [
  { PROFILEID: "14", PROFILE_ID: 14, PROFILE_NAME: "TESTMAKER" },
  { PROFILEID: "16", PROFILE_ID: 16, PROFILE_NAME: "TESTCHECKER" },
  { PROFILEID: "17", PROFILE_ID: 17, PROFILE_NAME: "MakerDemo" },
  { PROFILEID: "18", PROFILE_ID: 18, PROFILE_NAME: "CheckerDemo" },
  { PROFILEID: "19", PROFILE_ID: 19, PROFILE_NAME: "demoadmin1" },
  { PROFILEID: "20", PROFILE_ID: 20, PROFILE_NAME: "demoadmin2" }
];
branchOpt:any =[
  { BRANCHCODE: "634", BRANCHNAME: "HEAD OFFICE" },
  { BRANCHCODE: "000", BRANCHNAME: "Head Office" },
  { BRANCHCODE: "453", BRANCHNAME: "TEST OFFICE" }
];
countryOpt:any = [
  { COUNTRY: "India" },
  { COUNTRY: "Haiti" }
]



  constructor(private location: Location, private sanitizer: DomSanitizer, private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.routeData, 'routedata');
    this.saveCheck = this.routeData?.type == 'addUser' ? true : false;
    this.userForm = this.fb.group({
      Profile: [null, Validators.required],
      Branch: [null, Validators.required],
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      DOB: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: [null, Validators.required],
    });

    if (this.routeData?.type == 'edit' || this.routeData?.type == 'view') {
      this.setFormData(this.routeData?.data);
      this.userForm.disable();
    } else {
      this.userForm.enable();

    };
  }


  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Data:', this.userForm.value);
      // Process the form data here 
      if (this.routeData?.type == 'Edit') {
        this.saveCheck = false;
        this.userForm.disable();
      }
    } else {
      console.log('Form is invalid', this.userForm);
      this.userForm.markAllAsTouched();
    }
  }

  goBack() {
    this.location.back();
  }

  editEnable() {
    this.userForm.enable();
    this.saveCheck = true;
  }

  setFormData(data: any) {
    // Set top-level values in the form
    console.log(data,'adas');
    
    this.userForm.patchValue({
      Profile: data?.PROFILEID,
      Branch: data?.BRANCHCODE,
      username: data?.USERNAME,
      firstname: data?.FIRSTNAME,
      lastname: data?.LASTNAME,
      DOB: data?.DOB,
      email: data?.EMAILID,
      mobile: data?.MOBILENO,
      address: data?.ADDRESS,
      city: data?.CITY,
      country: data?.COUNTRY,
    });

  }

}
