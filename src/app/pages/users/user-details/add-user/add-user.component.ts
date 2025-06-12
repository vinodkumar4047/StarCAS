import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { RestService } from '../../../../layout/service/rest.service';
import { environment } from '../../../../../environments/environment';
import { take } from 'rxjs';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-add-user',
  imports: [CommonModule, Select, InputText, ButtonModule, FloatLabel, FormsModule, ReactiveFormsModule,ToastModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
  providers: [MessageService]
})
export class AddUserComponent {
  routeData: any = history.state;
  userForm!: FormGroup;
  saveCheck: boolean = false;
  institution: any = [];
  profileOtp: any = [
    { PROFILEID: "14", PROFILE_ID: 14, PROFILE_NAME: "TESTMAKER" },
    { PROFILEID: "16", PROFILE_ID: 16, PROFILE_NAME: "TESTCHECKER" },
    { PROFILEID: "17", PROFILE_ID: 17, PROFILE_NAME: "MakerDemo" },
    { PROFILEID: "18", PROFILE_ID: 18, PROFILE_NAME: "CheckerDemo" },
    { PROFILEID: "19", PROFILE_ID: 19, PROFILE_NAME: "demoadmin1" },
    { PROFILEID: "20", PROFILE_ID: 20, PROFILE_NAME: "demoadmin2" }
  ];
  branchOpt: any = [
    { BRANCHCODE: "634", BRANCHNAME: "HEAD OFFICE" },
    { BRANCHCODE: "000", BRANCHNAME: "Head Office" },
    { BRANCHCODE: "453", BRANCHNAME: "TEST OFFICE" }
  ];
  countryOpt: any = [
    { COUNTRYID: "110", COUNTRY: "India", COUNTRYCODE: "IND" },
    { COUNTRYID: "116", COUNTRY: "Cambodia", COUNTRYCODE: "KHM" },
    { COUNTRYID: "120", COUNTRY: "Cameroon", COUNTRYCODE: "CMR" },
    { COUNTRYID: "124", COUNTRY: "Canada", COUNTRYCODE: "CAN" },
    { COUNTRYID: "132", COUNTRY: "Cape Verde", COUNTRYCODE: "CPV" },
    { COUNTRYID: "136", COUNTRY: "Cayman Islands", COUNTRYCODE: "CYM" },
    { COUNTRYID: "140", COUNTRY: "Central African Republic", COUNTRYCODE: "CAF" }
  ]
  loading: boolean = false;


  constructor(private location: Location, private sanitizer: DomSanitizer,private messageService: MessageService,
     private fb: FormBuilder, private restApi: RestService) { }

  ngOnInit() {
    console.log(this.routeData, 'routedata');
    this.saveCheck = this.routeData?.type == 'addUser' ? true : false;
    this.userForm = this.fb.group({
      Profile: [null, Validators.required],
      Branch: [null, Validators.required],
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      // DOB: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: [null, Validators.required],
      instname: ['']
    });
    this.getprofileData();
    if (this.routeData?.type == 'edit' || this.routeData?.type == 'view') {
      this.setFormData(this.routeData?.data);
      this.userForm.disable();
    } else {
      this.userForm.enable();

    };
  }

  getprofileData() {
    // this.loading = true;
    this.restApi.get('/usermanagement/profile/getAllProfiles/P').pipe(
      take(1),
    ).subscribe({
      next: (res) => {
        if (res) {
          this.profileOtp = res.data
          console.log('taskManager data:', res)
        } else {
          console.warn('No data received or request failed.');
        }
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      },
      error: (err) => {
        console.error('Subscription error:', err);
        // this.loading = false;

      }
    });
  };

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Data:', this.userForm.value);
      // dede = {
      //     "this.userForm.value.Profile": "14",
      //     "Branch": "634",
      //     "username": "asxa",
      //     "firstname": "xasx",
      //     "lastname": "xasxasxa",
      //     "DOB": "2025-06-11T18:30:00.000Z",
      //     "email": "vinodkumar@cashlinkglobal.com",
      //     "mobile": "xasxas",
      //     "address": "asaxwdqwwq",
      //     "city": "qwdqw",
      //     "country": "India",
      //     "instname": ""
      // }
      let payload = {
        "instId":environment.adminInstId,
        "userName": this.userForm.value.username,
        "profileId": this.userForm.value.Profile,
        "firstName": this.userForm.value.firstname,
        "lastName": this.userForm.value.lastname,
        "emailId": this.userForm.value.email,
        "mobileNo": this.userForm.value.mobile,
        "address": this.userForm.value.address,
        "country": this.userForm.value.country,
        "city": this.userForm.value.city,
        "activeInactiveStatus": "1",
        "branchCode": this.userForm.value.Branch
      }

       this.restApi.post(payload, '/usermanagement/user/add').pipe(take(1)).subscribe({
            next: (res) => {
              console.log('addd', res);
               this.messageService.add({ severity: 'success', summary: 'Success', detail: res.message });
            },
            error: (err) => {
              console.error('addd Failed:', err);
            }
          });
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
    this.userForm.get('instname')?.disable()
    this.userForm.get('username')?.disable()
    this.saveCheck = true;
  }

  setFormData(data: any) {
    // Set top-level values in the form
    console.log(data, 'adas');

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
      instname: data?.INSTID
    });

  }

}
