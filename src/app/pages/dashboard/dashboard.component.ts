import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { Product, ProductService } from '../service/product.service';
import { TableModule } from 'primeng/table';
import { RippleModule } from 'primeng/ripple';
import { debounceTime, Subscription, of } from 'rxjs';
import { LayoutService } from '../../layout/service/layout.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService, MessageService } from 'primeng/api';
import { RestService } from '../../layout/service/rest.service';
import { catchError } from 'rxjs/operators';
import { Select } from 'primeng/select';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    ButtonModule,
    MenuModule,
    TableModule,
    RippleModule,
    ChartModule,
    ConfirmPopupModule,
    Select,FloatLabelModule,FormsModule
  ],
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  providers: [ProductService, ConfirmationService, MessageService]
})
export class DashboardComponent {
  menu = null;
  chartData: any;
  chartOptions: any;
  subscription!: Subscription;
  imageUrl: any = 'assets/images/user.png';
  items = [
    { label: 'Add New', icon: 'pi pi-fw pi-plus' },
    { label: 'Remove', icon: 'pi pi-fw pi-trash' }
  ];

  @ViewChild('fileInput') fileInput!: ElementRef;
  products!: Product[];
  userInfo: any = {
    "USERID": 24,
    "USERNAME": "demomaker",
    "USERPASSWORD": "EX0vrfvtYYZpSZzc+9a7hBX9H+o=",
    "PROFILEID": 12,
    "FIRSTNAME": "TEST",
    "LASTNAME": "s",
    "EMAILID": "Test123@gmail.com",
    "USERSTATUS": "1",
    "DESCRIPTION": "---",
    "BRANCHCODE": "000",
    "IPADDRESS": "N",
    "RETRYCOUNT": 0,
    "USERBLOCK": "0",
    "EXPIRYDATE": "N",
    "CREATIONDATE": 1720117800000,
    "LOGINSTATUS": 0,
    "FIRSTTIME": 0,
    "PASSWORDEXPIRYDATE": "N",
    "PASSWORDEXPIRYFLAG": 0,
    "MODIFIEDDATE": null,
    "INSTID": "TEST",
    "CREATEDUSERID": "SU",
    "FORGOTPASSWORDFLAG": "0",
    "LASTLOGIN": "24-APR-25 16:25:25",
    "USERTYPE": "IM",
    "PSWREPEATCOUNT": "N",
    "FRSTLOGINDATE": "16-APR-25",
    "FRSTLOGIN": "L",
    "FORCEPSWEXP": "N",
    "SALT_KEY": "tz925I+/U9c=",
    "CHANGPASS_DATE": 1744799304000,
    "ADDED_BY": "superadmin1",
    "ADDED_DATE": 1720157300000,
    "AUTH_STATUS": "1",
    "AUTH_BY": "superadmin2",
    "AUTH_DATE": 1720157356000,
    "REMARKS": "AUTHORIZED",
    "UNBLOCKED_BY": null,
    "UNBLOCKED_DATE": null,
    "UNBLOCK_AUTHBY": null,
    "UNBLOCK_AUTHDATE": null,
    "PASSWDRESET_BY": "superadmin1",
    "PASSWDRESET_DATE": 1744799293000,
    "PASSWD_RESETAUTHBY": null,
    "PASSWD_RESETDATE": null,
    "DELETED_BY": null,
    "DELETED_DATE": null,
    "DELETED_FLAG": null,
    "CBS_USERNAME": "adminmaker",
    "MOBILENO": 9843645324,
    "DOB": 1720117800000,
    "COUNTRY": "India",
    "CITY": "chennai",
    "ADDRESS": "egmore",
    "PROFILE_PIC": null,
    "PROFILE_PIC_TYPE": null,
    "UNBLOCK_TIME": null,
    "BLOCKEDDATE": null,
    "PASS_COUNT": null
  }
  cardsInfo: any = {};
  userType: any = localStorage.getItem('userType');
  dougnutdata: any;
  dougnutoptions: any;
  lineoptions: any;
  linedata: any;
  circleoptions: any;
  circledata: any;
  platformId = inject(PLATFORM_ID);
  databar: any;
  optionsbar: any;
  yearData:any;
  years:any = [{name:'2024'},{name:'2025'},{name:'2026'},{name:'2027'}]
  constructor(private productService: ProductService, public layoutService: LayoutService,
    private confirmationService: ConfirmationService, private messageService: MessageService,
    private rest: RestService, private cdr: ChangeDetectorRef) {
    this.subscription = this.layoutService.configUpdate$.pipe(debounceTime(25)).subscribe(() => {
      // this.initChart();
    });
  }

