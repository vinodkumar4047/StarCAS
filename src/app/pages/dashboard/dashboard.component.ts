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
import { DialogService } from '../../layout/component/commonDialog.service';

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
    Select, FloatLabelModule, FormsModule
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
  userInfo = JSON.parse(localStorage.getItem('userDetails') || '{}');
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
  yearData: any;
  years: any = [];
  constructor(private productService: ProductService, public layoutService: LayoutService,
    private confirmationService: ConfirmationService, private messageService: MessageService,
    private rest: RestService, private cdr: ChangeDetectorRef, private dialogService: DialogService) {
    this.subscription = this.layoutService.configUpdate$.pipe(debounceTime(25)).subscribe(() => {
      // this.initChart();
    });
  }

  ngOnInit() {
    const currentYear = new Date().getFullYear();
    for (let i = 0; i < 20; i++) {
      this.years.push({ name: (currentYear - i).toString() });
    }
    this.yearData = (new Date().getFullYear()).toString();
    this.getCardDetails();
    this.initChartDougnut();
    this.initChartLine();
    this.initChartCircle();
    this.initChartBar();
    this.productService.getProductsSmall().then((data) => (this.products = data));
  }

  initChartDougnut() {
    let resData: any = [];
    this.rest.post(null, `/dashboard/transaction/day-count`).subscribe({
      next: (res) => {
        resData = res;
        if (isPlatformBrowser(this.platformId)) {
          // dummy data for now

          const documentStyle = getComputedStyle(document.documentElement);
          const textColor = documentStyle.getPropertyValue('--p-text-color');
          // Filter only numeric keys from resdata and ignore null/undefined
          const entries = Object.entries(resData).filter(
            ([_, value]) => typeof value === 'number' && value !== null
          );

          const labels = entries?.map(([key]) => this.formatLabel(key));
          const data = entries?.map(([_, value]) => Number(value));

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
                position: 'bottom',
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
      },
      error: (err) => {
        this.dialogService.show('Oops!', err?.message || 'Something went wrong', 'error');
      }
    });

  }

  formatLabel(key: string): string {
    // Converts camelCase or snake_case to Title Case for better readability
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/_/g, ' ')
      .replace(/^./, str => str.toUpperCase());
  }

  initChartLine() {
    let resData: any = [];
    this.rest.post(null, `/dashboard/transaction/monthly-count?year=${this.yearData}`).subscribe({
      next: (res) => {
        resData = res;
        if (isPlatformBrowser(this.platformId)) {
          const documentStyle = getComputedStyle(document.documentElement);
          const textColor = documentStyle.getPropertyValue('--p-text-color');
          const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
          const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

          const labels = resData?.map((item: any) => item.txnType);
          const successCounts = resData?.map((item: any) => item.successCount);
          const failureCounts = resData?.map((item: any) => item.failureCount);

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
      },
      error: (err) => {
        this.dialogService.show('Oops!', err?.message || 'Something went wrong', 'error');
      }
    });

  }

  initChartCircle() {
     let resData:any = []
      this.rest.get(`/dashboard/transactionTypeWise`).subscribe({
      next: (res) => { 
  resData = res;
   if (isPlatformBrowser(this.platformId)) {
      // let resData = [
      //   { "respCode": "0", "respDesc": "Approved Transaction", "txnCount": "842" },
      //   { "respCode": "5", "respDesc": "Unable To Process", "txnCount": "112" },
      //   { "respCode": "13", "respDesc": "Invalid Amount", "txnCount": "6" },
      //   { "respCode": "14", "respDesc": "Invalid Card", "txnCount": "49" },
      //   { "respCode": "21", "respDesc": "No To Account", "txnCount": "9" },
      //   { "respCode": "39", "respDesc": "Transaction Not Allowed", "txnCount": "15" },
      //   { "respCode": "51", "respDesc": "Insufficient Funds", "txnCount": "24" },
      //   { "respCode": "61", "respDesc": "Exceeds Limit", "txnCount": "63" },
      //   { "respCode": "65", "respDesc": "Exceeds Frequency Limit", "txnCount": "16" },
      //   { "respCode": "76", "respDesc": "Invalid Account", "txnCount": "18" }
      // ];

      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');

      const labels = resData?.map((item:any) => item.reason);
      const data = resData?.map((item:any) => Number(item.count));

      // 🔁 Dynamically generate colors using HSL (to ensure contrast)
      const generateHSLColors = (count: number, saturation = 70, lightness = 60): string[] => {
        const step = 360 / count;
        return Array.from({ length: count }, (_, i) => `hsl(${(210 + i * step) % 360}, ${saturation}%, ${lightness}%)`);
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
              padding: 12,
              boxWidth: 12,
              boxHeight: 12,
              font: {
                size: 12,
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
       },
      error: (err) => {
        this.dialogService.show('Oops!', err?.message || 'Something went wrong', 'error');
      }
    });
      
   
  }


  initChartBar() {

    let resData: any = [];
    this.rest.get(`/dashboard/transactionTypeWise/count`).subscribe({
      next: (res) => {
        resData = res;
        if (isPlatformBrowser(this.platformId)) {
          const documentStyle = getComputedStyle(document.documentElement);
          const textColor = documentStyle.getPropertyValue('--p-text-color');
          const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
          const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

          const labels = resData?.map((item: any) => item.txnType);
          const successCounts = resData?.map((item: any) => item.successCount);
          const failureCounts = resData?.map((item: any) => item.failureCount);

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
                  color: 'transparent' ,
                  drawBorder: false
                }
              },
              y: {
                ticks: {
                  color: textColorSecondary
                },
                grid: {
                  color: 'transparent ',
                  drawBorder: false
                }
              }
            }
          };

          this.cdr.markForCheck();
        }
      },
      error: (err) => {
        this.dialogService.show('Oops!', err?.message || 'Something went wrong', 'error');
      }
    });

  }

  getCardDetails() {
    const url = '/dashboard/details?instid=CLFSC'
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
