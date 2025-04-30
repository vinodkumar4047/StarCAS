import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { Product, ProductService } from '../service/product.service';
import { TableModule } from 'primeng/table';
import { RippleModule } from 'primeng/ripple';
import { debounceTime, Subscription } from 'rxjs';
import { LayoutService } from '../../layout/service/layout.service';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    ButtonModule,
    MenuModule,
    TableModule,
    RippleModule,
    ChartModule
  ],
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  providers: [ProductService]
})
export class DashboardComponent {
  menu = null;
  chartData: any;
  chartOptions: any;
  subscription!: Subscription;
  imageUrl: string | ArrayBuffer | null = null;
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
  constructor(private productService: ProductService, public layoutService: LayoutService) {
    this.subscription = this.layoutService.configUpdate$.pipe(debounceTime(25)).subscribe(() => {
      this.initChart();
    });
  }

  ngOnInit() {
    this.productService.getProductsSmall().then((data) => (this.products = data));
    this.initChart();
  }
  initChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const borderColor = documentStyle.getPropertyValue('--surface-border');
    const textMutedColor = documentStyle.getPropertyValue('--text-color-secondary');

    this.chartData = {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          type: 'bar',
          label: 'Subscriptions',
          backgroundColor: documentStyle.getPropertyValue('--p-primary-400'),
          data: [4000, 10000, 15000, 4000],
          barThickness: 32
        },
        {
          type: 'bar',
          label: 'Advertising',
          backgroundColor: documentStyle.getPropertyValue('--p-primary-300'),
          data: [2100, 8400, 2400, 7500],
          barThickness: 32
        },
        {
          type: 'bar',
          label: 'Affiliate',
          backgroundColor: documentStyle.getPropertyValue('--p-primary-200'),
          data: [4100, 5200, 3400, 7400],
          borderRadius: {
            topLeft: 8,
            topRight: 8,
            bottomLeft: 0,
            bottomRight: 0
          },
          borderSkipped: false,
          barThickness: 32
        }
      ]
    };

    this.chartOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: textMutedColor
          },
          grid: {
            color: 'transparent',
            borderColor: 'transparent'
          }
        },
        y: {
          stacked: true,
          ticks: {
            color: textMutedColor
          },
          grid: {
            color: borderColor,
            borderColor: 'transparent',
            drawTicks: false
          }
        }
      }
    };
  }

  // Trigger file input click
  triggerFileInputClick(): void {
    // Trigger the click event on the file input element
    this.fileInput.nativeElement.click();
  }


  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.imageUrl = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