  ngOnInit() {
    this.yearData = '2025';
    this.getCardDetails();
    this.initChartDougnut();
    this.initChartLine();
    this.initChartCircle();
    this.initChartBar();
    this.productService.getProductsSmall().then((data) => (this.products = data));
  }

initChartDougnut() {
  if (isPlatformBrowser(this.platformId)) {
    let resdata = {
    "successCount": 10,
    "failureCount": 1,
    "txnType": null
}
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');
 // Filter only numeric keys from resdata and ignore null/undefined
    const entries = Object.entries(resdata).filter(
      ([_, value]) => typeof value === 'number' && value !== null
    );

    const labels = entries.map(([key]) => this.formatLabel(key));
    const data = entries.map(([_, value]) => Number(value));

    // Dynamic color generation using HSL
    const generateHSLColors = (count: number, saturation = 70, lightness = 60): string[] => {
      const step = 360 / count;
      return Array.from({ length: count }, (_, i) => `hsl(${210 + i * step}, ${saturation}%, ${lightness}%)`);
    };

    const backgroundColor = generateHSLColors(data.length, 70, 60);
    const hoverBackgroundColor = generateHSLColors(data.length, 70, 50); // slightly darker

    this.dougnutdata = {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: backgroundColor,
          hoverBackgroundColor: hoverBackgroundColor
        }
      ]
    };

    this.dougnutoptions = {
      cutout: '60%',
      plugins: {
        legend: {
          position: 'right',
          labels: {
            color: textColor,
            usePointStyle: true,
            padding: 20,
            boxWidth: 14,
            boxHeight: 14,
            font: {
              size: 13
            }
          }
        }
      },
      layout: {
        padding: {
          top: 10,
          bottom: 10,
          left: 10,
          right: 10
        }
      }
    };

    this.cdr.markForCheck();
  }
}

formatLabel(key: string): string {
  // Converts camelCase or snake_case to Title Case for better readability
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/_/g, ' ')
    .replace(/^./, str => str.toUpperCase());
}

  initChartLine() {
  if (isPlatformBrowser(this.platformId)) {
    let resData = [
    {
        "successCount": 286,
        "failureCount": 134,
        "txnType": "Month 1"
    },
    {
        "successCount": 679,
        "failureCount": 391,
        "txnType": "Month 2"
    },
    {
        "successCount": 374,
        "failureCount": 209,
        "txnType": "Month 3"
    },
    {
        "successCount": 160,
        "failureCount": 159,
        "txnType": "Month 4"
    },
    {
        "successCount": 438,
        "failureCount": 297,
        "txnType": "Month 5"
    },
    {
        "successCount": 32,
        "failureCount": 27,
        "txnType": "Month 6"
    }
];
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

    const labels = resData.map(item => item.txnType);
    const successCounts = resData.map(item => item.successCount);
    const failureCounts = resData.map(item => item.failureCount);

    this.linedata = {
      labels: labels,
      datasets: [
        {
          label: 'Success',
          data: successCounts,
          fill: true,
          borderColor: documentStyle.getPropertyValue('--p-green-500'),
          tension: 0.4,
          backgroundColor: 'rgba(22, 189, 111, 0.2)'
        },
        {
          label: 'Failure',
          data: failureCounts,
          fill: true,
          borderColor: documentStyle.getPropertyValue('--p-red-500'),
          tension: 0.4,
          backgroundColor: 'rgba(189, 65, 16, 0.2)'
        }
      ]
    };

    this.lineoptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };

    this.cdr.markForCheck();
  }
}

initChartCircle() {
  if (isPlatformBrowser(this.platformId)) {
    let resData = [
      { "respCode": "0", "respDesc": "Approved Transaction", "txnCount": "842" },
      { "respCode": "5", "respDesc": "Unable To Process", "txnCount": "112" },
      { "respCode": "13", "respDesc": "Invalid Amount", "txnCount": "6" },
      { "respCode": "14", "respDesc": "Invalid Card", "txnCount": "49" },
      { "respCode": "21", "respDesc": "No To Account", "txnCount": "9" },
      { "respCode": "39", "respDesc": "Transaction Not Allowed", "txnCount": "15" },
      { "respCode": "51", "respDesc": "Insufficient Funds", "txnCount": "24" },
      { "respCode": "61", "respDesc": "Exceeds Limit", "txnCount": "63" },
      { "respCode": "65", "respDesc": "Exceeds Frequency Limit", "txnCount": "16" },
      { "respCode": "76", "respDesc": "Invalid Account", "txnCount": "18" }
    ];

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    const labels = resData.map(item => item.respDesc);
    const data = resData.map(item => Number(item.txnCount));

    // 🔁 Dynamically generate colors using HSL (to ensure contrast)
    const generateHSLColors = (count: number,  saturation = 70, lightness = 60): string[] => {
      const step = 360 / count;
      return Array.from({ length: count }, (_, i) => `hsl(${( 210 + i * step) % 360}, ${saturation}%, ${lightness}%)`);
    };

    const backgroundColor = generateHSLColors(resData.length, 70, 60);
    const hoverBackgroundColor = generateHSLColors(resData.length, 70, 50); // darker on hover

    this.circledata = {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: backgroundColor,
          hoverBackgroundColor: hoverBackgroundColor
        }
      ]
    };

    this.circleoptions = {
      plugins: {
        legend: {
          position: 'right',
          labels: {
            usePointStyle: true,
            color: textColor,
            padding: 20,
            boxWidth: 12,
            boxHeight: 12,
            font: {
              size: 13
            }
          }
        }
      },
      layout: {
        padding: {
          top: 10,
          bottom: 10,
          left: 10,
          right: 10
        }
      }
    };

    this.cdr.markForCheck();
  }
}


