import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-fraud-monitoring-details',
  imports: [CommonModule, TabsModule, ButtonModule, DialogModule],
  templateUrl: './fraud-monitoring-details.component.html',
  styleUrl: './fraud-monitoring-details.component.scss'
})
export class FraudMonitoringDetailsComponent {
  dataset: any = {
    "countryBlock": [
      {
        "BLOCKEDCOUNTRYCODE": "12"
      },
      {
        "BLOCKEDCOUNTRYCODE": "165"
      },
      {
        "BLOCKEDCOUNTRYCODE": "17"
      },
      {
        "BLOCKEDCOUNTRYCODE": "22"
      },
      {
        "BLOCKEDCOUNTRYCODE": "232"
      },
      {
        "BLOCKEDCOUNTRYCODE": "355"
      },
      {
        "BLOCKEDCOUNTRYCODE": "856"
      },
      {
        "BLOCKEDCOUNTRYCODE": "93"
      },
      {
        "BLOCKEDCOUNTRYCODE": "931"
      },
      {
        "BLOCKEDCOUNTRYCODE": "994"
      }
    ],
    "countryblockCnt": [
      {
        "BLOCKEDCOUNTRYCODE": 10
      }
    ],
    "mccblockCnt": [
      {
        "BLOCKEDMERCHANTCODE": 10
      }
    ],
    "mccblock": [
      {
        "BLOCKEDMERCHANTCODE": 4900
      },
      {
        "BLOCKEDMERCHANTCODE": 5094
      },
      {
        "BLOCKEDMERCHANTCODE": 7230
      },
      {
        "BLOCKEDMERCHANTCODE": 7276
      },
      {
        "BLOCKEDMERCHANTCODE": 7299
      },
      {
        "BLOCKEDMERCHANTCODE": 7311
      },
      {
        "BLOCKEDMERCHANTCODE": 7342
      },
      {
        "BLOCKEDMERCHANTCODE": 8011
      },
      {
        "BLOCKEDMERCHANTCODE": 8398
      },
      {
        "BLOCKEDMERCHANTCODE": 8641
      }
    ],
    "mccallowedCnt": [
      {
        "CHN": 1
      }
    ],
    "mccallowed": [
      {
        "CHN": "9094"
      }
    ],
    "locblock": [
      {
        "BLOCKEDMERCHANTLOCATION": "ANDRA"
      },
      {
        "BLOCKEDMERCHANTLOCATION": "BIHAR"
      },
      {
        "BLOCKEDMERCHANTLOCATION": "DELHI"
      },
      {
        "BLOCKEDMERCHANTLOCATION": "KERALA"
      },
      {
        "BLOCKEDMERCHANTLOCATION": "MUMBAI"
      },
      {
        "BLOCKEDMERCHANTLOCATION": "PUNE"
      },
      {
        "BLOCKEDMERCHANTLOCATION": "TAMILNADU"
      }
    ],
    "locblockCnt": [
      {
        "BLOCKEDMERCHANTLOCATION": 7
      }
    ],
    "cardblockCnt": [
      {
        "MCARD_NO": 1
      }
    ],
    "cardblock": [
      {
        "MCARD_NO": "6398-07xx-xxxxxxx-2183"
      }
    ]
  };
  default: any = 0;
constructor( private cd: ChangeDetectorRef,) { }
  ngOnInit() {
    this.itrate();
  }
  itrate() {
    setTimeout(() => {
      this.default = this.default + 1;
      this.cd.detectChanges();
      this.itrate();
    }, 5000)
  }
}
