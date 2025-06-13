import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';
import { MenuService } from '../service/menu.service';
@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index;">

            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
            
        </ng-container>
    </ul> `
})
export class AppMenu {
    constructor(private menuService: MenuService) { }
    menu: any[] = [];
    model: MenuItem[] = [];
    userRole: any = localStorage.getItem('userType');

    ngOnInit() {
        this.menu = this.menuService.getMenuitem()
        this.model = this.transformMenuItemsToModel(this.menu);
        // this.model = [
        //     {
        //         items: [{
        //             label: 'Dashboard',
        //             icon: 'pi pi-fw pi-home',
        //             visible: this.userRole === 'maker' || this.userRole === 'checker' || this.userRole == 'admin',
        //             routerLink: ['/pages/dashboard']
        //         }]
        //     },
        //     {
        //         items: [{
        //             label: 'Configuration',
        //             icon: 'pi pi-fw pi-user',
        //             visible: this.userRole === 'maker' || this.userRole === 'checker',
        //             items: [
        //                 {
        //                     label: 'Institution',
        //                     icon: 'pi pi-fw pi-sign-in',
        //                     routerLink: ['/pages/institution'],
        //                     visible: this.userRole === 'maker' || this.userRole === 'checker',
        //                 },
        //                 {
        //                     label: 'Branch',
        //                     icon: 'pi pi-fw pi-times-circle',
        //                     routerLink: ['/pages/branch'],
        //                     visible: this.userRole === 'maker' || this.userRole === 'checker',
        //                 },
        //                 {
        //                     label: 'Bin',
        //                     icon: 'pi pi-fw pi-lock',
        //                     routerLink: ['/pages/bin'],
        //                     visible: this.userRole === 'maker' || this.userRole === 'checker',
        //                 },
        //                 {
        //                     label: 'ATM Type',
        //                     icon: 'pi pi-fw pi-lock',
        //                     routerLink: ['/pages/atmType'],
        //                     visible: this.userRole === 'maker' || this.userRole === 'checker',
        //                 },
        //                 {
        //                     label: 'ATM',
        //                     icon: 'pi pi-fw pi-lock',
        //                     routerLink: ['/pages/atm'],
        //                     visible: this.userRole === 'maker' || this.userRole === 'checker',
        //                 },
        //                 {
        //                     label: 'External Bin',
        //                     icon: 'pi pi-fw pi-lock',
        //                     routerLink: ['/pages/externalBin'],
        //                     visible: this.userRole === 'maker' || this.userRole === 'checker',
        //                 },
        //                 {
        //                     label: 'Fit',
        //                     icon: 'pi pi-fw pi-lock',
        //                     routerLink: ['/pages/fit'],
        //                     visible: this.userRole === 'maker' || this.userRole === 'checker',
        //                 },
        //                 {
        //                     label: 'CASSET',
        //                     icon: 'pi pi-fw pi-lock',
        //                     routerLink: ['/pages/casset'],
        //                     visible: this.userRole === 'maker' || this.userRole === 'checker',
        //                 },
        //                 {
        //                     label: 'Port',
        //                     icon: 'pi pi-fw pi-lock',
        //                     routerLink: ['/pages/port'],
        //                     visible: this.userRole === 'maker',
        //                 },
        //                 {
        //                     label: 'Transaction',
        //                     icon: 'pi pi-fw pi-lock',
        //                     routerLink: ['/pages/transaction'],
        //                     visible: this.userRole === 'maker',
        //                 },
        //             ]
        //         }]
        //     },

        //     {
        //         items: [{
        //             label: 'Monitorning',
        //             icon: 'pi pi-fw pi-user',
        //             visible: this.userRole === 'maker' || this.userRole === 'checker',
        //             items: [
        //                 {
        //                     label: 'Network Monitoring',
        //                     icon: 'pi pi-fw pi-sign-in',
        //                     visible: this.userRole === 'maker' || this.userRole === 'checker',
        //                     routerLink: ['/pages/network_Monitoring']
        //                 },
        //                 {
        //                     label: 'HSM Monitoring',
        //                     icon: 'pi pi-fw pi-times-circle',
        //                     visible: this.userRole === 'maker' || this.userRole === 'checker',
        //                     routerLink: ['/pages/hsm_Monitoring']
        //                 },
        //                 {
        //                     label: 'Txn Monitoring',
        //                     icon: 'pi pi-fw pi-lock',
        //                     visible: this.userRole === 'maker' || this.userRole === 'checker',
        //                     routerLink: ['/pages/txn_Monitoring']
        //                 },
        //                 {
        //                     label: 'ATM Monitoring',
        //                     icon: 'pi pi-fw pi-lock',
        //                     visible: this.userRole === 'maker' || this.userRole === 'checker',
        //                     routerLink: ['/pages/atm_Monitoring']
        //                 },
        //                 {
        //                     label: 'Fraud Monitoring',
        //                     icon: 'pi pi-fw pi-lock',
        //                     visible: this.userRole === 'checker',
        //                     routerLink: ['/pages/fraud_Monitoring']

        //                 },
        //                 {
        //                     label: 'Fraud & Risk Txn Monitoring',
        //                     icon: 'pi pi-fw pi-lock',
        //                     visible: this.userRole === 'checker',
        //                     routerLink: ['/pages/FraduRisk_TxnMonitoring']
        //                 },
        //                 {
        //                     label: 'Transaction Search',
        //                     icon: 'pi pi-fw pi-lock',
        //                     visible: this.userRole === 'maker' || this.userRole === 'checker',
        //                     routerLink: ['/pages/transaction_Search']
        //                 },
        //             ]
        //         }]
        //     },

        //     {
        //         items: [{
        //             label: 'Control',
        //             icon: 'pi pi-fw pi-user',
        //             visible: this.userRole === 'maker' || this.userRole === 'checker',
        //             items: [
        //                 {
        //                     label: 'Task Manager',
        //                     icon: 'pi pi-fw pi-sign-in',
        //                     routerLink: ['/pages/task_Manager'],
        //                     visible: this.userRole === 'maker' || this.userRole === 'checker',
        //                 },
        //                 {
        //                     label: 'Port Manager',
        //                     icon: 'pi pi-fw pi-times-circle',
        //                     routerLink: ['/pages/port_Manager'],
        //                     visible: this.userRole === 'maker' || this.userRole === 'checker',
        //                 },
        //                 {
        //                     label: 'Channel Manager',
        //                     icon: 'pi pi-fw pi-times-circle',
        //                     visible: this.userRole === 'checker',
        //                 },
        //                 {
        //                     label: 'Network Control',
        //                     icon: 'pi pi-fw pi-lock',
        //                     routerLink: ['/pages/network_Control'],
        //                     visible: this.userRole === 'maker' || this.userRole === 'checker',
        //                 },
        //                 {
        //                     label: 'ATM Control',
        //                     icon: 'pi pi-fw pi-lock',
        //                     routerLink: ['/pages/atm_control'],
        //                     visible: this.userRole === 'maker' || this.userRole === 'checker',
        //                 },
        //                 {
        //                     label: 'Control Monitoring',
        //                     icon: 'pi pi-fw pi-lock',
        //                     routerLink: ['/pages/control_Monitoring'],
        //                     visible: this.userRole === 'maker' || this.userRole === 'checker',
        //                 },
        //             ]
        //         }]
        //     },

        //     {
        //         items: [{
        //             label: 'Risk Management',
        //             icon: 'pi pi-fw pi-user',
        //             visible: this.userRole === 'maker' || this.userRole === 'checker' || this.userRole == 'admin',
        //             items: [
        //                 {
        //                     label: 'International TXN Enabled',
        //                     icon: 'pi pi-fw pi-sign-in',
        //                     routerLink: ['/pages/internationalTXNEnadisable'],
        //                     visible: this.userRole === 'maker' || this.userRole === 'checker' || this.userRole == 'admin',
        //                 },
        //                 {
        //                     label: 'TXN Allow Without PIN',
        //                     icon: 'pi pi-fw pi-times-circle',
        //                     routerLink: ['/pages/txnAllowWithoutPin'],
        //                     visible: this.userRole === 'maker' || this.userRole === 'checker' || this.userRole == 'admin',
        //                 },
        //                 {
        //                     label: 'Risk Country Block',
        //                     icon: 'pi pi-fw pi-lock',
        //                     routerLink: ['/pages/riskCountryBlock'],
        //                     visible: this.userRole === 'maker' || this.userRole === 'checker',
        //                 },
        //                 {
        //                     label: 'TXN Allow For Risk Country',
        //                     icon: 'pi pi-fw pi-lock',
        //                     routerLink: ['/pages/txnAllowedRiskCountry'],
        //                     visible: this.userRole === 'maker' || this.userRole === 'checker',
        //                 },
        //                 {
        //                     label: 'MCC Block',
        //                     icon: 'pi pi-fw pi-lock',
        //                     routerLink: ['/pages/mccBlock'],
        //                     visible: this.userRole === 'maker' || this.userRole === 'checker',
        //                 },
        //                 {
        //                     label: 'TXN Allow For Blocked MCC',
        //                     icon: 'pi pi-fw pi-lock',
        //                     routerLink: ['/pages/txnAllowBlockedMCC'],
        //                     visible: this.userRole === 'maker' || this.userRole === 'checker',
        //                 },
        //                 {
        //                     label: 'Risk Ecom Site Block',
        //                     icon: 'pi pi-fw pi-lock',
        //                     routerLink: ['/pages/riskEcomSiteBlock'],
        //                     visible: this.userRole === 'maker' || this.userRole === 'checker',
        //                 },
        //             ]
        //         }]
        //     },

        //     {
        //         items: [{
        //             label: 'Reports',
        //             icon: 'pi pi-fw pi-user',
        //             visible: this.userRole === 'maker' || this.userRole === 'checker',
        //             routerLink: ['/pages/report']
        //         }]
        //     },

        //     {
        //         items: [{
        //             label: 'Utility',
        //             icon: 'pi pi-fw pi-user',
        //             visible: this.userRole === 'maker' || this.userRole === 'checker',
        //             items: [
        //                 {
        //                     label: 'Email Update',
        //                     icon: 'pi pi-fw pi-sign-in',
        //                     routerLink: ['/pages/email_update']
        //                 },
        //                 {
        //                     label: 'Modile Update',
        //                     icon: 'pi pi-fw pi-times-circle',
        //                     routerLink: ['/pages/mobile_update']
        //                 },
        //                 {
        //                     label: 'SAF Management',
        //                     icon: 'pi pi-fw pi-lock',
        //                     routerLink: ['/pages/saf']
        //                 },
        //                 {
        //                     label: 'Admin card',
        //                     icon: 'pi pi-fw pi-lock',
        //                     routerLink: ['/pages/admin_card']
        //                 },
        //             ]
        //         }]
        //     },

        //     {
        //         items: [{
        //             label: 'User Management',
        //             icon: 'pi pi-fw pi-user',
        //             visible: this.userRole === 'maker' || this.userRole === 'checker' || this.userRole == 'admin',
        //             items: [
        //                 {
        //                     label: 'Profile',
        //                     icon: 'pi pi-fw pi-sign-in',
        //                     routerLink: ['/pages/profile']
        //                 },
        //                 {
        //                     label: 'User',
        //                     icon: 'pi pi-fw pi-times-circle',
        //                     routerLink: ['/pages/user']
        //                 },
        //             ]
        //         }]
        //     },
        //     {
        //         items: [{
        //             label: 'License Generation',
        //             icon: 'pi pi-fw pi-id-card',
        //             visible: this.userRole == 'admin',
        //             items: [
        //                 {
        //                     label: 'Encrypt License',
        //                     icon: 'pi pi-fw pi-lock',
        //                     routerLink: ['/pages/encrypt']
        //                 },
        //                 {
        //                     label: 'License Decryption',
        //                     icon: 'pi pi-fw pi-key',
        //                     routerLink: ['/pages/decrypt']
        //                 },
        //             ]
        //         }]
        //     },

        //     // {
        //     //     label: 'Pages',
        //     //     icon: 'pi pi-fw pi-briefcase',
        //     //     routerLink: ['/pages'],
        //     //     items: [
        //     //         {
        //     //             label: 'Landing',
        //     //             icon: 'pi pi-fw pi-globe',
        //     //             routerLink: ['/landing']
        //     //         },
        //     //         {
        //     //             label: 'Auth',
        //     //             icon: 'pi pi-fw pi-user',
        //     //             items: [
        //     //                 {
        //     //                     label: 'Login',
        //     //                     icon: 'pi pi-fw pi-sign-in',
        //     //                     routerLink: ['/auth/login']
        //     //                 },
        //     //                 {
        //     //                     label: 'Error',
        //     //                     icon: 'pi pi-fw pi-times-circle',
        //     //                     routerLink: ['/auth/error']
        //     //                 },
        //     //                 {
        //     //                     label: 'Access Denied',
        //     //                     icon: 'pi pi-fw pi-lock',
        //     //                     routerLink: ['/auth/access']
        //     //                 }
        //     //             ]
        //     //         },
        //     //         {
        //     //             label: 'Crud',
        //     //             icon: 'pi pi-fw pi-pencil',
        //     //             routerLink: ['/pages/crud']
        //     //         },
        //     //         {
        //     //             label: 'Not Found',
        //     //             icon: 'pi pi-fw pi-exclamation-circle',
        //     //             routerLink: ['/pages/notfound']
        //     //         },
        //     //         {
        //     //             label: 'Empty',
        //     //             icon: 'pi pi-fw pi-circle-off',
        //     //             routerLink: ['/pages/empty']
        //     //         }
        //     //     ]
        //     // }
        // ];

    }
    transformMenuItemsToModel(menuItems: any[]): any[] {
        return menuItems.map(item => {
            const menuSection: any = {
                items: [{
                    label: item.title,
                    icon: item.icon,
                    // icon: this.convertIcon(item.icon),
                    visible: item.checked,
                    ...(item.link ? { routerLink: ['/pages/' + item.link] } : {}),
                }]
            };

            // If subMenu exists, process recursively
            if (item.subMenu && item.subMenu.length > 0) {
                menuSection.items[0].items = item.subMenu.map((sub: any) => {
                    const subItem: any = {
                        label: sub.title,
                        icon: sub.icon,
                        //   icon: this.convertIcon(sub.icon),
                        visible: sub.checked,
                        ...(sub.link ? { routerLink: ['/pages/' + sub.link] } : {}),
                    };
                    // If permissions exist
                    // if (sub.permissions && sub.permissions.length > 0) {
                    //     subItem.items = sub.permissions.map((perm: any) => ({
                    //         label: perm.title,
                    //         icon: 'pi pi-fw pi-pencil',
                    //         visible: this.userRole === 'maker' || this.userRole === 'checker' || this.userRole === 'admin',
                    //     }));
                    // }

                    return subItem;
                });
            }

            return menuSection;
        });
    }


}