initChartBar() {

  if (isPlatformBrowser(this.platformId)) {
          let resData = [
    {
        "successCount": 249,
        "failureCount": 63,
        "txnType": "PG by Wallet"
    },
    {
        "successCount": 17,
        "failureCount": 29,
        "txnType": "Merchant QR Prepaid"
    },
    {
        "successCount": 4,
        "failureCount": 16,
        "txnType": "Prepaid Card Close"
    },
    {
        "successCount": 103,
        "failureCount": 96,
        "txnType": "Wallet to Wallet"
    },
    {
        "successCount": 763,
        "failureCount": 297,
        "txnType": "Prepaid Topup"
    },
    {
        "successCount": 166,
        "failureCount": 85,
        "txnType": "Branch Wallet topup"
    },
    {
        "successCount": 40,
        "failureCount": 31,
        "txnType": "Card to Card"
    },
    {
        "successCount": 17,
        "failureCount": 8,
        "txnType": "Merchant QR payment"
    },
    {
        "successCount": 35,
        "failureCount": 122,
        "txnType": "Prepaid Card Set Pin"
    },
    {
        "successCount": 51,
        "failureCount": 22,
        "txnType": "Branch Wallet Withdrawl"
    },
    {
        "successCount": 150,
        "failureCount": 108,
        "txnType": "Prepaid Annual Fee"
    },
    {
        "successCount": 36,
        "failureCount": 27,
        "txnType": "Prepaid Card Statement"
    },
    {
        "successCount": 25,
        "failureCount": 50,
        "txnType": "Prepaid Card Linking"
    },
    {
        "successCount": 68,
        "failureCount": 52,
        "txnType": "Mobile Topup"
    },
    {
        "successCount": 63,
        "failureCount": 36,
        "txnType": "Prepaid to Wallet"
    },
    {
        "successCount": 35,
        "failureCount": 41,
        "txnType": "Prepaid Branch Withdrawl"
    },
    {
        "successCount": 66,
        "failureCount": 24,
        "txnType": "Branch Bulk Wallet Topup"
    },
    {
        "successCount": 38,
        "failureCount": 76,
        "txnType": "PG by Prepaid "
    },
    {
        "successCount": 29,
        "failureCount": 18,
        "txnType": "Wallet to Prepaid"
    }
];
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

    const labels = resData.map(item => item.txnType);
    const successCounts = resData.map(item => item.successCount);
    const failureCounts = resData.map(item => item.failureCount);

    this.databar = {
      labels: labels,
      datasets: [
        {
          label: 'Success',
          backgroundColor: documentStyle.getPropertyValue('--p-green-500'),
          borderColor: documentStyle.getPropertyValue('--p-green-500'),
          data: successCounts
        },
        {
          label: 'Failure',
          backgroundColor: documentStyle.getPropertyValue('--p-red-500'),
          borderColor: documentStyle.getPropertyValue('--p-red-500'),
          data: failureCounts
        }
      ]
    };

    this.optionsbar = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };

    this.cdr.markForCheck();
  }
}

  getCardDetails() {
    const url = '/dashboard/details?instid=SCB'
    this.rest.get(url)
      .subscribe({
        next: (res) => {
          console.log('HTTP client response:', res);
          this.cardsInfo = res;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('HTTP client error:', err);
          this.cardsInfo = {};
        }
      });
    // .pipe(
    //   catchError(error => {
    //     console.error('Error fetching branch data:', error);
    //     this.cardsInfo = []; // fallback or reset
    //     return of([]);
    //   })
    // )
    // .subscribe((res: any[]) => {
    //   console.log(res, 'res---');
    //   this.cardsInfo = res;
    // });
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

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
