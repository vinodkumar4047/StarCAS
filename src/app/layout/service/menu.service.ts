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
               "title": "Personalized Cards",
               "icon": "fa-solid fa-credit-card",
               "color": "#1b5e20",
               "menuId": "M000002",
               "checked": false,
               "subMenu": [
                  {
                     "title": "Visa Bulk Upload",
                     "link": "Bulk-upload",
                     "icon": "fa-brands fa-cc-visa",
                     "color": "#1b5e20",
                     "menuId": "M0000020101",
                     "checked": false
                  },
                  {
                     "title": "Master Bulk Upload",
                     "link": "Master-bulk",
                     "icon": "fab fa-cc-mastercard",
                     "color": "#1b5e20",
                     "menuId": "M0000020102",
                     "checked": false
                  },
                  {
                     "title": "Rupay Bulk Upload",
                     "link": "Rupay-bulk",
                     "icon": "fa-solid fa-credit-card",
                     "color": "#1b5e20",
                     "menuId": "M0000020103",
                     "checked": false
                  }
               ]
            },

            {
               "title": "Instant Cards",
               "icon": "fa-solid fa-credit-card",
               "color": "#1b5e20",
               "menuId": "M000003",
               "checked": false,
               "subMenu": [
                  {
                     "title": "Instant Card Order",
                     "link": "Register-Instantcard",
                     "icon": "fa fa-id-card",
                     "color": "#1b5e20",
                     "menuId": "M00000301",
                     "checked": false
                  },
                  {
                     "title": "Customer Register",
                     "link": "instantbulkcust-registration",
                     "icon": "fa fa-user-plus",
                     "color": "#1b5e20",
                     "menuId": "M00000302",
                     "checked": false,
                  },
               ]
            },

            {
               "title": "PRE & Address File Management",
               "icon": "fa-solid fa-file",
               "color": "#1b5e20",
               "menuId": "M000004",
               "checked": false,
               "subMenu": [
                  {
                     "title": "PRE file - POWK",
                     "link": "powk",
                     "icon": "fa-solid fa-file",
                     "color": "#1b5e20",
                     "menuId": "M00000401",
                     "checked": false
                  },
                  {
                     "title": "PRE file - Smart Cards",
                     "link": "smart-card",
                     "icon": "fa-solid fa-file",
                     "color": "#1b5e20",
                     "menuId": "M00000402",
                     "checked": false
                  },
                  {
                     "title": "PRE file - Instant Cards India",
                     "link": "instant-IND",
                     "icon": "fa-solid fa-file",
                     "color": "#1b5e20",
                     "menuId": "M00000403",
                     "checked": false
                  },
                  {
                     "title": "PRE file - Instant Cards NRI cell",
                     "link": "instant-NRI",
                     "icon": "fa-solid fa-file",
                     "color": "#1b5e20",
                     "menuId": "M00000404",
                     "checked": false
                  },
                  {
                     "title": "Other Debit Cards - Branch Delivery",
                     "link": "debit-Branch",
                     "icon": "fa fa-home",
                     "color": "#1b5e20",
                     "menuId": "M00000405",
                     "checked": false
                  },
                  {
                     "title": "Other Debit Cards-Indian Address Delivery",
                     "link": "debit-Indian",
                     "icon": "fa fa-envelope-square",
                     "color": "#1b5e20",
                     "menuId": "M00000406",
                     "checked": false
                  },
                  {
                     "title": "Other Debit Cards - Abroad Address Delivery",
                     "link": "debit-Abroad",
                     "icon": "fa fa-plane",
                     "color": "#1b5e20",
                     "menuId": "M00000407",
                     "checked": false
                  },
                  {
                     "title": "Virtual to Physical PRE",
                     "link": "virtual-to-physical",
                     "icon": "fa-solid fa-file",
                     "color": "#1b5e20",
                     "menuId": "M00000408",
                     "checked": false
                  }
               ]
            },
            {
               "title": "Student Card",
               "icon": "fa-solid fa-user-graduate",
               "color": "#1b5e20",
               "menuId": "M000005",
               "checked": false,
               "subMenu": [
                  {
                     "title": "Student Card Generation",
                     "link": "student-cardorder",
                     "icon": "fa-solid fa-person-chalkboard",
                     "color": "#1b5e20",
                     "menuId": "M00000501",
                     "checked": false
                  }
               ]
            },
            {
               "title": "Configuration",
               "icon": "fa fa-cog",
               "color": "#1b5e20",
               "menuId": "M000006",
               "checked": false,
               "subMenu": [
                  {
                     "title": "Bin",
                     "link": "Bin",
                     "icon": "fa-solid fa-file-invoice",
                     "color": "#1b5e20",
                     "menuId": "M00000601",
                     "checked": false
                  },
                  {
                     "title": "Branch",
                     "link": "Branch",
                     "icon": "fa-solid fa-file-invoice",
                     "color": "#1b5e20",
                     "menuId": "M00000602",
                     "checked": false
                  },
                  {
                     "title": "Account Products",
                     "link": "Account-Product",
                     "icon": "fa-solid fa-file-invoice",
                     "color": "#1b5e20",
                     "menuId": "M00000603",
                     "checked": false
                  },
                  {
                     "title": "Account Type",
                     "link": "Account-Type",
                     "icon": "fa-solid fa-file-invoice",
                     "color": "#1b5e20",
                     "menuId": "M00000604",
                     "checked": false
                  },
                  {
                     "title": "Card Type",
                     "link": "Card-Type",
                     "icon": "fa-solid fa-id-card",
                     "color": "#1b5e20",
                     "menuId": "M00000605",
                     "checked": false
                  },
                  {
                     "title": "Sftp Config",
                     "link": "SFTP-Config",
                     "icon": "fa-solid fa-money-bill-transfer",
                     "color": "#1b5e20",
                     "menuId": "M00000606",
                     "checked": false
                  },
                  {
                     "title": "Subproduct",
                     "link": "subproduct",
                     "icon": "fa-brands fa-product-hunt",
                     "color": "#1b5e20",
                     "menuId": "M00000607",
                     "checked": false
                  },
                  {
                     "title": "HSM",
                     "link": "hsm-config",
                     "icon": "fa-solid fa-sliders",
                     "color": "#1b5e20",
                     "menuId": "M00000608",
                     "checked": false
                  }
               ]
            },
            {
               "title": "Maintenance",
               "icon": "fa-solid fa-screwdriver-wrench",
               "color": "#1b5e20",
               "menuId": "M000007",
               "checked": false,
               "subMenu": [
                  {
                     "title": "Expiry Card Closure",
                     "icon": "fa-solid fa-address-card",
                     "color": "#1b5e20",
                     "link": "expiry",
                     "menuId": "M00000701",
                     "checked": false
                  },
                  {
                     "title": "Expiry RNF Generation",
                     "icon": "fa-solid fa-address-card",
                     "color": "#1b5e20",
                     "link": "Expcardclosure",
                     "menuId": "M00000702",
                     "checked": false
                  },
                  {
                     "title": "Card Closure",
                     "link": "cardclosure",
                     "icon": "fa-solid fa-address-card",
                     "color": "#1b5e20",
                     "menuId": "M00000703",
                     "checked": false
                  },
                  {
                     "title": "Bulk Card Closure",
                     "link": "Bulkcardclosure",
                     "icon": "fa-solid fa-address-card",
                     "color": "#1b5e20",
                     "menuId": "M00000704",
                     "checked": false
                  },
                  {
                     "title": "Multiple Account Linking",
                     "link": "Multiaccount_Link",
                     "icon": "fa-solid fa-address-card",
                     "color": "#1b5e20",
                     "menuId": "M00000705",
                     "checked": false
                  },


               ]

            },
            {
               "title": "PRE & RNF Details",
               "link": "Rnf-details",
               "icon": "fa-solid fa-file",
               "color": "#1b5e20",
               "menuId": "M000008",
               "checked": false
            },

            {
               "title": "Reports",
               "icon": "fa-solid fa-download",
               "color": "#1b5e20",
               "menuId": "M000009",
               "checked": false,
               "subMenu": [
                  {
                     "title": "Personalized Cards Reports",
                     "icon": "fa-solid fa-person-walking-arrow-right",
                     "color": "#1b5e20",
                     "link": "Personalised-Report",
                     "menuId": "M00000901",
                     "checked": false
                  }, {
                     "title": "Instant Cards Reports",
                     "icon": "fa-solid fa-download",
                     "color": "#1b5e20",
                     "link": "Instant-Report",
                     "menuId": "M00000902",
                     "checked": false
                  },
                  {
                     "title": "Audit Trial Reports",
                     "icon": "fa-solid fa-file-arrow-down",
                     "color": "#1b5e20",
                     "link": "Audit-Report",
                     "menuId": "M00000903",
                     "checked": false
                  }
               ]

            },
            {
               "title": "Tools",
               "icon": "fa-solid fa-wrench",
               "color": "#1b5e20",
               "menuId": "M000010",
               "checked": false,
               "subMenu": [
                  {
                     "title": "Encryption/Decryption",
                     "icon": "fa fa-retweet",
                     "color": "#1b5e20",
                     "link": "View-Tool",
                     "menuId": "M00001001",
                     "checked": false
                  },
                  {
                     "title": "Customer Details",
                     "link": "Customerdetails",
                     "icon": "fa-solid fa-address-card",
                     "color": "#1b5e20",
                     "menuId": "M00001002",
                     "checked": false
                  },
               ]

            },
            {
               "title": "User Management",
               "icon": "fa-solid fa-users-gear",
               "color": "#1b5e20",
               "menuId": "M000011",
               "checked": false,
               "subMenu": [
                  {
                     "title": "Profile",
                     "icon": "fa-solid fa-id-card-clip",
                     "color": "#1b5e20",
                     "link": "Profile",
                     "menuId": "M00001101",
                     "checked": false
                  },
                  {
                     "title": "User",
                     "icon": "fa-solid fa-circle-user",
                     "color": "#1b5e20",
                     "link": "User",
                     "menuId": "M00001102",
                     "checked": false
                  }]
            }
         ]
   }

   getMenuitem() {
      return this.menuItems;
   }
}
