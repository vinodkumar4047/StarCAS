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
    ConfirmPopupModule
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
  lineoptions:any;
  linedata:any;
    circleoptions:any;
  circledata:any;
platformId = inject(PLATFORM_ID);
  databar: any;
  optionsbar:any;
  constructor(private productService: ProductService, public layoutService: LayoutService,
    private confirmationService: ConfirmationService, private messageService: MessageService,
    private rest: RestService, private cdr: ChangeDetectorRef) {
    this.subscription = this.layoutService.configUpdate$.pipe(debounceTime(25)).subscribe(() => {
      // this.initChart();
    });
  }

  ngOnInit() {
    this.getCardDetails();
    this.initChartDougnut();
    this.initChartLine();
    this.initChartCircle();
    this.initChartBar();
    this.productService.getProductsSmall().then((data) => (this.products = data));
  }

 initChartDougnut(){
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');

            this.dougnutdata = {
                labels: ['A', 'B', 'C'],
                datasets: [
                    {
                        data: [300, 50, 100],
                        backgroundColor: [documentStyle.getPropertyValue('--p-cyan-500'), documentStyle.getPropertyValue('--p-orange-500'), documentStyle.getPropertyValue('--p-gray-500')],
                        hoverBackgroundColor: [documentStyle.getPropertyValue('--p-cyan-400'), documentStyle.getPropertyValue('--p-orange-400'), documentStyle.getPropertyValue('--p-gray-400')]
                    }
                ]
            };

            this.dougnutoptions = {
                cutout: '60%',
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                }
            };
            this.cdr.markForCheck()
        }
    }

    initChartLine() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

            this.linedata = {
                labels: [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
],
                datasets: [
                    {
                        label: 'First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40,94,20,62,78,45],
                        fill: true,
                        borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
                        tension: 0.4,
                        backgroundColor: 'rgba(22, 169, 189, 0.2)'
                    },
                    {
                        label: 'Second Dataset',
                        data: [28, 48, 40,55, 40,94,20,62, 19, 86, 27, 90],
                        fill: true,
                        borderColor: documentStyle.getPropertyValue('--p-gray-500'),
                        tension: 0.4,
                        backgroundColor: 'rgba(107, 114, 128, 0.2)'
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
            this.cdr.markForCheck()
        }
    }
     initChartCircle() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');

            this.circledata = {
                labels: ['A', 'B', 'C'],
                datasets: [
                    {
                        data: [540, 325, 702],
                        backgroundColor: [documentStyle.getPropertyValue('--p-cyan-500'), documentStyle.getPropertyValue('--p-orange-500'), documentStyle.getPropertyValue('--p-gray-500')],
                        hoverBackgroundColor: [documentStyle.getPropertyValue('--p-cyan-400'), documentStyle.getPropertyValue('--p-orange-400'), documentStyle.getPropertyValue('--p-gray-400')]
                    }
                ]
            };

            this.circleoptions = {
                plugins: {
                    legend: {
                        labels: {
                            usePointStyle: true,
                            color: textColor
                        }
                    }
                }
            };
            this.cdr.markForCheck()
        }

    }
      initChartBar() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

            this.databar = {
                labels: [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
],
                datasets: [
                    {
                        label: 'My First dataset',
                        backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
                        borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
                        data: [65, 59, 80, 81,55, 40,94,20,62, 56, 55, 40]
                    },
                    {
                        label: 'My Second dataset',
                        backgroundColor: documentStyle.getPropertyValue('--p-orange-500'),
                        borderColor: documentStyle.getPropertyValue('--p-orange-500'),
                        data: [28,55, 40,94,20,62, 48, 40, 19, 86, 27, 90]
                    }
                ]
            };

            this.optionsbar =  {
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
            this.cdr.markForCheck()
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
