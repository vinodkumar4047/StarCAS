import { Injectable } from '@angular/core';
// import { Menu } from 'app/layout/Menu';
import { AppMenu } from '../component/app.menu';

interface MenuItem {
   title?: string;
   icon?: string;
   link?: string;
   color?: string;
   menuId?: string;
   hideFor?: string;
   checked?: boolean;
   expanded?: boolean;
   subMenu?: MenuItem[];
   permissions?: PermissionItem[];
}
export interface PermissionItem {
   title: string;
   menuId: string;
   checked: boolean;
}
@Injectable({
   providedIn: 'root'
})
export class MenuService {

   menuItems: MenuItem[] = [];
   constructor() {
      this.initMenuItem();
   }
   initMenuItem() {
      this.menuItems =
         [
            {
               "title": "Dashboard",
               "link": "Dashboard",
               "icon": "fa fa-dashboard",
               "color": "#1b5e20",
               "menuId": "M000001",
               "checked": false
            },
            {
               "title": "Configuration",
               "icon": "fa-solid fa-credit-card",
               "color": "#1b5e20",
               "menuId": "M000002",
               "checked": false,
               "subMenu": [
                  {
                     "title": "Institution",
                     "link": "Bulk-upload",
                     "icon": "fa-brands fa-cc-visa",
                     "color": "#1b5e20",
                     "menuId": "M00000201",
                     "checked": false,
                     "permissions": [
                        {
                           "title": "View Institution",
                           "menuId": "M0000020101",
                           "checked": false
                        },
                     ]
                  },
                  {
                     "title": "Branch",
                     "link": "Master-bulk",
                     "icon": "fab fa-cc-mastercard",
                     "color": "#1b5e20",
                     "menuId": "M00000202",
                     "checked": false,
                     "permissions": [
                        { "title": "Delete Authorize Branch", "menuId": "M0000020201", "checked": false },
                        { "title": "Authorize Branch", "menuId": "M0000020202", "checked": false },
                        { "title": "Add Branch", "menuId": "M0000020203", "checked": false },
                        { "title": "View Branch", "menuId": "M0000020204", "checked": false },
                        { "title": "Edit Branch", "menuId": "M0000020205", "checked": false },
                        { "title": "Delete Branch", "menuId": "M0000020206", "checked": false }
                     ]
                  },
                  {
                     "title": "BIN",
                     "link": "Rupay-bulk",
                     "icon": "fa-solid fa-credit-card",
                     "color": "#1b5e20",
                     "menuId": "M00000203",
                     "checked": false,
                     "permissions": [
                        { "title": "View BIN", "menuId": "M0000020301", "checked": false },
                     ]
                  },
                  {
                     "title": "ATM Type",
                     "link": "Rupay-bulk",
                     "icon": "fa-solid fa-credit-card",
                     "color": "#1b5e20",
                     "menuId": "M00000204",
                     "checked": false,
                     "permissions": [
                        {
                           "title": "View ATM Type",
                           "menuId": "M0000020401",
                           "checked": false
                        },
                        {
                           "title": "Add ATM Type",
                           "menuId": "M0000020402",
                           "checked": false
                        }
                     ]
                  },
                  {
                     "title": "ATM",
                     "link": "Rupay-bulk",
                     "icon": "fa-solid fa-credit-card",
                     "color": "#1b5e20",
                     "menuId": "M00000205",
                     "checked": false,
                     "permissions": [
                        {
                           "title": "Authorize ATM",
                           "menuId": "M0000020501",
                           "checked": false
                        },
                        {
                           "title": "Authorize Delete ATM",
                           "menuId": "M0000020502",
                           "checked": false
                        },
                        {
                           "title": "Add ATM",
                           "menuId": "M0000020503",
                           "checked": false
                        },
                        {
                           "title": "View ATM",
                           "menuId": "M0000020504",
                           "checked": false
                        },
                        {
                           "title": "Edit ATM",
                           "menuId": "M0000020505",
                           "checked": false
                        },
                        {
                           "title": "Delete ATM",
                           "menuId": "M0000020506",
                           "checked": false
                        }
                     ]
                  },
                  {
                     "title": "External BIN",
                     "link": "Rupay-bulk",
                     "icon": "fa-solid fa-credit-card",
                     "color": "#1b5e20",
                     "menuId": "M00000206",
                     "checked": false,
                     "permissions": [
                        {
                           "title": "Authorize External Bin",
                           "menuId": "M0000020601",
                           "checked": false
                        },
                        {
                           "title": "Delete Authorize External Bin",
                           "menuId": "M0000020602",
                           "checked": false
                        },
                        {
                           "title": "Add External Bin",
                           "menuId": "M0000020603",
                           "checked": false
                        },
                        {
                           "title": "View External Bin",
                           "menuId": "M0000020604",
                           "checked": false
                        },
                        {
                           "title": "Edit External Bin",
                           "menuId": "M0000020605",
                           "checked": false
                        },
                        {
                           "title": "Delete External Bin",
                           "menuId": "M0000020606",
                           "checked": false
                        }
                     ]
                  },
                  {
                     "title": "FIT",
                     "link": "Rupay-bulk",
                     "icon": "fa-solid fa-credit-card",
                     "color": "#1b5e20",
                     "menuId": "M00000207",
                     "checked": false
                  },
                  {
                     "title": "Casette",
                     "link": "Rupay-bulk",
                     "icon": "fa-solid fa-credit-card",
                     "color": "#1b5e20",
                     "menuId": "M00000208",
                     "checked": false
                  },
                  {
                     "title": "Port",
                     "link": "Rupay-bulk",
                     "icon": "fa-solid fa-credit-card",
                     "color": "#1b5e20",
                     "menuId": "M00000209",
                     "checked": false
                  },
                  {
                     "title": "Transaction",
                     "link": "Rupay-bulk",
                     "icon": "fa-solid fa-credit-card",
                     "color": "#1b5e20",
                     "menuId": "M00000210",
                     "checked": false
                  }
               ]
            },

            {
               "title": "Monitoring",
               "icon": "fa-solid fa-credit-card",
               "color": "#1b5e20",
               "menuId": "M000003",
               "checked": false,
               "subMenu": [
                  {
                     "title": "Network Monitoring",
                     "link": "Register-Instantcard",
                     "icon": "fa fa-id-card",
                     "color": "#1b5e20",
                     "menuId": "M00000301",
                     "checked": false
                  },
                  {
                     "title": "HSM Monitoring",
                     "link": "instantbulkcust-registration",
                     "icon": "fa fa-user-plus",
                     "color": "#1b5e20",
                     "menuId": "M00000302",
                     "checked": false,
                  },
                  {
                     "title": "TXN Monitoring",
                     "link": "instantbulkcust-registration",
                     "icon": "fa fa-user-plus",
                     "color": "#1b5e20",
                     "menuId": "M00000303",
                     "checked": false,
                  },
                  {
                     "title": "ATM Monitoring",
                     "link": "instantbulkcust-registration",
                     "icon": "fa fa-user-plus",
                     "color": "#1b5e20",
                     "menuId": "M00000304",
                     "checked": false,
                  },
                  {
                     "title": "Transaction Search",
                     "link": "instantbulkcust-registration",
                     "icon": "fa fa-user-plus",
                     "color": "#1b5e20",
                     "menuId": "M00000305",
                     "checked": false,
                  },
                  {
                     "title": "Fraud Monitoring",
                     "link": "instantbulkcust-registration",
                     "icon": "fa fa-user-plus",
                     "color": "#1b5e20",
                     "menuId": "M00000306",
                     "checked": false,
                  },
                  {
                     "title": "Fraud and Risk Txn Management",
                     "link": "instantbulkcust-registration",
                     "icon": "fa fa-user-plus",
                     "color": "#1b5e20",
                     "menuId": "M00000307",
                     "checked": false,
                  },
               ]
            },

            {
               "title": "Control",
               "icon": "fa-solid fa-file",
               "color": "#1b5e20",
               "menuId": "M000004",
               "checked": false,
               "subMenu": [
                  {
                     "title": "Task Manager",
                     "link": "powk",
                     "icon": "fa-solid fa-file",
                     "color": "#1b5e20",
                     "menuId": "M00000401",
                     "checked": false
                  },
                  {
                     "title": "Port Manager",
                     "link": "smart-card",
                     "icon": "fa-solid fa-file",
                     "color": "#1b5e20",
                     "menuId": "M00000402",
                     "checked": false
                  },
                  {
                     "title": "Channel Manager",
                     "link": "instant-IND",
                     "icon": "fa-solid fa-file",
                     "color": "#1b5e20",
                     "menuId": "M00000403",
                     "checked": false
                  },
                  {
                     "title": "Network Control",
                     "link": "instant-NRI",
                     "icon": "fa-solid fa-file",
                     "color": "#1b5e20",
                     "menuId": "M00000404",
                     "checked": false
                  },
                  {
                     "title": "ATM Controller",
                     "link": "debit-Branch",
                     "icon": "fa fa-home",
                     "color": "#1b5e20",
                     "menuId": "M00000405",
                     "checked": false
                  },
                  {
                     "title": "Control Monitoring",
                     "link": "debit-Indian",
                     "icon": "fa fa-envelope-square",
                     "color": "#1b5e20",
                     "menuId": "M00000406",
                     "checked": false
                  },
               ]
            },
            {
               "title": "Risk Management",
               "icon": "fa-solid fa-user-graduate",
               "color": "#1b5e20",
               "menuId": "M000005",
               "checked": false,
               "subMenu": [
                  {
                     "title": "International TXN Enabled",
                     "link": "student-cardorder",
                     "icon": "fa-solid fa-person-chalkboard",
                     "color": "#1b5e20",
                     "menuId": "M00000501",
                     "checked": false
                  },
                  {
                     "title": "TXN Allow Without PIN",
                     "link": "student-cardorder",
                     "icon": "fa-solid fa-person-chalkboard",
                     "color": "#1b5e20",
                     "menuId": "M00000501",
                     "checked": false
                  },
                  {
                     "title": "Risk Country Block",
                     "link": "student-cardorder",
                     "icon": "fa-solid fa-person-chalkboard",
                     "color": "#1b5e20",
                     "menuId": "M00000501",
                     "checked": false
                  },
                  {
                     "title": "TXN Allow For Risk Country",
                     "link": "student-cardorder",
                     "icon": "fa-solid fa-person-chalkboard",
                     "color": "#1b5e20",
                     "menuId": "M00000501",
                     "checked": false
                  },
                  {
                     "title": "MCC Block",
                     "link": "student-cardorder",
                     "icon": "fa-solid fa-person-chalkboard",
                     "color": "#1b5e20",
                     "menuId": "M00000501",
                     "checked": false
                  },
                  {
                     "title": "TXN Allow For Blocked MCC",
                     "link": "student-cardorder",
                     "icon": "fa-solid fa-person-chalkboard",
                     "color": "#1b5e20",
                     "menuId": "M00000501",
                     "checked": false
                  },
                  {
                     "title": "Risk Ecom Site Block",
                     "link": "student-cardorder",
                     "icon": "fa-solid fa-person-chalkboard",
                     "color": "#1b5e20",
                     "menuId": "M00000501",
                     "checked": false
                  },
               ]
            },
            {
               "title": "Reports",
               "icon": "fa fa-cog",
               "color": "#1b5e20",
               "menuId": "M000006",
               "checked": false,
            },
            {
               "title": "Utility",
               "icon": "fa-solid fa-screwdriver-wrench",
               "color": "#1b5e20",
               "menuId": "M000007",
               "checked": false,
               "subMenu": [
                  {
                     "title": "Email Update",
                     "icon": "fa-solid fa-address-card",
                     "color": "#1b5e20",
                     "link": "expiry",
                     "menuId": "M00000701",
                     "checked": false
                  },
                  {
                     "title": "Modile Update",
                     "icon": "fa-solid fa-address-card",
                     "color": "#1b5e20",
                     "link": "Expcardclosure",
                     "menuId": "M00000702",
                     "checked": false
                  },
                  {
                     "title": "SAF Mnagement",
                     "link": "cardclosure",
                     "icon": "fa-solid fa-address-card",
                     "color": "#1b5e20",
                     "menuId": "M00000703",
                     "checked": false
                  },
                  {
                     "title": "Admin Card",
                     "link": "Bulkcardclosure",
                     "icon": "fa-solid fa-address-card",
                     "color": "#1b5e20",
                     "menuId": "M00000704",
                     "checked": false
                  },
               ]
            },
            {
               "title": "User Management",
               "link": "Rnf-details",
               "icon": "fa-solid fa-file",
               "color": "#1b5e20",
               "menuId": "M000008",
               "checked": false,
               "subMenu": [
                  {
                     "title": "Profile",
                     "icon": "fa-solid fa-address-card",
                     "color": "#1b5e20",
                     "link": "expiry",
                     "menuId": "M00000801",
                     "checked": false
                  },
                  {
                     "title": "User",
                     "icon": "fa-solid fa-address-card",
                     "color": "#1b5e20",
                     "link": "Expcardclosure",
                     "menuId": "M00000802",
                     "checked": false
                  },]
            },
         ]
   }

   getMenuitem() {
      return this.menuItems;
   }
}
