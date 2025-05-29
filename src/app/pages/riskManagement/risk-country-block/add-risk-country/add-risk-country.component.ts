import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, Component} from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';

@Component({
changeDetection:ChangeDetectionStrategy.OnPush,
  selector: 'app-add-risk-country',
  imports: [InputTextModule, FormsModule, CommonModule, ButtonModule, ReactiveFormsModule,
      Select, FloatLabel],
  templateUrl: './add-risk-country.component.html',
  styleUrl: './add-risk-country.component.scss'
})
export class AddRiskCountryComponent {
 countryForm: any;
  routeData: any = history.state;
  countryNameopt: any = [
    {
        "COUNTRY_CODE": 93,
        "COUNTRY_NAME": "Afghanistan"
    },
    {
        "COUNTRY_CODE": 355,
        "COUNTRY_NAME": "Albania"
    },
    {
        "COUNTRY_CODE": 213,
        "COUNTRY_NAME": "Algeria"
    },
    {
        "COUNTRY_CODE": 1684,
        "COUNTRY_NAME": "American Samoa"
    },
    {
        "COUNTRY_CODE": 376,
        "COUNTRY_NAME": "Andorra"
    },
    {
        "COUNTRY_CODE": 244,
        "COUNTRY_NAME": "Angola"
    },
    {
        "COUNTRY_CODE": 1264,
        "COUNTRY_NAME": "Anguilla"
    },
    {
        "COUNTRY_CODE": 672,
        "COUNTRY_NAME": "Antarctica"
    },
    {
        "COUNTRY_CODE": 1268,
        "COUNTRY_NAME": "Antigua and Barbuda"
    },
    {
        "COUNTRY_CODE": 54,
        "COUNTRY_NAME": "Argentina"
    },
    {
        "COUNTRY_CODE": 374,
        "COUNTRY_NAME": "Armenia"
    },
    {
        "COUNTRY_CODE": 297,
        "COUNTRY_NAME": "Aruba"
    },
    {
        "COUNTRY_CODE": 61,
        "COUNTRY_NAME": "Australia"
    },
    {
        "COUNTRY_CODE": 43,
        "COUNTRY_NAME": "Austria"
    },
    {
        "COUNTRY_CODE": 994,
        "COUNTRY_NAME": "Azerbaijan"
    },
    {
        "COUNTRY_CODE": 1242,
        "COUNTRY_NAME": "Bahamas"
    },
    {
        "COUNTRY_CODE": 973,
        "COUNTRY_NAME": "Bahrain"
    },
    {
        "COUNTRY_CODE": 880,
        "COUNTRY_NAME": "Bangladesh"
    },
    {
        "COUNTRY_CODE": 1246,
        "COUNTRY_NAME": "Barbados"
    },
    {
        "COUNTRY_CODE": 375,
        "COUNTRY_NAME": "Belarus"
    },
    {
        "COUNTRY_CODE": 32,
        "COUNTRY_NAME": "Belgium"
    },
    {
        "COUNTRY_CODE": 501,
        "COUNTRY_NAME": "Belize"
    },
    {
        "COUNTRY_CODE": 229,
        "COUNTRY_NAME": "Benin"
    },
    {
        "COUNTRY_CODE": 1441,
        "COUNTRY_NAME": "Bermuda"
    },
    {
        "COUNTRY_CODE": 975,
        "COUNTRY_NAME": "Bhutan"
    },
    {
        "COUNTRY_CODE": 591,
        "COUNTRY_NAME": "Bolivia"
    },
    {
        "COUNTRY_CODE": 387,
        "COUNTRY_NAME": "Bosnia and Herzegovina"
    },
    {
        "COUNTRY_CODE": 267,
        "COUNTRY_NAME": "Botswana"
    },
    {
        "COUNTRY_CODE": 55,
        "COUNTRY_NAME": "Brazil"
    },
    {
        "COUNTRY_CODE": 1284,
        "COUNTRY_NAME": "British Virgin Islands"
    },
    {
        "COUNTRY_CODE": 673,
        "COUNTRY_NAME": "Brunei"
    },
    {
        "COUNTRY_CODE": 359,
        "COUNTRY_NAME": "Bulgaria"
    },
    {
        "COUNTRY_CODE": 226,
        "COUNTRY_NAME": "Burkina Faso"
    },
    {
        "COUNTRY_CODE": 95,
        "COUNTRY_NAME": "Burma (Myanmar)"
    },
    {
        "COUNTRY_CODE": 257,
        "COUNTRY_NAME": "Burundi"
    },
    {
        "COUNTRY_CODE": 855,
        "COUNTRY_NAME": "Cambodia"
    },
    {
        "COUNTRY_CODE": 237,
        "COUNTRY_NAME": "Cameroon"
    },
    {
        "COUNTRY_CODE": 1,
        "COUNTRY_NAME": "Canada"
    },
    {
        "COUNTRY_CODE": 238,
        "COUNTRY_NAME": "Cape Verde"
    },
    {
        "COUNTRY_CODE": 1345,
        "COUNTRY_NAME": "Cayman Islands"
    },
    {
        "COUNTRY_CODE": 236,
        "COUNTRY_NAME": "Central African Republic"
    },
    {
        "COUNTRY_CODE": 235,
        "COUNTRY_NAME": "Chad"
    },
    {
        "COUNTRY_CODE": 56,
        "COUNTRY_NAME": "Chile"
    },
    {
        "COUNTRY_CODE": 86,
        "COUNTRY_NAME": "China"
    },
    {
        "COUNTRY_CODE": 61,
        "COUNTRY_NAME": "Christmas Island"
    },
    {
        "COUNTRY_CODE": 61,
        "COUNTRY_NAME": "Cocos (Keeling) Islands"
    },
    {
        "COUNTRY_CODE": 57,
        "COUNTRY_NAME": "Colombia"
    },
    {
        "COUNTRY_CODE": 269,
        "COUNTRY_NAME": "Comoros"
    },
    {
        "COUNTRY_CODE": 682,
        "COUNTRY_NAME": "Cook Islands"
    },
    {
        "COUNTRY_CODE": 506,
        "COUNTRY_NAME": "Costa Rica"
    },
    {
        "COUNTRY_CODE": 385,
        "COUNTRY_NAME": "Croatia"
    },
    {
        "COUNTRY_CODE": 53,
        "COUNTRY_NAME": "Cuba"
    },
    {
        "COUNTRY_CODE": 357,
        "COUNTRY_NAME": "Cyprus"
    },
    {
        "COUNTRY_CODE": 420,
        "COUNTRY_NAME": "Czech Republic"
    },
    {
        "COUNTRY_CODE": 243,
        "COUNTRY_NAME": "Democratic Republic of the Congo"
    },
    {
        "COUNTRY_CODE": 45,
        "COUNTRY_NAME": "Denmark"
    },
    {
        "COUNTRY_CODE": 253,
        "COUNTRY_NAME": "Djibouti"
    },
    {
        "COUNTRY_CODE": 1767,
        "COUNTRY_NAME": "Dominica"
    },
    {
        "COUNTRY_CODE": 1809,
        "COUNTRY_NAME": "Dominican Republic"
    },
    {
        "COUNTRY_CODE": 593,
        "COUNTRY_NAME": "Ecuador"
    },
    {
        "COUNTRY_CODE": 20,
        "COUNTRY_NAME": "Egypt"
    },
    {
        "COUNTRY_CODE": 503,
        "COUNTRY_NAME": "El Salvador"
    },
    {
        "COUNTRY_CODE": 240,
        "COUNTRY_NAME": "Equatorial Guinea"
    },
    {
        "COUNTRY_CODE": 291,
        "COUNTRY_NAME": "Eritrea"
    },
    {
        "COUNTRY_CODE": 372,
        "COUNTRY_NAME": "Estonia"
    },
    {
        "COUNTRY_CODE": 251,
        "COUNTRY_NAME": "Ethiopia"
    },
    {
        "COUNTRY_CODE": 500,
        "COUNTRY_NAME": "Falkland Islands"
    },
    {
        "COUNTRY_CODE": 298,
        "COUNTRY_NAME": "Faroe Islands"
    },
    {
        "COUNTRY_CODE": 679,
        "COUNTRY_NAME": "Fiji"
    },
    {
        "COUNTRY_CODE": 358,
        "COUNTRY_NAME": "Finland"
    },
    {
        "COUNTRY_CODE": 33,
        "COUNTRY_NAME": "France"
    },
    {
        "COUNTRY_CODE": 689,
        "COUNTRY_NAME": "French Polynesia"
    },
    {
        "COUNTRY_CODE": 241,
        "COUNTRY_NAME": "Gabon"
    },
    {
        "COUNTRY_CODE": 220,
        "COUNTRY_NAME": "Gambia"
    },
    {
        "COUNTRY_CODE": 970,
        "COUNTRY_NAME": "Gaza Strip"
    },
    {
        "COUNTRY_CODE": 995,
        "COUNTRY_NAME": "Georgia"
    },
    {
        "COUNTRY_CODE": 49,
        "COUNTRY_NAME": "Germany"
    },
    {
        "COUNTRY_CODE": 233,
        "COUNTRY_NAME": "Ghana"
    },
    {
        "COUNTRY_CODE": 350,
        "COUNTRY_NAME": "Gibraltar"
    },
    {
        "COUNTRY_CODE": 30,
        "COUNTRY_NAME": "Greece"
    },
    {
        "COUNTRY_CODE": 299,
        "COUNTRY_NAME": "Greenland"
    },
    {
        "COUNTRY_CODE": 1473,
        "COUNTRY_NAME": "Grenada"
    },
    {
        "COUNTRY_CODE": 1671,
        "COUNTRY_NAME": "Guam"
    },
    {
        "COUNTRY_CODE": 502,
        "COUNTRY_NAME": "Guatemala"
    },
    {
        "COUNTRY_CODE": 224,
        "COUNTRY_NAME": "Guinea"
    },
    {
        "COUNTRY_CODE": 245,
        "COUNTRY_NAME": "Guinea-Bissau"
    },
    {
        "COUNTRY_CODE": 592,
        "COUNTRY_NAME": "Guyana"
    },
    {
        "COUNTRY_CODE": 509,
        "COUNTRY_NAME": "Haiti"
    },
    {
        "COUNTRY_CODE": 39,
        "COUNTRY_NAME": "Holy See (Vatican City)"
    },
    {
        "COUNTRY_CODE": 504,
        "COUNTRY_NAME": "Honduras"
    },
    {
        "COUNTRY_CODE": 852,
        "COUNTRY_NAME": "Hong Kong"
    },
    {
        "COUNTRY_CODE": 36,
        "COUNTRY_NAME": "Hungary"
    },
    {
        "COUNTRY_CODE": 354,
        "COUNTRY_NAME": "Iceland"
    },
    {
        "COUNTRY_CODE": 91,
        "COUNTRY_NAME": "India"
    },
    {
        "COUNTRY_CODE": 62,
        "COUNTRY_NAME": "Indonesia"
    },
    {
        "COUNTRY_CODE": 98,
        "COUNTRY_NAME": "Iran"
    },
    {
        "COUNTRY_CODE": 964,
        "COUNTRY_NAME": "Iraq"
    },
    {
        "COUNTRY_CODE": 353,
        "COUNTRY_NAME": "Ireland"
    },
    {
        "COUNTRY_CODE": 44,
        "COUNTRY_NAME": "Isle of Man"
    },
    {
        "COUNTRY_CODE": 972,
        "COUNTRY_NAME": "Israel"
    },
    {
        "COUNTRY_CODE": 39,
        "COUNTRY_NAME": "Italy"
    },
    {
        "COUNTRY_CODE": 225,
        "COUNTRY_NAME": "Ivory Coast"
    },
    {
        "COUNTRY_CODE": 1876,
        "COUNTRY_NAME": "Jamaica"
    },
    {
        "COUNTRY_CODE": 81,
        "COUNTRY_NAME": "Japan"
    },
    {
        "COUNTRY_CODE": 962,
        "COUNTRY_NAME": "Jordan"
    },
    {
        "COUNTRY_CODE": 7,
        "COUNTRY_NAME": "Kazakhstan"
    },
    {
        "COUNTRY_CODE": 254,
        "COUNTRY_NAME": "Kenya"
    },
    {
        "COUNTRY_CODE": 686,
        "COUNTRY_NAME": "Kiribati"
    },
    {
        "COUNTRY_CODE": 381,
        "COUNTRY_NAME": "Kosovo"
    },
    {
        "COUNTRY_CODE": 965,
        "COUNTRY_NAME": "Kuwait"
    },
    {
        "COUNTRY_CODE": 996,
        "COUNTRY_NAME": "Kyrgyzstan"
    },
    {
        "COUNTRY_CODE": 856,
        "COUNTRY_NAME": "Laos"
    },
    {
        "COUNTRY_CODE": 371,
        "COUNTRY_NAME": "Latvia"
    },
    {
        "COUNTRY_CODE": 961,
        "COUNTRY_NAME": "Lebanon"
    },
    {
        "COUNTRY_CODE": 266,
        "COUNTRY_NAME": "Lesotho"
    },
    {
        "COUNTRY_CODE": 231,
        "COUNTRY_NAME": "Liberia"
    },
    {
        "COUNTRY_CODE": 218,
        "COUNTRY_NAME": "Libya"
    },
    {
        "COUNTRY_CODE": 423,
        "COUNTRY_NAME": "Liechtenstein"
    },
    {
        "COUNTRY_CODE": 370,
        "COUNTRY_NAME": "Lithuania"
    },
    {
        "COUNTRY_CODE": 352,
        "COUNTRY_NAME": "Luxembourg"
    },
    {
        "COUNTRY_CODE": 853,
        "COUNTRY_NAME": "Macau"
    },
    {
        "COUNTRY_CODE": 389,
        "COUNTRY_NAME": "Macedonia"
    },
    {
        "COUNTRY_CODE": 261,
        "COUNTRY_NAME": "Madagascar"
    },
    {
        "COUNTRY_CODE": 265,
        "COUNTRY_NAME": "Malawi"
    },
    {
        "COUNTRY_CODE": 60,
        "COUNTRY_NAME": "Malaysia"
    },
    {
        "COUNTRY_CODE": 960,
        "COUNTRY_NAME": "Maldives"
    },
    {
        "COUNTRY_CODE": 223,
        "COUNTRY_NAME": "Mali"
    },
    {
        "COUNTRY_CODE": 356,
        "COUNTRY_NAME": "Malta"
    },
    {
        "COUNTRY_CODE": 692,
        "COUNTRY_NAME": "Marshall Islands"
    },
    {
        "COUNTRY_CODE": 222,
        "COUNTRY_NAME": "Mauritania"
    },
    {
        "COUNTRY_CODE": 230,
        "COUNTRY_NAME": "Mauritius"
    },
    {
        "COUNTRY_CODE": 262,
        "COUNTRY_NAME": "Mayotte"
    },
    {
        "COUNTRY_CODE": 52,
        "COUNTRY_NAME": "Mexico"
    },
    {
        "COUNTRY_CODE": 691,
        "COUNTRY_NAME": "Micronesia"
    },
    {
        "COUNTRY_CODE": 373,
        "COUNTRY_NAME": "Moldova"
    },
    {
        "COUNTRY_CODE": 377,
        "COUNTRY_NAME": "Monaco"
    },
    {
        "COUNTRY_CODE": 976,
        "COUNTRY_NAME": "Mongolia"
    },
    {
        "COUNTRY_CODE": 382,
        "COUNTRY_NAME": "Montenegro"
    },
    {
        "COUNTRY_CODE": 1664,
        "COUNTRY_NAME": "Montserrat"
    },
    {
        "COUNTRY_CODE": 212,
        "COUNTRY_NAME": "Morocco"
    },
    {
        "COUNTRY_CODE": 258,
        "COUNTRY_NAME": "Mozambique"
    },
    {
        "COUNTRY_CODE": 264,
        "COUNTRY_NAME": "Namibia"
    },
    {
        "COUNTRY_CODE": 674,
        "COUNTRY_NAME": "Nauru"
    },
    {
        "COUNTRY_CODE": 977,
        "COUNTRY_NAME": "Nepal"
    },
    {
        "COUNTRY_CODE": 31,
        "COUNTRY_NAME": "Netherlands"
    },
    {
        "COUNTRY_CODE": 599,
        "COUNTRY_NAME": "Netherlands Antilles"
    },
    {
        "COUNTRY_CODE": 687,
        "COUNTRY_NAME": "New Caledonia"
    },
    {
        "COUNTRY_CODE": 64,
        "COUNTRY_NAME": "New Zealand"
    },
    {
        "COUNTRY_CODE": 505,
        "COUNTRY_NAME": "Nicaragua"
    },
    {
        "COUNTRY_CODE": 227,
        "COUNTRY_NAME": "Niger"
    },
    {
        "COUNTRY_CODE": 234,
        "COUNTRY_NAME": "Nigeria"
    },
    {
        "COUNTRY_CODE": 683,
        "COUNTRY_NAME": "Niue"
    },
    {
        "COUNTRY_CODE": 672,
        "COUNTRY_NAME": "Norfolk Island"
    },
    {
        "COUNTRY_CODE": 850,
        "COUNTRY_NAME": "North Korea"
    },
    {
        "COUNTRY_CODE": 1670,
        "COUNTRY_NAME": "Northern Mariana Islands"
    },
    {
        "COUNTRY_CODE": 47,
        "COUNTRY_NAME": "Norway"
    },
    {
        "COUNTRY_CODE": 968,
        "COUNTRY_NAME": "Oman"
    },
    {
        "COUNTRY_CODE": 92,
        "COUNTRY_NAME": "Pakistan"
    },
    {
        "COUNTRY_CODE": 680,
        "COUNTRY_NAME": "Palau"
    },
    {
        "COUNTRY_CODE": 507,
        "COUNTRY_NAME": "Panama"
    },
    {
        "COUNTRY_CODE": 675,
        "COUNTRY_NAME": "Papua New Guinea"
    },
    {
        "COUNTRY_CODE": 595,
        "COUNTRY_NAME": "Paraguay"
    },
    {
        "COUNTRY_CODE": 51,
        "COUNTRY_NAME": "Peru"
    },
    {
        "COUNTRY_CODE": 63,
        "COUNTRY_NAME": "Philippines"
    },
    {
        "COUNTRY_CODE": 870,
        "COUNTRY_NAME": "Pitcairn Islands"
    },
    {
        "COUNTRY_CODE": 48,
        "COUNTRY_NAME": "Poland"
    },
    {
        "COUNTRY_CODE": 351,
        "COUNTRY_NAME": "Portugal"
    },
    {
        "COUNTRY_CODE": 1,
        "COUNTRY_NAME": "Puerto Rico"
    },
    {
        "COUNTRY_CODE": 974,
        "COUNTRY_NAME": "Qatar"
    },
    {
        "COUNTRY_CODE": 242,
        "COUNTRY_NAME": "Republic of the Congo"
    },
    {
        "COUNTRY_CODE": 40,
        "COUNTRY_NAME": "Romania"
    },
    {
        "COUNTRY_CODE": 7,
        "COUNTRY_NAME": "Russia"
    },
    {
        "COUNTRY_CODE": 250,
        "COUNTRY_NAME": "Rwanda"
    },
    {
        "COUNTRY_CODE": 590,
        "COUNTRY_NAME": "Saint Barthelemy"
    },
    {
        "COUNTRY_CODE": 290,
        "COUNTRY_NAME": "Saint Helena"
    },
    {
        "COUNTRY_CODE": 1869,
        "COUNTRY_NAME": "Saint Kitts and Nevis"
    },
    {
        "COUNTRY_CODE": 1758,
        "COUNTRY_NAME": "Saint Lucia"
    },
    {
        "COUNTRY_CODE": 1599,
        "COUNTRY_NAME": "Saint Martin"
    },
    {
        "COUNTRY_CODE": 508,
        "COUNTRY_NAME": "Saint Pierre and Miquelon"
    },
    {
        "COUNTRY_CODE": 1784,
        "COUNTRY_NAME": "Saint Vincent and the Grenadines"
    },
    {
        "COUNTRY_CODE": 685,
        "COUNTRY_NAME": "Samoa"
    },
    {
        "COUNTRY_CODE": 378,
        "COUNTRY_NAME": "San Marino"
    },
    {
        "COUNTRY_CODE": 239,
        "COUNTRY_NAME": "Sao Tome and Principe"
    },
    {
        "COUNTRY_CODE": 966,
        "COUNTRY_NAME": "Saudi Arabia"
    },
    {
        "COUNTRY_CODE": 221,
        "COUNTRY_NAME": "Senegal"
    },
    {
        "COUNTRY_CODE": 381,
        "COUNTRY_NAME": "Serbia"
    },
    {
        "COUNTRY_CODE": 248,
        "COUNTRY_NAME": "Seychelles"
    },
    {
        "COUNTRY_CODE": 232,
        "COUNTRY_NAME": "Sierra Leone"
    },
    {
        "COUNTRY_CODE": 65,
        "COUNTRY_NAME": "Singapore"
    },
    {
        "COUNTRY_CODE": 421,
        "COUNTRY_NAME": "Slovakia"
    },
    {
        "COUNTRY_CODE": 386,
        "COUNTRY_NAME": "Slovenia"
    },
    {
        "COUNTRY_CODE": 677,
        "COUNTRY_NAME": "Solomon Islands"
    },
    {
        "COUNTRY_CODE": 252,
        "COUNTRY_NAME": "Somalia"
    },
    {
        "COUNTRY_CODE": 27,
        "COUNTRY_NAME": "South Africa"
    },
    {
        "COUNTRY_CODE": 82,
        "COUNTRY_NAME": "South Korea"
    },
    {
        "COUNTRY_CODE": 34,
        "COUNTRY_NAME": "Spain"
    },
    {
        "COUNTRY_CODE": 94,
        "COUNTRY_NAME": "Sri Lanka"
    },
    {
        "COUNTRY_CODE": 249,
        "COUNTRY_NAME": "Sudan"
    },
    {
        "COUNTRY_CODE": 597,
        "COUNTRY_NAME": "Suriname"
    },
    {
        "COUNTRY_CODE": 268,
        "COUNTRY_NAME": "Swaziland"
    },
    {
        "COUNTRY_CODE": 46,
        "COUNTRY_NAME": "Sweden"
    },
    {
        "COUNTRY_CODE": 41,
        "COUNTRY_NAME": "Switzerland"
    },
    {
        "COUNTRY_CODE": 963,
        "COUNTRY_NAME": "Syria"
    },
    {
        "COUNTRY_CODE": 886,
        "COUNTRY_NAME": "Taiwan"
    },
    {
        "COUNTRY_CODE": 992,
        "COUNTRY_NAME": "Tajikistan"
    },
    {
        "COUNTRY_CODE": 255,
        "COUNTRY_NAME": "Tanzania"
    },
    {
        "COUNTRY_CODE": 66,
        "COUNTRY_NAME": "Thailand"
    },
    {
        "COUNTRY_CODE": 670,
        "COUNTRY_NAME": "Timor-Leste"
    },
    {
        "COUNTRY_CODE": 228,
        "COUNTRY_NAME": "Togo"
    },
    {
        "COUNTRY_CODE": 690,
        "COUNTRY_NAME": "Tokelau"
    },
    {
        "COUNTRY_CODE": 676,
        "COUNTRY_NAME": "Tonga"
    },
    {
        "COUNTRY_CODE": 1868,
        "COUNTRY_NAME": "Trinidad and Tobago"
    },
    {
        "COUNTRY_CODE": 216,
        "COUNTRY_NAME": "Tunisia"
    },
    {
        "COUNTRY_CODE": 90,
        "COUNTRY_NAME": "Turkey"
    },
    {
        "COUNTRY_CODE": 993,
        "COUNTRY_NAME": "Turkmenistan"
    },
    {
        "COUNTRY_CODE": 1649,
        "COUNTRY_NAME": "Turks and Caicos Islands"
    },
    {
        "COUNTRY_CODE": 688,
        "COUNTRY_NAME": "Tuvalu"
    },
    {
        "COUNTRY_CODE": 256,
        "COUNTRY_NAME": "Uganda"
    },
    {
        "COUNTRY_CODE": 380,
        "COUNTRY_NAME": "Ukraine"
    },
    {
        "COUNTRY_CODE": 971,
        "COUNTRY_NAME": "United Arab Emirates"
    },
    {
        "COUNTRY_CODE": 44,
        "COUNTRY_NAME": "United Kingdom"
    },
    {
        "COUNTRY_CODE": 1,
        "COUNTRY_NAME": "United States"
    },
    {
        "COUNTRY_CODE": 598,
        "COUNTRY_NAME": "Uruguay"
    },
    {
        "COUNTRY_CODE": 1340,
        "COUNTRY_NAME": "US Virgin Islands"
    },
    {
        "COUNTRY_CODE": 998,
        "COUNTRY_NAME": "Uzbekistan"
    },
    {
        "COUNTRY_CODE": 678,
        "COUNTRY_NAME": "Vanuatu"
    },
    {
        "COUNTRY_CODE": 58,
        "COUNTRY_NAME": "Venezuela"
    },
    {
        "COUNTRY_CODE": 84,
        "COUNTRY_NAME": "Vietnam"
    },
    {
        "COUNTRY_CODE": 681,
        "COUNTRY_NAME": "Wallis and Futuna"
    },
    {
        "COUNTRY_CODE": 970,
        "COUNTRY_NAME": "West Bank"
    },
    {
        "COUNTRY_CODE": 967,
        "COUNTRY_NAME": "Yemen"
    },
    {
        "COUNTRY_CODE": 260,
        "COUNTRY_NAME": "Zambia"
    },
    {
        "COUNTRY_CODE": 263,
        "COUNTRY_NAME": "Zimbabwe"
    }
];
  StatusOpt: any = [
    { name: 'BLOCKED', code: 'BLOCKED' },
    { name: 'UNBLOCKED', code: 'UNBLOCKED' }
  ];
  constructor(private location: Location, private fb: FormBuilder) { }

  ngOnInit() {
    this.countryForm = this.fb.group({
      INSTID: ['Test', Validators.required],
      countryName: [null, Validators.required],
      Status: [null, Validators.required]
    });
    this.countryForm.get('INSTID')?.disable();
  }

  goBack() {
    this.location.back();
  }
  onSubmit() {
    if (this.countryForm.valid) {
      console.log('Form Data:', this.countryForm.value);
      // Process the form data here 
    } else {
      console.log('Form is invalid', this.countryForm);
      this.countryForm.markAllAsTouched();
    }
  }
}
