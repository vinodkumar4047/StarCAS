import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-fraud-monitoring-details',
  imports: [CommonModule, TabsModule, ButtonModule, DialogModule, FormsModule],
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
  visible: boolean = false;
  headerDia: any;
  data: any = [];
  searchTerm: string = '';
  constructor(private cd: ChangeDetectorRef,) { }


  ngOnInit() {

  }
  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  func(){
   this.searchTerm = '';
  }

  formatKey(key: string) {
    if (!key) return '';
    let formatted = key.replace(/_/g, ' ');
    formatted = formatted.replace(/([a-z])([A-Z])/g, '$1 $2');
    return formatted;
  }

    getFilteredData(array: any[]): any[] {
    if (!this.searchTerm) return array;

    const lowerTerm = this.searchTerm.toLowerCase();

    return array.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(lowerTerm)
      )
    );
  }

  countryBlockfunc() {
    this.data = [
      {
        "BLOCKED COUNTRY CODE": "12",
        "COUNTRY DESC": "Russian",
        "TXN ALLOWED FLAG": "BLOCKED"
      }
    ];
  }

  cardblockfunc() {
    this.data = [
      {
        "MCARD NO": "6398-07xx-xxxxxxx-2183",
        "FROM DATE": "19-JAN-22",
        "TO DATE": "18-JAN-24",
        "ALLOWED": "DISABLED"
      }
    ];
  }
  locblockfunc() {
    this.data = [
      {
        "BLOCKED MERCHANT LOCATION": "TAMILNADU",
        "FROM DATE": "25-AUG-22",
        "TO DATE": "25-AUG-22"
      }
    ];
  }
  mccblockfunc() {
    this.data = [
      {
        "BLOCKED MERCHANT CODE": 7299,
        "MERCHANT CODE DESC": "Miscellaneous General Services",
        "TXN ALLOWED FLAG": "0"
      }
    ];
  }
  mccallowedfunc() {
    this.data = [
      {
        "CHN": "4660960030009094",
        "FROM DATE": "23-NOV-22",
        "TO DATE": "25-NOV-22"
      }
    ]
  }

  showDialog(data: any) {
    this.visible = true;
    this.headerDia = 'Detail of ' + data;

  }

}
