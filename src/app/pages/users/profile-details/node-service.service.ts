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
            icon: 'pi pi-users',
            children: [
              {
                label: 'View Institution',
                data: 'View_Institution',
                icon: 'pi pi-users',
              }
            ]
          },
          {
            label: 'Branch',
            data: 'role_mgmt',
            icon: 'pi pi-lock',
            children: [
              {
                label: 'Delete Authorize Branch',
                data: 'Delete_Authorize_Branch',
                icon: 'pi pi-users',
              },
              {
                label: 'Authorize Branch',
                data: 'Authorize_Branch',
                icon: 'pi pi-users',
              }
            ]
          },
          {
            label: 'Bin',
            data: 'role_mgmt',
            icon: 'pi pi-lock',
            children: [
              {
                label: ' View Bin',
                data: ' View_Bin',
                icon: 'pi pi-users',
              },
            ]
          },
          {
            label: 'ATM Type',
            data: 'role_mgmt',
            icon: 'pi pi-lock',
            children: [
              {
                label: 'View ATM Type',
                data: 'View_ATM_Type',
                icon: 'pi pi-users',
              },
              {
                label: 'Authorize Branch',
                data: 'Authorize_Branch',
                icon: 'pi pi-users',
              }
            ]
          },
          {
            label: 'ATM',
            data: 'role_mgmt',
            icon: 'pi pi-lock',
            children: [
              {
                label: 'Authorize ATM',
                data: 'Authorize_ATM',
                icon: 'pi pi-users',
              },
              {
                label: 'Authorize Delete ATM',
                data: 'Authorize_Delete_ATM',
                icon: 'pi pi-users',
              }
            ]
          },
          {
            label: 'External Bin',
            data: 'role_mgmt',
            icon: 'pi pi-lock',
            children: [
              {
                label: 'Authorize External Bin',
                data: 'Authorize_External_Bin',
                icon: 'pi pi-users',
              },
              {
                label: 'Delete Authorize External Bin',
                data: 'Delete_Authorize_External_Bin',
                icon: 'pi pi-users',
              }
            ]
          },
          {
            label: 'Fit',
            data: 'role_mgmt',
            icon: 'pi pi-lock',
            children: [
              {
                label: 'Authorize Fit',
                data: 'Authorize Fite',
                icon: 'pi pi-users',
              },
              {
                label: 'Authorize Delete Fit',
                data: 'Authorize Delete Fit',
                icon: 'pi pi-users',
              }
            ]
          },
          {
            label: 'CASSET',
            data: 'role_mgmt',
            icon: 'pi pi-lock',
            children: [
              {
                label: 'Authorize',
                data: 'View_ATM_Type',
                icon: 'pi pi-users',
              },
            ]
          },
          {
            label: 'Port',
            data: 'role_mgmt',
            icon: 'pi pi-lock',
            children: [
              {
                label: 'View Port',
                data: 'View Port',
                icon: 'pi pi-users',
              },
            ]
          },
          {
            label: 'Transaction',
            data: 'role_mgmt',
            icon: 'pi pi-lock',
            children: [
              {
                label: 'View Transaction',
                data: 'View Transaction',
                icon: 'pi pi-users',
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
            icon: 'pi pi-money-bill'
          },
          {
            label: 'Fraud  Monitoring',
            data: 'Fraud  Monitoring',
            icon: 'pi pi-money-bill'
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
            icon: 'pi pi-wallet'
          },
          {
            label: 'Port Manager',
            data: 'Port Manager',
            icon: 'pi pi-money-bill'
          },
          {
            label: 'Channel Mgr',
            data: 'Channel Mgr',
            icon: 'pi pi-money-bill'
          },
          {
            label: 'Network Control',
            data: 'Network Control',
            icon: 'pi pi-money-bill'
          },
          {
            label: 'ATM Control',
            data: 'ATM Control',
            icon: 'pi pi-money-bill'
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
            icon: 'pi pi-wallet'
          },
          {
            label: 'TXN ALLOW WITHOUT PIN',
            data: 'TXN ALLOW WITHOUT PIN',
            icon: 'pi pi-money-bill'
          },
          {
            label: 'RISK COUNTRY BLOCK',
            data: 'RISK COUNTRY BLOCK',
            icon: 'pi pi-money-bill'
          },
          {
            label: 'TXN ALLOW FOR RISK COUNTRY',
            data: 'TXN ALLOW FOR RISK COUNTRY',
            icon: 'pi pi-money-bill'
          },
          {
            label: 'MCC BLOCK',
            data: 'MCC BLOCK',
            icon: 'pi pi-money-bill'
          },
          {
            label: 'TXN ALLOW FOR BLOCKED MCC',
            data: 'TXN ALLOW FOR BLOCKED MCC',
            icon: 'pi pi-money-bill'
          },
          {
            label: 'RISK ECOM SITE BLOCK',
            data: 'RISK ECOM SITE BLOCK',
            icon: 'pi pi-money-bill'
          },
        ]
      },
      {
        label: 'Reports  ',
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
            icon: 'pi pi-wallet'
          },
          {
            label: 'Mobile Update',
            data: 'Mobile Update',
            icon: 'pi pi-money-bill'
          },
          {
            label: ' SAF Management',
            data: ' SAF Management',
            icon: 'pi pi-money-bill'
          },
          {
            label: 'Admin Card',
            data: 'Admin Card',
            icon: 'pi pi-money-bill'
          }
        ]
      },
    ]);
  }

}
