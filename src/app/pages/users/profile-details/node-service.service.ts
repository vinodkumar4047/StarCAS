import { Injectable } from '@angular/core';
import { MenuItem, TreeNode } from 'primeng/api';
import { Tree } from 'primeng/tree';

@Injectable({
  providedIn: 'root'
})
export class NodeServiceService {

  constructor() { }
  getUserAccessModules(): Promise<MenuItem[]> {
    return Promise.resolve(
      [
        {
          "title": "Dashboard",
          "link": "dashboard",
          "icon": "layout-dashboard",
          "color": "#1b5e20",
          "menuId": "M000001",
          "checked": false
        },
        {
          "title": "Configuration",
          "icon": "wrench",
          "color": "#1b5e20",
          "menuId": "M000002",
          "checked": false,
          "subMenu": [
            {
              "title": "Institution",
              "link": "institution",
              "icon": "fa-solid fa-credit-card",
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
              "icon": "fa-solid fa-credit-card",
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
            },
            {
              "title": "Status Map",
              "link": "statusMap",
              "icon": "fa-solid fa-credit-card",
              "color": "#1b5e20",
              "menuId": "M00000211",
              "checked": false,
              "permissions": [
                {
                  "title": "View Transaction",
                  "menuId": "M0000021101",
                  "checked": false
                }
              ]
            }
          ]
        },

        {
          "title": "Monitoring",
          "icon": "monitor",
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
          "icon": "SlidersHorizontal",
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
            // {
            //   "title": "Channel Manager",
            //   "link": "instant-IND",
            //   "icon": "fa-solid fa-file",
            //   "color": "#1b5e20",
            //   "menuId": "M00000403",
            //   "checked": false
            // },
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
          "icon": "shield-alert",
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
              "menuId": "M00000502",
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
              "menuId": "M00000503",
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
              "menuId": "M00000504",
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
              "menuId": "M00000505",
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
              "menuId": "M00000506",
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
              "menuId": "M00000507",
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
          "icon": "message-circle-warning",
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
          "icon": "plug",
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
          "icon": "user-cog",
          "color": "#1b5e20",
          "menuId": "M000008",
          "checked": false,
          "subMenu": [
            {
              "title": "Profile",
              "icon": "fa-solid fa-address-card",
              "color": "#1b5e20",
              "link": "profile",
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
              "link": "user",
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
            }, {
              "title": "Password Policy",
              "icon": "fa-solid fa-address-card",
              "color": "#1b5e20",
              "link": "profilePolicy",
              "menuId": "M00000803",
              "checked": false,
              "permissions": [
                // { "title": "Authorize User", "menuId": "M0000080201", "checked": false },
                // { "title": "Unblock User", "menuId": "M0000080202", "checked": false },
                // { "title": "Reset Password", "menuId": "M0000080203", "checked": false },
                // { "title": "Block User", "menuId": "M0000080204", "checked": false },
                // { "title": "Delete User Authorization", "menuId": "M0000080205", "checked": false },
                // { "title": "Add User", "menuId": "M0000080206", "checked": false },
                { "title": "Edit User", "menuId": "M0000080307", "checked": false },
                { "title": "View User", "menuId": "M0000080308", "checked": false },
                // { "title": "Delete User", "menuId": "M0000080209", "checked": false }
              ]
            },]
        },
        {
          "title": "LICENSE GENERATION",
          "link": "Rnf-details",
          "icon": "user-cog",
          "color": "#1b5e20",
          "menuId": "M000009",
          "checked": false,
          "subMenu": [
            {
              "title": "Encryption LICENSE",
              "icon": "fa-solid fa-address-card",
              "color": "#1b5e20",
              "link": "encrypt",
              "menuId": "M00000901",
              "checked": false,
            },
            {
              "title": "Decryption LICENSE",
              "icon": "fa-solid fa-address-card",
              "color": "#1b5e20",
              "link": "decrypt",
              "menuId": "M00000902",
              "checked": false,
            },]
        },
      ]
      // [
      //   {
      //     label: 'Configuration',
      //     data: 'M000002',
      //     expandedIcon: 'pi pi-folder-open',
      //     collapsedIcon: 'pi pi-folder',
      //     children: [
      //       {
      //         label: 'Institution',
      //         data: 'M00000201',
      //         icon: 'pi pi-building',
      //         children: [
      //           {
      //             label: 'View Institution',
      //             data: 'M0000020101',
      //             icon: 'pi pi-eye',
      //           }
      //         ]
      //       },
      //       {
      //         label: 'Branch',
      //         data: 'M00000202',
      //         icon: 'pi pi-sitemap',
      //         children: [
      //           {
      //             label: 'Delete Authorize Branch',
      //             data: 'M0000020201',
      //             icon: 'pi pi-times-circle',
      //           },
      //           {
      //             label: 'Authorize Branch',
      //             data: 'M0000020202',
      //             icon: 'pi pi-check-circle',
      //           },
      //           {
      //             label: 'Add Branch',
      //             data: 'M0000020203',
      //             icon: 'pi pi-plus', // plus icon for adding
      //           },
      //           {
      //             label: 'View Branch',
      //             data: 'M0000020204',
      //             icon: 'pi pi-eye', // eye icon for viewing
      //           },
      //           {
      //             label: 'Edit Branch',
      //             data: 'M0000020205',
      //             icon: 'pi pi-pencil', // pencil icon for editing
      //           },
      //           {
      //             label: 'Delete Branch',
      //             data: 'M0000020206',
      //             icon: 'pi pi-trash', // trash icon for deleting
      //           }

      //         ]
      //       },
      //       {
      //         label: 'Bin',
      //         data: 'M00000203',
      //         icon: 'pi pi-trash',
      //         children: [
      //           {
      //             label: 'View Bin',
      //             data: 'M0000020301',
      //             icon: 'pi pi-eye',
      //           },
      //         ]
      //       },
      //       {
      //         label: 'ATM Type',
      //         data: 'M00000204',
      //         icon: 'pi pi-credit-card',
      //         children: [
      //           {
      //             label: 'View ATM Type',
      //             data: 'M0000020401',
      //             icon: 'pi pi-eye',
      //           },
      //           {
      //             label: 'Add ATM Type',
      //             data: 'M0000020402',
      //             icon: 'pi pi-plus', // plus icon for adding
      //           }
      //         ]
      //       },
      //       {
      //         label: 'ATM',
      //         data: 'M00000205',
      //         icon: 'pi pi-credit-card',
      //         children: [
      //           {
      //             label: 'Authorize ATM',
      //             data: 'M0000020501',
      //             icon: 'pi pi-check-circle',
      //           },
      //           {
      //             label: 'Authorize Delete ATM',
      //             data: 'M0000020502',
      //             icon: 'pi pi-times-circle',
      //           },
      //           {
      //             label: 'Add ATM',
      //             data: 'M0000020503',
      //             icon: 'pi pi-plus', // plus icon for adding
      //           },
      //           {
      //             label: 'View ATM',
      //             data: 'M0000020504',
      //             icon: 'pi pi-eye', // eye icon for viewing
      //           },
      //           {
      //             label: 'Edit ATM',
      //             data: 'M0000020505',
      //             icon: 'pi pi-pencil', // pencil icon for editing
      //           },
      //           {
      //             label: 'Delete ATM',
      //             data: 'M0000020506',
      //             icon: 'pi pi-trash', // trash icon for deleting
      //           }
      //         ]
      //       },
      //       {
      //         label: 'External Bin',
      //         data: 'M00000206',
      //         icon: 'pi pi-trash',
      //         children: [
      //           {
      //             label: 'Authorize External Bin',
      //             data: 'M0000020601',
      //             icon: 'pi pi-check-circle',
      //           },
      //           {
      //             label: 'Delete Authorize External Bin',
      //             data: 'M0000020602',
      //             icon: 'pi pi-times-circle',
      //           },
      //           {
      //             label: 'Add External Bin',
      //             data: 'M0000020603',
      //             icon: 'pi pi-plus', // plus icon for adding
      //           },
      //           {
      //             label: 'View External Bin',
      //             data: 'M0000020604',
      //             icon: 'pi pi-eye', // eye icon for viewing
      //           },
      //           {
      //             label: 'Edit External Bin',
      //             data: 'M0000020605',
      //             icon: 'pi pi-pencil', // pencil icon for editing
      //           },
      //           {
      //             label: 'Delete External Bin',
      //             data: 'M0000020606',
      //             icon: 'pi pi-trash', // trash icon for deleting
      //           }
      //         ]
      //       },
      //       {
      //         label: 'Fit',
      //         data: 'M00000207',
      //         icon: 'pi pi-cog',
      //         children: [
      //           {
      //             label: 'Authorize Fit',
      //             data: 'M0000020701',
      //             icon: 'pi pi-check-circle',
      //           },
      //           {
      //             label: 'Authorize Delete Fit',
      //             data: 'M0000020702',
      //             icon: 'pi pi-times-circle',
      //           },
      //           {
      //             label: 'Add Fit',
      //             data: 'M0000020703',
      //             icon: 'pi pi-plus', // plus icon for adding
      //           },
      //           {
      //             label: 'View Fit',
      //             data: 'M0000020704',
      //             icon: 'pi pi-eye', // eye icon for viewing
      //           },
      //           {
      //             label: 'Edit Fit',
      //             data: 'M0000020705',
      //             icon: 'pi pi-pencil', // pencil icon for editing
      //           },
      //           {
      //             label: 'Delete Fit',
      //             data: 'M0000020706',
      //             icon: 'pi pi-trash', // trash icon for deleting
      //           }
      //         ]
      //       },
      //       {
      //         label: 'CASSET',
      //         data: 'M00000208',
      //         icon: 'pi pi-box',
      //         children: [
      //           {
      //             label: 'Authorize',
      //             data: 'M0000020801',
      //             icon: 'pi pi-check-circle',
      //           },
      //           {
      //             label: 'Update CASSET',
      //             data: 'M0000020802',
      //             icon: 'pi pi-pencil',
      //           },
      //         ]
      //       },
      //       {
      //         label: 'Port',
      //         data: 'M00000209',
      //         icon: 'pi pi-share-alt',
      //         children: [
      //           {
      //             label: 'View Port',
      //             data: 'M0000020901',
      //             icon: 'pi pi-eye',
      //           },
      //         ]
      //       },
      //       {
      //         label: 'Transaction',
      //         data: 'M00000210',
      //         icon: 'pi pi-exchange',
      //         children: [
      //           {
      //             label: 'View Transaction',
      //             data: 'M0000021001',
      //             icon: 'pi pi-eye',
      //           },
      //         ]
      //       },
      //     ]
      //   },
      //   {
      //     label: 'Monitorning',
      //     data: 'M000003',
      //     expandedIcon: 'pi pi-folder-open',
      //     collapsedIcon: 'pi pi-folder',
      //     children: [
      //       {
      //         label: 'Network Monitoring',
      //         data: 'M00000301',
      //         icon: 'pi pi-wallet'
      //       },
      //       {
      //         label: 'HSM Monitoring',
      //         data: 'M00000302',
      //         icon: 'pi pi-money-bill'
      //       },
      //       {
      //         label: 'Txn Monitoring',
      //         data: 'M00000303',
      //         icon: 'pi pi-money-bill'
      //       },
      //       {
      //         label: 'ATM  Monitoring',
      //         data: 'M00000304',
      //         icon: 'pi pi-money-bill'
      //       },
      //       {
      //         label: 'Fraud & Risk Txn Monitoring',
      //         data: 'M00000307',
      //         icon: 'pi pi-shield'
      //       },
      //       {
      //         label: 'Fraud  Monitoring',
      //         data: 'M00000306',
      //         icon: 'pi pi-ban'
      //       },
      //       {
      //         label: 'Transaction Search',
      //         data: 'M00000305',
      //         icon: 'pi pi-money-bill'
      //       },
      //     ]
      //   },
      //   {
      //     label: 'Control',
      //     data: 'M000004',
      //     expandedIcon: 'pi pi-folder-open',
      //     collapsedIcon: 'pi pi-folder',
      //     children: [
      //       {
      //         label: 'Task Manager',
      //         data: 'M00000401',
      //         icon: 'pi pi-list'
      //       },
      //       {
      //         label: 'Port Manager',
      //         data: 'M00000402',
      //         icon: 'pi pi-plug'
      //       },
      //       {
      //         label: 'Channel Mgr',
      //         data: 'M00000403',
      //         icon: 'pi pi-sitemap'
      //       },
      //       {
      //         label: 'Network Control',
      //         data: 'M00000404',
      //         icon: 'pi pi-sitemap'
      //       },
      //       {
      //         label: 'ATM Control',
      //         data: 'M00000405',
      //         icon: 'pi pi-desktop'
      //       },
      //     ]
      //   }
      //   ,
      //   {
      //     label: 'Risk Management',
      //     data: 'M000005',
      //     expandedIcon: 'pi pi-folder-open',
      //     collapsedIcon: 'pi pi-folder',
      //     children: [
      //       {
      //         label: 'INTERNATIONAL TXN ENABLED',
      //         data: 'M00000501',
      //         icon: 'pi pi-globe',
      //         children: [
      //           {
      //             label: 'edit Fraud',
      //             data: 'M0000050101',
      //             icon: 'pi pi-pencil',
      //           },
      //         ]
      //       },
      //       {
      //         label: 'TXN ALLOW WITHOUT PIN',
      //         data: 'M00000501',
      //         icon: 'pi pi-unlock',
      //         children: [
      //           {
      //             label: 'AuthorizeCard',
      //             data: 'M0000050201',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'AuthDeletedCard',
      //             data: 'M0000050202',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'View Card',
      //             data: 'M0000050203',
      //             icon: 'pi pi-pencil',
      //           }, {
      //             label: 'Delete Card',
      //             data: 'M0000050204',
      //             icon: 'pi pi-pencil',
      //           }, {
      //             label: 'Edit Card',
      //             data: 'M0000050205',
      //             icon: 'pi pi-pencil',
      //           }, {
      //             label: 'Add Card',
      //             data: 'M0000050206',
      //             icon: 'pi pi-pencil',
      //           },
      //         ]
      //       },
      //       {
      //         label: 'RISK COUNTRY BLOCK',
      //         data: 'M00000501',
      //         icon: 'pi pi-ban',
      //         children: [
      //           {
      //             label: 'Authorize Country',
      //             data: 'M0000050301',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'View Country',
      //             data: 'M0000050302',
      //             icon: 'pi pi-pencil',
      //           }
      //           ,
      //           {
      //             label: 'Add Country',
      //             data: 'M0000050303',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'Edit Country',
      //             data: 'M0000050304',
      //             icon: 'pi pi-pencil',
      //           }
      //         ]
      //       },
      //       {
      //         label: 'TXN ALLOW FOR RISK COUNTRY',
      //         data: 'M00000501',
      //         icon: 'pi pi-check-circle',
      //         children: [
      //           {
      //             label: 'Authorize Card',
      //             data: 'M0000050401',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'View Card',
      //             data: 'M0000050402',
      //             icon: 'pi pi-pencil',
      //           }
      //           ,
      //           {
      //             label: 'Add Card',
      //             data: 'M0000050403',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'Delete Card',
      //             data: 'M0000050404',
      //             icon: 'pi pi-pencil',
      //           }
      //         ]
      //       },
      //       {
      //         label: 'MCC BLOCK',
      //         data: 'M00000501',
      //         icon: 'pi pi-lock',
      //         children: [
      //           {
      //             label: 'Authorize Delete MCC',
      //             data: 'M0000050501',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'Authorize MCC',
      //             data: 'M0000050502',
      //             icon: 'pi pi-pencil',
      //           }
      //           ,
      //           {
      //             label: 'Add MCC',
      //             data: 'M0000050503',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'Edit MCC',
      //             data: 'M0000050504',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'Add ALLOWED',
      //             data: 'M0000050505',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'Delete MCC',
      //             data: 'M0000050506',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'View MCC',
      //             data: 'View Transaction',
      //             icon: 'M0000050507',
      //           }
      //         ]
      //       },
      //       {
      //         label: 'TXN ALLOW FOR BLOCKED MCC',
      //         data: 'M00000501',
      //         icon: 'pi pi-check',
      //         children: [
      //           {
      //             label: 'AuthorizeCard',
      //             data: 'M0000050601',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'AuthDeletedCard',
      //             data: 'M0000050602',
      //             icon: 'pi pi-pencil',
      //           }
      //           ,
      //           {
      //             label: 'View Card',
      //             data: 'M0000050603',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'Delete Card',
      //             data: 'M0000050604',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'Edit Card',
      //             data: 'M0000050605',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'Add Card',
      //             data: 'View Transaction',
      //             icon: 'M0000050606',
      //           }
      //         ]
      //       },
      //       {
      //         label: 'RISK ECOM SITE BLOCK',
      //         data: 'M00000501',
      //         icon: 'pi pi-shield',
      //         children: [
      //           {
      //             label: 'Delete Authorize',
      //             data: 'M0000050701',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'Authorize Location',
      //             data: 'M0000050702',
      //             icon: 'pi pi-pencil',
      //           }
      //           ,
      //           {
      //             label: 'View Location',
      //             data: 'M0000050703',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'Add Location',
      //             data: 'M0000050704',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'Delete Location',
      //             data: 'M0000050705',
      //             icon: 'pi pi-pencil',
      //           }
      //         ]
      //       },
      //     ]
      //   },
      //   {
      //     label: 'Reports',
      //     data: 'Reports ',
      //     expandedIcon: 'pi pi-folder-open',
      //     collapsedIcon: 'pi pi-folder',
      //     children: [
      //       {
      //         label: 'MIS REPORT',
      //         data: 'MIS REPORT',
      //         icon: 'pi pi-users',
      //         children: [
      //           {
      //             label: 'Atm Cash Scroll',
      //             data: 'Atm Cash Scroll',
      //             icon: 'pi pi-users',
      //           },
      //           {
      //             label: 'Atm Performance',
      //             data: 'Atm Performance',
      //             icon: 'pi pi-users',
      //           },
      //           {
      //             label: 'ATM Live Denom Report',
      //             data: 'ATM Live Denom Report',
      //             icon: 'pi pi-users',
      //           },
      //           {
      //             label: 'Atm Transaction Status',
      //             data: 'Atm Transaction Status',
      //             icon: 'pi pi-users',
      //           }
      //         ]
      //       },
      //       {
      //         label: 'SUMMARY REPORTS',
      //         data: 'role_mgmt',
      //         icon: 'pi pi-lock',
      //         children: [
      //           {
      //             label: 'Consolidated Report',
      //             data: 'Consolidated Report',
      //             icon: 'pi pi-users',
      //           },
      //           {
      //             label: 'Network Summary Report',
      //             data: 'Network Summary Report',
      //             icon: 'pi pi-users',
      //           },
      //           {
      //             label: 'OFUS_Txn Report',
      //             data: 'Network Summary Report',
      //             icon: 'pi pi-users',
      //           }
      //         ]
      //       },
      //       {
      //         label: 'TERMINAL TRANSACTION REPORTS',
      //         data: 'TERMINAL TRANSACTION REPORTS',
      //         icon: 'pi pi-lock',
      //         children: [
      //           {
      //             label: '  ATM TRANSACTION Report',
      //             data: '  ATM TRANSACTION Report',
      //             icon: 'pi pi-users',
      //           },
      //         ]
      //       },
      //       {
      //         label: 'AUDIT REPORTS',
      //         data: 'AUDIT REPORTS',
      //         icon: 'pi pi-lock',
      //         children: [
      //           {
      //             label: 'AUDIT REPORTS',
      //             data: 'AUDIT REPORTS',
      //             icon: 'pi pi-users',
      //           },
      //         ]
      //       },

      //     ]
      //   },
      //   {
      //     label: 'Utility',
      //     data: 'M000007',
      //     expandedIcon: 'pi pi-folder-open',
      //     collapsedIcon: 'pi pi-folder',
      //     children: [
      //       {
      //         label: 'Email Update',
      //         data: 'M00000701',
      //         icon: 'pi pi-envelope',
      //         children: [
      //           {
      //             label: 'View Email',
      //             data: 'M0000070101',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'Add Email',
      //             data: 'M0000070102',
      //             icon: 'pi pi-pencil',
      //           }
      //           ,
      //           {
      //             label: 'Delete Email',
      //             data: 'M0000070103',
      //             icon: 'pi pi-pencil',
      //           }
      //         ]
      //       },
      //       {
      //         label: 'Mobile Update',
      //         data: 'M00000702',
      //         icon: 'pi pi-mobile',
      //         children: [
      //           {
      //             label: 'View Mobile',
      //             data: 'M0000070201',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'Add Mobile',
      //             data: 'M0000070202',
      //             icon: 'pi pi-pencil',
      //           }
      //           ,
      //           {
      //             label: 'Delete Mobile',
      //             data: 'M0000070203',
      //             icon: 'pi pi-pencil',
      //           },
      //         ]
      //       },
      //       {
      //         label: 'SAF Management',
      //         data: 'M00000703',
      //         icon: 'pi pi-database'
      //       },
      //       {
      //         label: 'Admin Card',
      //         data: 'M00000704',
      //         icon: 'pi pi-id-card'
      //       }
      //     ]
      //   },
      //   {
      //     label: 'User Management',
      //     data: 'M000008',
      //     expandedIcon: 'pi pi-folder-open',
      //     collapsedIcon: 'pi pi-folder',
      //     children: [
      //       {
      //         label: 'Profile',
      //         data: 'M00000801',
      //         icon: 'pi pi-envelope',
      //         children: [
      //           {
      //             label: 'Deleted Authorization',
      //             data: 'M0000080101',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'Add Profile',
      //             data: 'M0000080102',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'Edit Profile',
      //             data: 'M0000080103',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'Delete Profile',
      //             data: 'M0000080104',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'View Profile',
      //             data: 'M0000080105',
      //             icon: 'pi pi-pencil',
      //           }
      //         ]
      //       },
      //       {
      //         label: 'User',
      //         data: 'M00000802',
      //         icon: 'pi pi-mobile',
      //         children: [
      //           {
      //             label: 'Authorize User',
      //             data: 'M0000080201',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'Unblock User',
      //             data: 'M0000080202',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'Reset Password',
      //             data: 'M0000080203',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'Block User',
      //             data: 'M0000080204',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'Delete User Authorization',
      //             data: 'M0000080205',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'Add User',
      //             data: 'M0000080206',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'Edit User',
      //             data: 'M0000080207',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'View User',
      //             data: 'M0000080208',
      //             icon: 'pi pi-pencil',
      //           },
      //           {
      //             label: 'Delete User',
      //             data: 'M0000080209',
      //             icon: 'pi pi-pencil',
      //           }
      //         ]
      //       }
      //     ]
      //   },
      // ]
    );
  }

}
