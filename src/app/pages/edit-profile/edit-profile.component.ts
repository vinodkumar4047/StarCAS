import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { ProductService } from '../service/product.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LayoutService } from '../../layout/service/layout.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  imports: [CommonModule,FloatLabel,Select,InputText,ButtonModule,ConfirmPopupModule,FormsModule,ReactiveFormsModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss',
    providers: [ProductService, ConfirmationService, MessageService]
})
export class EditProfileComponent {
imageUrl:any;
@ViewChild('fileInput') fileInput!: ElementRef;
countryOpt:any=[
    {
        "COUNTRYID": "116",
        "COUNTRYNAME": "Cambodia",
        "COUNTRYCODE": "KHM"
    },
    {
        "COUNTRYID": "120",
        "COUNTRYNAME": "Cameroon",
        "COUNTRYCODE": "CMR"
    },
    {
        "COUNTRYID": "124",
        "COUNTRYNAME": "Canada",
        "COUNTRYCODE": "CAN"
    },
    {
        "COUNTRYID": "132",
        "COUNTRYNAME": "Cape Verde",
        "COUNTRYCODE": "CPV"
    },
    {
        "COUNTRYID": "136",
        "COUNTRYNAME": "Cayman Islands",
        "COUNTRYCODE": "CYM"
    },
    {
        "COUNTRYID": "140",
        "COUNTRYNAME": "Central African Republic",
        "COUNTRYCODE": "CAF"
    },
    {
        "COUNTRYID": "148",
        "COUNTRYNAME": "Chad",
        "COUNTRYCODE": "TCD"
    },
    {
        "COUNTRYID": "152",
        "COUNTRYNAME": "Chile",
        "COUNTRYCODE": "CHL"
    },
    {
        "COUNTRYID": "156",
        "COUNTRYNAME": "China",
        "COUNTRYCODE": "CHN"
    },
    {
        "COUNTRYID": "344",
        "COUNTRYNAME": "Hong Kong, SAR China",
        "COUNTRYCODE": "HKG"
    },
    {
        "COUNTRYID": "446",
        "COUNTRYNAME": "Macao SAR China",
        "COUNTRYCODE": "MAC"
    },
    {
        "COUNTRYID": "162",
        "COUNTRYNAME": "Christmas Island",
        "COUNTRYCODE": "CXR"
    },
    {
        "COUNTRYID": "170",
        "COUNTRYNAME": "Colombia",
        "COUNTRYCODE": "COL"
    },
    {
        "COUNTRYID": "166",
        "COUNTRYNAME": "Cocos (Keeling) Islands",
        "COUNTRYCODE": "CCK"
    },
    {
        "COUNTRYID": "174",
        "COUNTRYNAME": "Comoros",
        "COUNTRYCODE": "COM"
    },
    {
        "COUNTRYID": "178",
        "COUNTRYNAME": "Congo (Brazzaville)",
        "COUNTRYCODE": "COG"
    },
    {
        "COUNTRYID": "180",
        "COUNTRYNAME": "Congo, (Kinshasa)",
        "COUNTRYCODE": "COD"
    },
    {
        "COUNTRYID": "184",
        "COUNTRYNAME": "Cook Islands",
        "COUNTRYCODE": "COK"
    },
    {
        "COUNTRYID": "188",
        "COUNTRYNAME": "Costa Rica",
        "COUNTRYCODE": "CRI"
    },
    {
        "COUNTRYID": "384",
        "COUNTRYNAME": "Côte dIvoire",
        "COUNTRYCODE": "CIV"
    },
    {
        "COUNTRYID": "191",
        "COUNTRYNAME": "Croatia",
        "COUNTRYCODE": "HRV"
    },
    {
        "COUNTRYID": "192",
        "COUNTRYNAME": "Cuba",
        "COUNTRYCODE": "CUB"
    },
    {
        "COUNTRYID": "196",
        "COUNTRYNAME": "Cyprus",
        "COUNTRYCODE": "CYP"
    },
    {
        "COUNTRYID": "203",
        "COUNTRYNAME": "Czech Republic",
        "COUNTRYCODE": "CZE"
    },
    {
        "COUNTRYID": "208",
        "COUNTRYNAME": "Denmark",
        "COUNTRYCODE": "DNK"
    },
    {
        "COUNTRYID": "262",
        "COUNTRYNAME": "Djibouti",
        "COUNTRYCODE": "DJI"
    },
    {
        "COUNTRYID": "212",
        "COUNTRYNAME": "Dominica",
        "COUNTRYCODE": "DMA"
    },
    {
        "COUNTRYID": "214",
        "COUNTRYNAME": "Dominican Republic",
        "COUNTRYCODE": "DOM"
    },
    {
        "COUNTRYID": "218",
        "COUNTRYNAME": "Ecuador",
        "COUNTRYCODE": "ECU"
    },
    {
        "COUNTRYID": "818",
        "COUNTRYNAME": "Egypt",
        "COUNTRYCODE": "EGY"
    },
    {
        "COUNTRYID": "222",
        "COUNTRYNAME": "El Salvador",
        "COUNTRYCODE": "SLV"
    },
    {
        "COUNTRYID": "226",
        "COUNTRYNAME": "Equatorial Guinea",
        "COUNTRYCODE": "GNQ"
    },
    {
        "COUNTRYID": "232",
        "COUNTRYNAME": "Eritrea",
        "COUNTRYCODE": "ERI"
    },
    {
        "COUNTRYID": "233",
        "COUNTRYNAME": "Estonia",
        "COUNTRYCODE": "EST"
    },
    {
        "COUNTRYID": "231",
        "COUNTRYNAME": "Ethiopia",
        "COUNTRYCODE": "ETH"
    },
    {
        "COUNTRYID": "238",
        "COUNTRYNAME": "Falkland Islands (Malvinas)",
        "COUNTRYCODE": "FLK"
    },
    {
        "COUNTRYID": "234",
        "COUNTRYNAME": "Faroe Islands",
        "COUNTRYCODE": "FRO"
    },
    {
        "COUNTRYID": "242",
        "COUNTRYNAME": "Fiji",
        "COUNTRYCODE": "FJI"
    },
    {
        "COUNTRYID": "246",
        "COUNTRYNAME": "Finland",
        "COUNTRYCODE": "FIN"
    },
    {
        "COUNTRYID": "250",
        "COUNTRYNAME": "France",
        "COUNTRYCODE": "FRA"
    },
    {
        "COUNTRYID": "254",
        "COUNTRYNAME": "French Guiana",
        "COUNTRYCODE": "GUF"
    },
    {
        "COUNTRYID": "258",
        "COUNTRYNAME": "French Polynesia",
        "COUNTRYCODE": "PYF"
    },
    {
        "COUNTRYID": "260",
        "COUNTRYNAME": "French Southern Territories",
        "COUNTRYCODE": "ATF"
    },
    {
        "COUNTRYID": "266",
        "COUNTRYNAME": "Gabon",
        "COUNTRYCODE": "GAB"
    },
    {
        "COUNTRYID": "270",
        "COUNTRYNAME": "Gambia",
        "COUNTRYCODE": "GMB"
    },
    {
        "COUNTRYID": "268",
        "COUNTRYNAME": "Georgia",
        "COUNTRYCODE": "GEO"
    },
    {
        "COUNTRYID": "276",
        "COUNTRYNAME": "Germany",
        "COUNTRYCODE": "DEU"
    },
    {
        "COUNTRYID": "288",
        "COUNTRYNAME": "Ghana",
        "COUNTRYCODE": "GHA"
    },
    {
        "COUNTRYID": "292",
        "COUNTRYNAME": "Gibraltar",
        "COUNTRYCODE": "GIB"
    },
    {
        "COUNTRYID": "300",
        "COUNTRYNAME": "Greece",
        "COUNTRYCODE": "GRC"
    },
    {
        "COUNTRYID": "304",
        "COUNTRYNAME": "Greenland ",
        "COUNTRYCODE": "GRL"
    },
    {
        "COUNTRYID": "308",
        "COUNTRYNAME": "Grenada",
        "COUNTRYCODE": "GRD"
    },
    {
        "COUNTRYID": "308",
        "COUNTRYNAME": "Grenada",
        "COUNTRYCODE": "GRD"
    },
    {
        "COUNTRYID": "312",
        "COUNTRYNAME": "Guadeloupe",
        "COUNTRYCODE": "GLP"
    },
    {
        "COUNTRYID": "316",
        "COUNTRYNAME": "Guam",
        "COUNTRYCODE": "GUM"
    },
    {
        "COUNTRYID": "320",
        "COUNTRYNAME": "Guatemala",
        "COUNTRYCODE": "GTM"
    },
    {
        "COUNTRYID": "831",
        "COUNTRYNAME": "Guernsey",
        "COUNTRYCODE": "GGY"
    },
    {
        "COUNTRYID": "324",
        "COUNTRYNAME": "Guinea",
        "COUNTRYCODE": "GIN"
    },
    {
        "COUNTRYID": "624",
        "COUNTRYNAME": "Guinea-Bissau",
        "COUNTRYCODE": "\tGNB "
    },
    {
        "COUNTRYID": "328",
        "COUNTRYNAME": "Guyana",
        "COUNTRYCODE": "GUY"
    },
    {
        "COUNTRYID": "332",
        "COUNTRYNAME": "Haiti",
        "COUNTRYCODE": "HTI"
    },
    {
        "COUNTRYID": "334",
        "COUNTRYNAME": "Heard and Mcdonald Islands",
        "COUNTRYCODE": "HMD"
    },
    {
        "COUNTRYID": "336",
        "COUNTRYNAME": "Holy See (Vatican City State)",
        "COUNTRYCODE": "VAT"
    },
    {
        "COUNTRYID": "340",
        "COUNTRYNAME": "Honduras",
        "COUNTRYCODE": "HND"
    },
    {
        "COUNTRYID": "348",
        "COUNTRYNAME": "Hungary",
        "COUNTRYCODE": "HUN"
    },
    {
        "COUNTRYID": "352",
        "COUNTRYNAME": "Iceland",
        "COUNTRYCODE": "ISL"
    },
    {
        "COUNTRYID": "356",
        "COUNTRYNAME": "India",
        "COUNTRYCODE": "IND"
    },
    {
        "COUNTRYID": "360",
        "COUNTRYNAME": "Indonesia",
        "COUNTRYCODE": "IDN"
    },
    {
        "COUNTRYID": "364",
        "COUNTRYNAME": "Iran, Islamic Republic of",
        "COUNTRYCODE": "IRN"
    },
    {
        "COUNTRYID": "368",
        "COUNTRYNAME": "Iraq",
        "COUNTRYCODE": "IRQ"
    },
    {
        "COUNTRYID": "372",
        "COUNTRYNAME": "Ireland",
        "COUNTRYCODE": "IRL"
    },
    {
        "COUNTRYID": "833",
        "COUNTRYNAME": "Isle of Man",
        "COUNTRYCODE": "IMN"
    },
    {
        "COUNTRYID": "376",
        "COUNTRYNAME": "Israel",
        "COUNTRYCODE": "ISR"
    },
    {
        "COUNTRYID": "380",
        "COUNTRYNAME": "Italy",
        "COUNTRYCODE": "ITA"
    },
    {
        "COUNTRYID": "388",
        "COUNTRYNAME": "Jamaica",
        "COUNTRYCODE": "JAM"
    },
    {
        "COUNTRYID": "392",
        "COUNTRYNAME": "Japan",
        "COUNTRYCODE": "JPN"
    }];
  profileForm!: FormGroup;
 constructor(private productService: ProductService, public layoutService: LayoutService, private fb :FormBuilder,
    private confirmationService: ConfirmationService, private messageService: MessageService,
   ) {};
   
