import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { Product, ProductService } from '../service/product.service';
import { TableModule } from 'primeng/table';
import { RippleModule } from 'primeng/ripple';
import { debounceTime, Subscription, of } from 'rxjs';
import { LayoutService } from '../../layout/service/layout.service';
import { CommonModule } from '@angular/common';
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
  imageUrl: any = '';
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
  constructor(private productService: ProductService, public layoutService: LayoutService,
    private confirmationService: ConfirmationService, private messageService: MessageService,
    private rest: RestService, private cdr: ChangeDetectorRef) {
    this.subscription = this.layoutService.configUpdate$.pipe(debounceTime(25)).subscribe(() => {
      // this.initChart();
    });
  }

  ngOnInit() {
    this.getCardDetails();
    this.productService.getProductsSmall().then((data) => (this.products = data));
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
