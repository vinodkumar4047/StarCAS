import { Injectable } from '@angular/core';
// import { Menu } from 'app/layout/Menu';
import { AppMenu } from '../component/app.menu';
import { LucideAngularModule, LayoutDashboard } from 'lucide-angular';
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
               "link": "dashboard",
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
                     "link": "institution",
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
                     "link": "branch",
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
                     "link": "bin",
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
                     "link": "atmType",
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
                     "link": "atm",
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
                     "link": "externalBin",
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
                     "link": "fit",
                     "icon": "fa-solid fa-credit-card",
                     "color": "#1b5e20",
                     "menuId": "M00000207",
                     "checked": false,
                     "permissions": [
                        {
                           "title": "Authorize Fit",
                           "menuId": "M0000020701",
                           "checked": false
                        },
                        {
                           "title": "Delete Authorize Fit",
                           "menuId": "M0000020702",
                           "checked": false
                        },
                        {
                           "title": "Add Fit",
                           "menuId": "M0000020703",
                           "checked": false
                        },
                        {
                           "title": "View Fit",
                           "menuId": "M0000020704",
                           "checked": false
                        },
                        {
                           "title": "Edit Fit",
                           "menuId": "M0000020705",
                           "checked": false
                        },
                        {
                           "title": "Delete Fit",
                           "menuId": "M0000020706",
                           "checked": false
                        }
                     ]
                  },
                  {
                     "title": "Casette",
                     "link": "casset",
                     "icon": "fa-solid fa-credit-card",
                     "color": "#1b5e20",
                     "menuId": "M00000208",
                     "checked": false,
                     "permissions": [
                        {
                           "title": "Authorize Casette",
                           "menuId": "M0000020801",
                           "checked": false
                        },
                        {
                           "title": "Update Casette",
                           "menuId": "M0000020802",
                           "checked": false
                        }
                     ]
                  },
                  {
                     "title": "Port",
                     "link": "port",
                     "icon": "fa-solid fa-credit-card",
                     "color": "#1b5e20",
                     "menuId": "M00000209",
                     "checked": false,
                     "permissions": [
                        {
                           "title": "View Port",
                           "menuId": "M0000020901",
                           "checked": false
                        }
                     ]
                  },
                  {
                     "title": "Transaction",
                     "link": "transaction",
                     "icon": "fa-solid fa-credit-card",
                     "color": "#1b5e20",
                     "menuId": "M00000210",
                     "checked": false,
                     "permissions": [
                        {
                           "title": "View Transaction",
                           "menuId": "M0000021001",
                           "checked": false
                        }
                     ]
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
                     "link": "network_Monitoring",
                     "icon": "fa fa-id-card",
                     "color": "#1b5e20",
                     "menuId": "M00000301",
                     "checked": false
                  },
                  {
                     "title": "HSM Monitoring",
                     "link": "hsm_Monitoring",
                     "icon": "fa fa-user-plus",
                     "color": "#1b5e20",
                     "menuId": "M00000302",
                     "checked": false,
                  },
                  {
                     "title": "TXN Monitoring",
                     "link": "txn_Monitoring",
                     "icon": "fa fa-user-plus",
                     "color": "#1b5e20",
                     "menuId": "M00000303",
                     "checked": false,
                  },
                  {
                     "title": "ATM Monitoring",
                     "link": "atm_Monitoring",
                     "icon": "fa fa-user-plus",
                     "color": "#1b5e20",
                     "menuId": "M00000304",
                     "checked": false,
                  },
                  {
                     "title": "Transaction Search",
                     "link": "transaction_Search",
                     "icon": "fa fa-user-plus",
                     "color": "#1b5e20",
                     "menuId": "M00000305",
                     "checked": false,
                  },
                  {
                     "title": "Fraud Monitoring",
                     "link": "fraud_Monitoring",
                     "icon": "fa fa-user-plus",
                     "color": "#1b5e20",
                     "menuId": "M00000306",
                     "checked": false,
                  },
                  {
                     "title": "Fraud and Risk Txn Management",
                     "link": "FraduRisk_TxnMonitoring",
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
                     "link": "task_Manager",
                     "icon": "fa-solid fa-file",
                     "color": "#1b5e20",
                     "menuId": "M00000401",
                     "checked": false
                  },
                  {
                     "title": "Port Manager",
                     "link": "port_Manager",
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
                     "link": "network_Control",
                     "icon": "fa-solid fa-file",
                     "color": "#1b5e20",
                     "menuId": "M00000404",
                     "checked": false
                  },
                  {
                     "title": "ATM Controller",
                     "link": "atm_control",
                     "icon": "fa fa-home",
                     "color": "#1b5e20",
                     "menuId": "M00000405",
                     "checked": false
                  },
                  {
                     "title": "Control Monitoring",
                     "link": "control_Monitoring",
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
                     "link": "internationalTXNEnadisable",
                     "icon": "fa-solid fa-person-chalkboard",
                     "color": "#1b5e20",
                     "menuId": "M00000501",
                     "checked": false,
                     "permissions": [
                        {
                           "title": "Edit Fraud",
                           "menuId": "M0000050101",
                           "checked": false
                        }
                     ]
                  },
                  {
                     "title": "TXN Allow Without PIN",
                     "link": "txnAllowWithoutPin",
                     "icon": "fa-solid fa-person-chalkboard",
                     "color": "#1b5e20",
                     "menuId": "M00000501",
                     "checked": false,
                     "permissions": [
                        { "title": "Authorize Card", "menuId": "M0000050201", "checked": false },
                        { "title": "Auth Deleted Card", "menuId": "M0000050202", "checked": false },
                        { "title": "View Card", "menuId": "M0000050203", "checked": false },
                        { "title": "Delete Card", "menuId": "M0000050204", "checked": false },
                        { "title": "Edit Card", "menuId": "M0000050205", "checked": false },
                        { "title": "Add Card", "menuId": "M0000050206", "checked": false }
                     ]
                  },
                  {
                     "title": "Risk Country Block",
                     "link": "riskCountryBlock",
                     "icon": "fa-solid fa-person-chalkboard",
                     "color": "#1b5e20",
                     "menuId": "M00000501",
                     "checked": false,
                     "permissions": [
                        { "title": "Authorize Country", "menuId": "M0000050301", "checked": false },
                        { "title": "View Country", "menuId": "M0000050302", "checked": false },
                        { "title": "Add Country", "menuId": "M0000050303", "checked": false },
                        { "title": "Edit Country", "menuId": "M0000050304", "checked": false }
                     ]
                  },
                  {
                     "title": "TXN Allow For Risk Country",
                     "link": "txnAllowedRiskCountry",
                     "icon": "fa-solid fa-person-chalkboard",
                     "color": "#1b5e20",
                     "menuId": "M00000501",
                     "checked": false,
                     "permissions": [
                        { "title": "Authorize Card", "menuId": "M0000050401", "checked": false },
                        { "title": "View Card", "menuId": "M0000050402", "checked": false },
                        { "title": "Add Card", "menuId": "M0000050403", "checked": false },
                        { "title": "Delete Card", "menuId": "M0000050404", "checked": false }
                     ]
                  },
                  {
                     "title": "MCC Block",
                     "link": "mccBlock",
                     "icon": "fa-solid fa-person-chalkboard",
                     "color": "#1b5e20",
                     "menuId": "M00000501",
                     "checked": false,
                     "permissions": [
                        { "title": "Authorize Delete MCC", "menuId": "M0000050501", "checked": false },
                        { "title": "Authorize MCC", "menuId": "M0000050502", "checked": false },
                        { "title": "Add MCC", "menuId": "M0000050503", "checked": false },
                        { "title": "Edit MCC", "menuId": "M0000050504", "checked": false },
                        { "title": "Add Allowed", "menuId": "M0000050505", "checked": false },
                        { "title": "Delete MCC", "menuId": "M0000050506", "checked": false },
                        { "title": "View MCC", "menuId": "M0000050507", "checked": false }
                     ]
                  },
                  {
                     "title": "TXN Allow For Blocked MCC",
                     "link": "txnAllowBlockedMCC",
                     "icon": "fa-solid fa-person-chalkboard",
                     "color": "#1b5e20",
                     "menuId": "M00000501",
                     "checked": false,
                     "permissions": [
                        { "title": "Authorize Card", "menuId": "M0000050601", "checked": false },
                        { "title": "Auth Deleted Card", "menuId": "M0000050602", "checked": false },
                        { "title": "View Card", "menuId": "M0000050603", "checked": false },
                        { "title": "Delete Card", "menuId": "M0000050604", "checked": false },
                        { "title": "Edit Card", "menuId": "M0000050605", "checked": false },
                        { "title": "Add Card", "menuId": "M0000050606", "checked": false }
                     ]
                  },
                  {
                     "title": "Risk Ecom Site Block",
                     "link": "riskEcomSiteBlock",
                     "icon": "fa-solid fa-person-chalkboard",
                     "color": "#1b5e20",
                     "menuId": "M00000501",
                     "checked": false,
                     "permissions": [
                        { "title": "Delete Authorize", "menuId": "M0000050701", "checked": false },
                        { "title": "Authorize Location", "menuId": "M0000050702", "checked": false },
                        { "title": "View Location", "menuId": "M0000050703", "checked": false },
                        { "title": "Add Location", "menuId": "M0000050704", "checked": false },
                        { "title": "Delete Location", "menuId": "M0000050705", "checked": false }
                     ]
                  },
               ]
            },
            {
               "title": "Reports",
               "icon": "fa fa-cog",
               "color": "#1b5e20",
               "menuId": "M000006",
               "checked": false,
               "subMenu": [
                  {
                     "title": "MIS REPORT",
                     "link": "mis-report",
                     "icon": "fa-solid fa-chart-line",
                     "color": "#1b5e20",
                     "menuId": "M00000601",
                     "checked": false,
                     "permissions": [
                        { "title": "Atm Cash Scroll", "menuId": "M0000060101", "checked": false },
                        { "title": "Atm Performance", "menuId": "M0000060102", "checked": false },
                        { "title": "ATM Live Denom Report", "menuId": "M0000060103", "checked": false },
                        { "title": "Atm Transaction Status", "menuId": "M0000060104", "checked": false }
                     ]
                  },
                  {
                     "title": "SUMMARY REPORTS",
                     "link": "summary-reports",
                     "icon": "fa-solid fa-chart-pie",
                     "color": "#1b5e20",
                     "menuId": "M00000602",
                     "checked": false,
                     "permissions": [
                        { "title": "Consolidated Report", "menuId": "M0000060201", "checked": false },
                        { "title": "Network Summary Report", "menuId": "M0000060202", "checked": false },
                        { "title": "OFUS_Txn Report", "menuId": "M0000060203", "checked": false }
                     ]
                  },
                  {
                     "title": "TERMINAL TRANSACTION REPORTS",
                     "link": "terminal-txn-reports",
                     "icon": "fa-solid fa-terminal",
                     "color": "#1b5e20",
                     "menuId": "M00000603",
                     "checked": false,
                     "permissions": [
                        { "title": "ATM TRANSACTION Report", "menuId": "M0000060301", "checked": false }
                     ]
                  },
                  {
                     "title": "AUDIT REPORTS",
                     "link": "audit-reports",
                     "icon": "fa-solid fa-clipboard-check",
                     "color": "#1b5e20",
                     "menuId": "M00000604",
                     "checked": false,
                     "permissions": [
                        { "title": "AUDIT REPORTS", "menuId": "M0000060401", "checked": false }
                     ]
                  }
               ]
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
                     "link": "email_update",
                     "menuId": "M00000701",
                     "checked": false,
                     "permissions": [
                        { "title": "View Email", "menuId": "M0000070101", "checked": false },
                        { "title": "Add Email", "menuId": "M0000070102", "checked": false },
                        { "title": "Delete Email", "menuId": "M0000070103", "checked": false }
                     ]
                  },
                  {
                     "title": "Modile Update",
                     "icon": "fa-solid fa-address-card",
                     "color": "#1b5e20",
                     "link": "mobile_update",
                     "menuId": "M00000702",
                     "checked": false, "permissions": [
                        { "title": "View Mobile", "menuId": "M0000070201", "checked": false },
                        { "title": "Add Mobile", "menuId": "M0000070202", "checked": false },
                        { "title": "Delete Mobile", "menuId": "M0000070203", "checked": false }
                     ]

                  },
                  {
                     "title": "SAF Mnagement",
                     "link": "saf",
                     "icon": "fa-solid fa-address-card",
                     "color": "#1b5e20",
                     "menuId": "M00000703",
                     "checked": false
                  },
                  {
                     "title": "Admin Card",
                     "link": "admin_card",
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
                     "link": "auth-profile",
                     "menuId": "M00000801",
                     "checked": false,
                     "permissions": [
                        { "title": "Deleted Authorization", "menuId": "M0000080101", "checked": false },
                        { "title": "Add Profile", "menuId": "M0000080102", "checked": false },
                        { "title": "Edit Profile", "menuId": "M0000080103", "checked": false },
                        { "title": "Delete Profile", "menuId": "M0000080104", "checked": false },
                        { "title": "View Profile", "menuId": "M0000080105", "checked": false }
                     ]
                  },
                  {
                     "title": "User",
                     "icon": "fa-solid fa-address-card",
                     "color": "#1b5e20",
                     "link": "auth-User",
                     "menuId": "M00000802",
                     "checked": false,
                     "permissions": [
                        { "title": "Authorize User", "menuId": "M0000080201", "checked": false },
                        { "title": "Unblock User", "menuId": "M0000080202", "checked": false },
                        { "title": "Reset Password", "menuId": "M0000080203", "checked": false },
                        { "title": "Block User", "menuId": "M0000080204", "checked": false },
                        { "title": "Delete User Authorization", "menuId": "M0000080205", "checked": false },
                        { "title": "Add User", "menuId": "M0000080206", "checked": false },
                        { "title": "Edit User", "menuId": "M0000080207", "checked": false },
                        { "title": "View User", "menuId": "M0000080208", "checked": false },
                        { "title": "Delete User", "menuId": "M0000080209", "checked": false }
                     ]
                  },]
            },
         ]
   }

   getMenuitem() {
      return this.menuItems;
   }
}
