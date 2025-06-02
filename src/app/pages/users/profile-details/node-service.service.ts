import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Tree } from 'primeng/tree';

@Injectable({
  providedIn: 'root'
})
export class NodeServiceService {

  constructor() { }
  getUserAccessModules(): Promise<TreeNode[]> {
    return Promise.resolve([
      {
        label: 'Configuration ',
        data: 'admin',
        expandedIcon: 'pi pi-folder-open',
        collapsedIcon: 'pi pi-folder',
        children: [
          {
            label: 'Institution',
            data: 'Institution',
            icon: 'pi pi-building',
            children: [
              {
                label: 'View Institution',
                data: 'View_Institution',
                icon: 'pi pi-eye',
              }
            ]
          },
          {
            label: 'Branch',
            data: 'role_mgmt',
            icon: 'pi pi-sitemap',
            children: [
              {
                label: 'Delete Authorize Branch',
                data: 'Delete_Authorize_Branch',
                icon: 'pi pi-times-circle',
              },
              {
                label: 'Authorize Branch',
                data: 'Authorize_Branch',
                icon: 'pi pi-check-circle',
              },
              {
                label: 'Add Branch',
                data: 'Add_Branch',
                icon: 'pi pi-plus', // plus icon for adding
              },
              {
                label: 'View Branch',
                data: 'View_Branch',
                icon: 'pi pi-eye', // eye icon for viewing
              },
              {
                label: 'Edit Branch',
                data: 'Edit_Branch',
                icon: 'pi pi-pencil', // pencil icon for editing
              },
              {
                label: 'Delete Branch',
                data: 'Delete_Branch',
                icon: 'pi pi-trash', // trash icon for deleting
              }

            ]
          },
          {
            label: 'Bin',
            data: 'role_mgmt',
            icon: 'pi pi-trash',
            children: [
              {
                label: ' View Bin',
                data: ' View_Bin',
                icon: 'pi pi-eye',
              },
            ]
          },
          {
            label: 'ATM Type',
            data: 'role_mgmt',
            icon: 'pi pi-credit-card',
            children: [
              {
                label: 'View ATM Type',
                data: 'View_ATM_Type',
                icon: 'pi pi-eye',
              },
              {
                label: 'Add ATM Type',
                data: 'Add_ATM Type',
                icon: 'pi pi-plus', // plus icon for adding
              }
            ]
          },
          {
            label: 'ATM',
            data: 'role_mgmt',
            icon: 'pi pi-credit-card',
            children: [
              {
                label: 'Authorize ATM',
                data: 'Authorize_ATM',
                icon: 'pi pi-check-circle',
              },
              {
                label: 'Authorize Delete ATM',
                data: 'Authorize_Delete_ATM',
                icon: 'pi pi-times-circle',
              },
              {
                label: 'Add ATM',
                data: 'Add_ATM',
                icon: 'pi pi-plus', // plus icon for adding
              },
              {
                label: 'View ATM',
                data: 'View_ATM',
                icon: 'pi pi-eye', // eye icon for viewing
              },
              {
                label: 'Edit ATM',
                data: 'Edit_ATM',
                icon: 'pi pi-pencil', // pencil icon for editing
              },
              {
                label: 'Delete ATM',
                data: 'Delete_ATM',
                icon: 'pi pi-trash', // trash icon for deleting
              }
            ]
          },
          {
            label: 'External Bin',
            data: 'role_mgmt',
            icon: 'pi pi-trash',
            children: [
              {
                label: 'Authorize External Bin',
                data: 'Authorize_External_Bin',
                icon: 'pi pi-check-circle',
              },
              {
                label: 'Delete Authorize External Bin',
                data: 'Delete_Authorize_External_Bin',
                icon: 'pi pi-times-circle',
              },
              {
                label: 'Add External Bin',
                data: 'Add_ATM',
                icon: 'pi pi-plus', // plus icon for adding
              },
              {
                label: 'View External Bin',
                data: 'View_ATM',
                icon: 'pi pi-eye', // eye icon for viewing
              },
              {
                label: 'Edit External Bin',
                data: 'Edit_ATM',
                icon: 'pi pi-pencil', // pencil icon for editing
              },
              {
                label: 'Delete External Bin',
                data: 'Delete_ATM',
                icon: 'pi pi-trash', // trash icon for deleting
              }
            ]
          },
          {
            label: 'Fit',
            data: 'role_mgmt',
            icon: 'pi pi-cog',
            children: [
              {
                label: 'Authorize Fit',
                data: 'Authorize Fite',
                icon: 'pi pi-check-circle',
              },
              {
                label: 'Authorize Delete Fit',
                data: 'Authorize Delete Fit',
                icon: 'pi pi-times-circle',
              },
              {
                label: 'Add Fit',
                data: 'Add_ATM',
                icon: 'pi pi-plus', // plus icon for adding
              },
              {
                label: 'View Fit',
                data: 'View_ATM',
                icon: 'pi pi-eye', // eye icon for viewing
              },
              {
                label: 'Edit Fit',
                data: 'Edit_ATM',
                icon: 'pi pi-pencil', // pencil icon for editing
              },
              {
                label: 'Delete Fit',
                data: 'Delete_ATM',
                icon: 'pi pi-trash', // trash icon for deleting
              }
            ]
          },
          {
            label: 'CASSET',
            data: 'role_mgmt',
            icon: 'pi pi-box',
            children: [
              {
                label: 'Authorize',
                data: 'View_ATM_Type',
                icon: 'pi pi-check-circle',
              },
              {
                label: 'Update CASSET',
                data: 'View_ATM_Type',
                icon: 'pi pi-pencil',
              },
            ]
          },
          {
            label: 'Port',
            data: 'role_mgmt',
            icon: 'pi pi-share-alt',
            children: [
              {
                label: 'View Port',
                data: 'View Port',
                icon: 'pi pi-eye',
              },
            ]
          },
          {
            label: 'Transaction',
            data: 'role_mgmt',
            icon: 'pi pi-exchange',
            children: [
              {
                label: 'View Transaction',
                data: 'View Transaction',
                icon: 'pi pi-eye',
              },
            ]
          },
        ]
      },
      {
        label: 'Monitorning ',
        data: 'Monitorning',
        expandedIcon: 'pi pi-folder-open',
        collapsedIcon: 'pi pi-folder',
        children: [
          {
            label: 'Network Monitoring',
            data: 'Network Monitoring',
            icon: 'pi pi-wallet'
          },
          {
            label: 'HSM Monitoring',
            data: 'HSM Monitoring',
            icon: 'pi pi-money-bill'
          },
          {
            label: 'Txn Monitoring',
            data: 'Txn Monitoring',
            icon: 'pi pi-money-bill'
          },
          {
            label: 'ATM  Monitoring',
            data: 'ATM  Monitoring',
            icon: 'pi pi-money-bill'
          },
          {
            label: 'Fraud & Risk Txn Monitoring',
            data: 'Fraud & Risk Txn Monitoring',
            icon: 'pi pi-shield'
          },
          {
            label: 'Fraud  Monitoring',
            data: 'Fraud  Monitoring',
            icon: 'pi pi-ban'
          },
          {
            label: 'Transaction Search',
            data: 'Transaction Search',
            icon: 'pi pi-money-bill'
          },
        ]
      },
      {
        label: 'Control  ',
        data: 'Control ',
        expandedIcon: 'pi pi-folder-open',
        collapsedIcon: 'pi pi-folder',
        children: [
          {
            label: 'Task Manager',
            data: 'Task Manager',
            icon: 'pi pi-list'
          },
          {
            label: 'Port Manager',
            data: 'Port Manager',
            icon: 'pi pi-plug'
          },
          {
            label: 'Channel Mgr',
            data: 'Network Control',
            icon: 'pi pi-sitemap'
          },
          {
            label: 'Network Control',
            data: 'Network Control',
            icon: 'pi pi-sitemap'
          },
          {
            label: 'ATM Control',
            data: 'ATM Control',
            icon: 'pi pi-desktop'
          },
        ]
      }
      ,
      {
        label: 'Risk Management   ',
        data: 'Risk Management  ',
        expandedIcon: 'pi pi-folder-open',
        collapsedIcon: 'pi pi-folder',
        children: [
          {
            label: 'INTERNATIONAL TXN ENABLED',
            data: 'INTERNATIONAL TXN ENABLED',
            icon: 'pi pi-globe',
            children: [
              {
                label: 'edit Fraud',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
            ]
          },
          {
            label: 'TXN ALLOW WITHOUT PIN',
            data: 'TXN ALLOW WITHOUT PIN',
            icon: 'pi pi-unlock',
            children: [
              {
                label: 'AuthorizeCard',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: 'AuthDeletedCard',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: 'View Card',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              }, {
                label: 'Delete Card',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              }, {
                label: ' Edit Card',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              }, {
                label: 'Add Card',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
            ]
          },
          {
            label: 'RISK COUNTRY BLOCK',
            data: 'RISK COUNTRY BLOCK',
            icon: 'pi pi-ban',
            children: [
              {
                label: 'Authorize Country',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: ' View Country',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              }
              ,
              {
                label: 'Add Country',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: ' Edit Country',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              }
            ]
          },
          {
            label: 'TXN ALLOW FOR RISK COUNTRY',
            data: 'TXN ALLOW FOR RISK COUNTRY',
            icon: 'pi pi-check-circle',
            children: [
              {
                label: 'Authorize Card',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: ' View Card',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              }
              ,
              {
                label: 'Add Card',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: '  Delete Card',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              }
            ]
          },
          {
            label: 'MCC BLOCK',
            data: 'MCC BLOCK',
            icon: 'pi pi-lock',
            children: [
              {
                label: 'Authorize Delete MCC',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Authorize MCC',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              }
              ,
              {
                label: 'Add MCC',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Edit MCC',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Add ALLOWED',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Delete MCC',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: 'View MCC',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              }
            ]
          },
          {
            label: 'TXN ALLOW FOR BLOCKED MCC',
            data: 'TXN ALLOW FOR BLOCKED MCC',
            icon: 'pi pi-check',
            children: [
              {
                label: 'AuthorizeCard',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: 'AuthDeletedCard',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              }
              ,
              {
                label: 'View Card',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: ' Delete Card',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Edit Card',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Add Card',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              }
            ]
          },
          {
            label: 'RISK ECOM SITE BLOCK',
            data: 'RISK ECOM SITE BLOCK',
            icon: 'pi pi-shield',
            children: [
              {
                label: 'Delete Authorize',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Authorize Location',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              }
              ,
              {
                label: 'View Location',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: ' Add Location',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Delete Location',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              }
            ]
          },
        ]
      },
      {
        label: 'Reports',
        data: 'Reports ',
        expandedIcon: 'pi pi-folder-open',
        collapsedIcon: 'pi pi-folder',
        children: [
          {
            label: 'MIS REPORT',
            data: 'MIS REPORT',
            icon: 'pi pi-users',
            children: [
              {
                label: 'Atm Cash Scroll',
                data: 'Atm Cash Scroll',
                icon: 'pi pi-users',
              },
              {
                label: 'Atm Performance',
                data: 'Atm Performance',
                icon: 'pi pi-users',
              },
              {
                label: 'ATM Live Denom Report',
                data: 'ATM Live Denom Report',
                icon: 'pi pi-users',
              },
              {
                label: 'Atm Transaction Status',
                data: 'Atm Transaction Status',
                icon: 'pi pi-users',
              }
            ]
          },
          {
            label: 'SUMMARY REPORTS',
            data: 'role_mgmt',
            icon: 'pi pi-lock',
            children: [
              {
                label: 'Consolidated Report',
                data: 'Consolidated Report',
                icon: 'pi pi-users',
              },
              {
                label: 'Network Summary Report',
                data: 'Network Summary Report',
                icon: 'pi pi-users',
              },
              {
                label: 'OFUS_Txn Report',
                data: 'Network Summary Report',
                icon: 'pi pi-users',
              }
            ]
          },
          {
            label: 'TERMINAL TRANSACTION REPORTS',
            data: 'TERMINAL TRANSACTION REPORTS',
            icon: 'pi pi-lock',
            children: [
              {
                label: '  ATM TRANSACTION Report',
                data: '  ATM TRANSACTION Report',
                icon: 'pi pi-users',
              },
            ]
          },
          {
            label: 'AUDIT REPORTS',
            data: 'AUDIT REPORTS',
            icon: 'pi pi-lock',
            children: [
              {
                label: 'AUDIT REPORTS',
                data: 'AUDIT REPORTS',
                icon: 'pi pi-users',
              },
            ]
          },

        ]
      },
      {
        label: ' Utility',
        data: ' Utility',
        expandedIcon: 'pi pi-folder-open',
        collapsedIcon: 'pi pi-folder',
        children: [
          {
            label: ' Email Update',
            data: ' Email Update',
            icon: 'pi pi-envelope',
            children: [
              {
                label: 'View Email',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Add Email',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              }
              ,
              {
                label: ' Delete Email',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              }
            ]
          },
          {
            label: 'Mobile Update',
            data: 'Mobile Update',
            icon: 'pi pi-mobile',
            children: [
              {
                label: 'View Mobile',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Add Mobile',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              }
              ,
              {
                label: 'Delete Mobile',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
            ]
          },
          {
            label: ' SAF Management',
            data: ' SAF Management',
            icon: 'pi pi-database'
          },
          {
            label: 'Admin Card',
            data: 'Admin Card',
            icon: 'pi pi-id-card'
          }
        ]
      },
      {
        label: ' User Management ',
        data: ' User Management ',
        expandedIcon: 'pi pi-folder-open',
        collapsedIcon: 'pi pi-folder',
        children: [
          {
            label: 'Profile',
            data: ' Email Update',
            icon: 'pi pi-envelope',
            children: [
              {
                label: ' Deleted Authorization',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Add Profile',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Edit Profile',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Delete Profile',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: 'View Profile',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              }
            ]
          },
          {
            label: 'User',
            data: 'Mobile Update',
            icon: 'pi pi-mobile',
            children: [
              {
                label: 'Authorize User',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: ' Unblock User',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Reset Password',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Block User',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Delete User Authorization',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Add User',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Edit User',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: 'View User',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Delete User',
                data: 'View Transaction',
                icon: 'pi pi-pencil',
              }
            ]
          }
        ]
      },
    ]);
  }

}
