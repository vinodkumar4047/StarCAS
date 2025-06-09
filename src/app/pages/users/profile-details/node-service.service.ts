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
        label: 'Configuration',
        data: 'M000002',
        expandedIcon: 'pi pi-folder-open',
        collapsedIcon: 'pi pi-folder',
        children: [
          {
            label: 'Institution',
            data: 'M00000201',
            icon: 'pi pi-building',
            children: [
              {
                label: 'View Institution',
                data: 'M0000020101',
                icon: 'pi pi-eye',
              }
            ]
          },
          {
            label: 'Branch',
            data: 'M00000202',
            icon: 'pi pi-sitemap',
            children: [
              {
                label: 'Delete Authorize Branch',
                data: 'M0000020201',
                icon: 'pi pi-times-circle',
              },
              {
                label: 'Authorize Branch',
                data: 'M0000020202',
                icon: 'pi pi-check-circle',
              },
              {
                label: 'Add Branch',
                data: 'M0000020203',
                icon: 'pi pi-plus', // plus icon for adding
              },
              {
                label: 'View Branch',
                data: 'M0000020204',
                icon: 'pi pi-eye', // eye icon for viewing
              },
              {
                label: 'Edit Branch',
                data: 'M0000020205',
                icon: 'pi pi-pencil', // pencil icon for editing
              },
              {
                label: 'Delete Branch',
                data: 'M0000020206',
                icon: 'pi pi-trash', // trash icon for deleting
              }

            ]
          },
          {
            label: 'Bin',
            data: 'M00000203',
            icon: 'pi pi-trash',
            children: [
              {
                label: 'View Bin',
                data: 'M0000020301',
                icon: 'pi pi-eye',
              },
            ]
          },
          {
            label: 'ATM Type',
            data: 'M00000204',
            icon: 'pi pi-credit-card',
            children: [
              {
                label: 'View ATM Type',
                data: 'M0000020401',
                icon: 'pi pi-eye',
              },
              {
                label: 'Add ATM Type',
                data: 'M0000020402',
                icon: 'pi pi-plus', // plus icon for adding
              }
            ]
          },
          {
            label: 'ATM',
            data: 'M00000205',
            icon: 'pi pi-credit-card',
            children: [
              {
                label: 'Authorize ATM',
                data: 'M0000020501',
                icon: 'pi pi-check-circle',
              },
              {
                label: 'Authorize Delete ATM',
                data: 'M0000020502',
                icon: 'pi pi-times-circle',
              },
              {
                label: 'Add ATM',
                data: 'M0000020503',
                icon: 'pi pi-plus', // plus icon for adding
              },
              {
                label: 'View ATM',
                data: 'M0000020504',
                icon: 'pi pi-eye', // eye icon for viewing
              },
              {
                label: 'Edit ATM',
                data: 'M0000020505',
                icon: 'pi pi-pencil', // pencil icon for editing
              },
              {
                label: 'Delete ATM',
                data: 'M0000020506',
                icon: 'pi pi-trash', // trash icon for deleting
              }
            ]
          },
          {
            label: 'External Bin',
            data: 'M00000206',
            icon: 'pi pi-trash',
            children: [
              {
                label: 'Authorize External Bin',
                data: 'M0000020601',
                icon: 'pi pi-check-circle',
              },
              {
                label: 'Delete Authorize External Bin',
                data: 'M0000020602',
                icon: 'pi pi-times-circle',
              },
              {
                label: 'Add External Bin',
                data: 'M0000020603',
                icon: 'pi pi-plus', // plus icon for adding
              },
              {
                label: 'View External Bin',
                data: 'M0000020604',
                icon: 'pi pi-eye', // eye icon for viewing
              },
              {
                label: 'Edit External Bin',
                data: 'M0000020605',
                icon: 'pi pi-pencil', // pencil icon for editing
              },
              {
                label: 'Delete External Bin',
                data: 'M0000020606',
                icon: 'pi pi-trash', // trash icon for deleting
              }
            ]
          },
          {
            label: 'Fit',
            data: 'M00000207',
            icon: 'pi pi-cog',
            children: [
              {
                label: 'Authorize Fit',
                data: 'M0000020701',
                icon: 'pi pi-check-circle',
              },
              {
                label: 'Authorize Delete Fit',
                data: 'M0000020702',
                icon: 'pi pi-times-circle',
              },
              {
                label: 'Add Fit',
                data: 'M0000020703',
                icon: 'pi pi-plus', // plus icon for adding
              },
              {
                label: 'View Fit',
                data: 'M0000020704',
                icon: 'pi pi-eye', // eye icon for viewing
              },
              {
                label: 'Edit Fit',
                data: 'M0000020705',
                icon: 'pi pi-pencil', // pencil icon for editing
              },
              {
                label: 'Delete Fit',
                data: 'M0000020706',
                icon: 'pi pi-trash', // trash icon for deleting
              }
            ]
          },
          {
            label: 'CASSET',
            data: 'M00000208',
            icon: 'pi pi-box',
            children: [
              {
                label: 'Authorize',
                data: 'M0000020801',
                icon: 'pi pi-check-circle',
              },
              {
                label: 'Update CASSET',
                data: 'M0000020802',
                icon: 'pi pi-pencil',
              },
            ]
          },
          {
            label: 'Port',
            data: 'M00000209',
            icon: 'pi pi-share-alt',
            children: [
              {
                label: 'View Port',
                data: 'M0000020901',
                icon: 'pi pi-eye',
              },
            ]
          },
          {
            label: 'Transaction',
            data: 'M00000210',
            icon: 'pi pi-exchange',
            children: [
              {
                label: 'View Transaction',
                data: 'M0000021001',
                icon: 'pi pi-eye',
              },
            ]
          },
        ]
      },
      {
        label: 'Monitorning',
        data: 'M000003',
        expandedIcon: 'pi pi-folder-open',
        collapsedIcon: 'pi pi-folder',
        children: [
          {
            label: 'Network Monitoring',
            data: 'M00000301',
            icon: 'pi pi-wallet'
          },
          {
            label: 'HSM Monitoring',
            data: 'M00000302',
            icon: 'pi pi-money-bill'
          },
          {
            label: 'Txn Monitoring',
            data: 'M00000303',
            icon: 'pi pi-money-bill'
          },
          {
            label: 'ATM  Monitoring',
            data: 'M00000304',
            icon: 'pi pi-money-bill'
          },
          {
            label: 'Fraud & Risk Txn Monitoring',
            data: 'M00000307',
            icon: 'pi pi-shield'
          },
          {
            label: 'Fraud  Monitoring',
            data: 'M00000306',
            icon: 'pi pi-ban'
          },
          {
            label: 'Transaction Search',
            data: 'M00000305',
            icon: 'pi pi-money-bill'
          },
        ]
      },
      {
        label: 'Control',
        data: 'M000004',
        expandedIcon: 'pi pi-folder-open',
        collapsedIcon: 'pi pi-folder',
        children: [
          {
            label: 'Task Manager',
            data: 'M00000401',
            icon: 'pi pi-list'
          },
          {
            label: 'Port Manager',
            data: 'M00000402',
            icon: 'pi pi-plug'
          },
          {
            label: 'Channel Mgr',
            data: 'M00000403',
            icon: 'pi pi-sitemap'
          },
          {
            label: 'Network Control',
            data: 'M00000404',
            icon: 'pi pi-sitemap'
          },
          {
            label: 'ATM Control',
            data: 'M00000405',
            icon: 'pi pi-desktop'
          },
        ]
      }
      ,
      {
        label: 'Risk Management',
        data: 'M000005',
        expandedIcon: 'pi pi-folder-open',
        collapsedIcon: 'pi pi-folder',
        children: [
          {
            label: 'INTERNATIONAL TXN ENABLED',
            data: 'M00000501',
            icon: 'pi pi-globe',
            children: [
              {
                label: 'edit Fraud',
                data: 'M0000050101',
                icon: 'pi pi-pencil',
              },
            ]
          },
          {
            label: 'TXN ALLOW WITHOUT PIN',
            data: 'M00000501',
            icon: 'pi pi-unlock',
            children: [
              {
                label: 'AuthorizeCard',
                data: 'M0000050201',
                icon: 'pi pi-pencil',
              },
              {
                label: 'AuthDeletedCard',
                data: 'M0000050202',
                icon: 'pi pi-pencil',
              },
              {
                label: 'View Card',
                data: 'M0000050203',
                icon: 'pi pi-pencil',
              }, {
                label: 'Delete Card',
                data: 'M0000050204',
                icon: 'pi pi-pencil',
              }, {
                label: 'Edit Card',
                data: 'M0000050205',
                icon: 'pi pi-pencil',
              }, {
                label: 'Add Card',
                data: 'M0000050206',
                icon: 'pi pi-pencil',
              },
            ]
          },
          {
            label: 'RISK COUNTRY BLOCK',
            data: 'M00000501',
            icon: 'pi pi-ban',
            children: [
              {
                label: 'Authorize Country',
                data: 'M0000050301',
                icon: 'pi pi-pencil',
              },
              {
                label: 'View Country',
                data: 'M0000050302',
                icon: 'pi pi-pencil',
              }
              ,
              {
                label: 'Add Country',
                data: 'M0000050303',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Edit Country',
                data: 'M0000050304',
                icon: 'pi pi-pencil',
              }
            ]
          },
          {
            label: 'TXN ALLOW FOR RISK COUNTRY',
            data: 'M00000501',
            icon: 'pi pi-check-circle',
            children: [
              {
                label: 'Authorize Card',
                data: 'M0000050401',
                icon: 'pi pi-pencil',
              },
              {
                label: 'View Card',
                data: 'M0000050402',
                icon: 'pi pi-pencil',
              }
              ,
              {
                label: 'Add Card',
                data: 'M0000050403',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Delete Card',
                data: 'M0000050404',
                icon: 'pi pi-pencil',
              }
            ]
          },
          {
            label: 'MCC BLOCK',
            data: 'M00000501',
            icon: 'pi pi-lock',
            children: [
              {
                label: 'Authorize Delete MCC',
                data: 'M0000050501',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Authorize MCC',
                data: 'M0000050502',
                icon: 'pi pi-pencil',
              }
              ,
              {
                label: 'Add MCC',
                data: 'M0000050503',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Edit MCC',
                data: 'M0000050504',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Add ALLOWED',
                data: 'M0000050505',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Delete MCC',
                data: 'M0000050506',
                icon: 'pi pi-pencil',
              },
              {
                label: 'View MCC',
                data: 'View Transaction',
                icon: 'M0000050507',
              }
            ]
          },
          {
            label: 'TXN ALLOW FOR BLOCKED MCC',
            data: 'M00000501',
            icon: 'pi pi-check',
            children: [
              {
                label: 'AuthorizeCard',
                data: 'M0000050601',
                icon: 'pi pi-pencil',
              },
              {
                label: 'AuthDeletedCard',
                data: 'M0000050602',
                icon: 'pi pi-pencil',
              }
              ,
              {
                label: 'View Card',
                data: 'M0000050603',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Delete Card',
                data: 'M0000050604',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Edit Card',
                data: 'M0000050605',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Add Card',
                data: 'View Transaction',
                icon: 'M0000050606',
              }
            ]
          },
          {
            label: 'RISK ECOM SITE BLOCK',
            data: 'M00000501',
            icon: 'pi pi-shield',
            children: [
              {
                label: 'Delete Authorize',
                data: 'M0000050701',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Authorize Location',
                data: 'M0000050702',
                icon: 'pi pi-pencil',
              }
              ,
              {
                label: 'View Location',
                data: 'M0000050703',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Add Location',
                data: 'M0000050704',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Delete Location',
                data: 'M0000050705',
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
        label: 'Utility',
        data: 'M000007',
        expandedIcon: 'pi pi-folder-open',
        collapsedIcon: 'pi pi-folder',
        children: [
          {
            label: 'Email Update',
            data: 'M00000701',
            icon: 'pi pi-envelope',
            children: [
              {
                label: 'View Email',
                data: 'M0000070101',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Add Email',
                data: 'M0000070102',
                icon: 'pi pi-pencil',
              }
              ,
              {
                label: 'Delete Email',
                data: 'M0000070103',
                icon: 'pi pi-pencil',
              }
            ]
          },
          {
            label: 'Mobile Update',
            data: 'M00000702',
            icon: 'pi pi-mobile',
            children: [
              {
                label: 'View Mobile',
                data: 'M0000070201',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Add Mobile',
                data: 'M0000070202',
                icon: 'pi pi-pencil',
              }
              ,
              {
                label: 'Delete Mobile',
                data: 'M0000070203',
                icon: 'pi pi-pencil',
              },
            ]
          },
          {
            label: 'SAF Management',
            data: 'M00000703',
            icon: 'pi pi-database'
          },
          {
            label: 'Admin Card',
            data: 'M00000704',
            icon: 'pi pi-id-card'
          }
        ]
      },
      {
        label: 'User Management',
        data: 'M000008',
        expandedIcon: 'pi pi-folder-open',
        collapsedIcon: 'pi pi-folder',
        children: [
          {
            label: 'Profile',
            data: 'M00000801',
            icon: 'pi pi-envelope',
            children: [
              {
                label: 'Deleted Authorization',
                data: 'M0000080101',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Add Profile',
                data: 'M0000080102',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Edit Profile',
                data: 'M0000080103',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Delete Profile',
                data: 'M0000080104',
                icon: 'pi pi-pencil',
              },
              {
                label: 'View Profile',
                data: 'M0000080105',
                icon: 'pi pi-pencil',
              }
            ]
          },
          {
            label: 'User',
            data: 'M00000802',
            icon: 'pi pi-mobile',
            children: [
              {
                label: 'Authorize User',
                data: 'M0000080201',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Unblock User',
                data: 'M0000080202',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Reset Password',
                data: 'M0000080203',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Block User',
                data: 'M0000080204',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Delete User Authorization',
                data: 'M0000080205',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Add User',
                data: 'M0000080206',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Edit User',
                data: 'M0000080207',
                icon: 'pi pi-pencil',
              },
              {
                label: 'View User',
                data: 'M0000080208',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Delete User',
                data: 'M0000080209',
                icon: 'pi pi-pencil',
              }
            ]
          }
        ]
      },
    ]);
  }

}