  ngOnInit(): void {
    this.initializeForm();
    this.setProfileData(); // to patch values
  }

  initializeForm() {
    this.profileForm = this.fb.group({
      UserName: [{ value: '', disabled: true }, Validators.required],
      ProfileName: [{ value: '', disabled: true }, Validators.required],
      InstName: [{ value: '', disabled: true }, Validators.required],
      CBSUserName: ['', Validators.required],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      DOB: [{ value: '', disabled: true }, Validators.required],
      EmailId: [{ value: '', disabled: true }, [Validators.required, Validators.email]],
      MobileNo: [{ value: '', disabled: true }, Validators.required],
      Address: ['', Validators.required],
      City: ['', Validators.required],
      Country: [null, Validators.required]  // Bind to COUNTRYID
    });
  }

  setProfileData() {
    const userData = {
      UserName: 'Victor_047',
      ProfileName: 'Victor Blackwood',
      InstName: 'Sample Institute',
      CBSUserName: 'victor.cbs',
      FirstName: 'Victor',
      LastName: 'Blackwood',
      DOB: '01/01/1990',
      EmailId: 'victor@example.com',
      MobileNo: '9876543210',
      Address: '123 Street Name',
      City: 'Chennai',
      Country: '356' // COUNTRYID
    };

    this.profileForm.patchValue(userData);
  }

  triggerFileInputClick(): void {
    this.fileInput.nativeElement.click();
  }

  upload(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Change Profile ',
      rejectButtonProps: {
        label: 'Remove',
        severity: 'secondary',
        outlined: true
      },
      acceptButtonProps: {
        label: 'Upload'
      },
      accept: () => {
        this.triggerFileInputClick();
      },
      reject: () => {
        this.imageUrl = '';
      },
    });
  }


  onImageSelected(event: Event): void {
    console.log(event, 'evernt');

    const input = event.target as HTMLInputElement;
    if (input?.files?.[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.imageUrl = reader.result;
      };

      reader.readAsDataURL(file);
      this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
    }
  }

  onSubmit(){
    console.log(this.profileForm.value,'profileForm');
   
    if (this.profileForm.valid) {
      console.log('Form Data:', this.profileForm.value); 
      // Process the form data here 
  } else {
      console.log('Form is invalid', this.profileForm);
      this.profileForm.markAllAsTouched();
  }
    
  }
}
