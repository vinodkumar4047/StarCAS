import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">

            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
            
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/pages/dashboard'] }]
            },
            {
                items: [{
                    label: 'Configuration',
                    icon: 'pi pi-fw pi-user',
                    items: [
                        {
                            label: 'Institution',
                            icon: 'pi pi-fw pi-sign-in',
                            routerLink: ['/pages/institution']
                        },
                        {
                            label: 'Branch',
                            icon: 'pi pi-fw pi-times-circle',
                            routerLink: ['/pages/branch']
                        },
                        {
                            label: 'Bin',
                            icon: 'pi pi-fw pi-lock',
                            routerLink: ['/pages/bin']
                        },
                        {
                            label: 'ATM Type',
                            icon: 'pi pi-fw pi-lock',
                            routerLink: ['/pages/atmType']
                        },
                        {
                            label: 'ATM',
                            icon: 'pi pi-fw pi-lock',
                            routerLink: ['/pages/atm']
                        },
                        {
                            label: 'External Bin',
                            icon: 'pi pi-fw pi-lock',
                            routerLink: ['/pages/externalBin']
                        },
                        {
                            label: 'Fit',
                            icon: 'pi pi-fw pi-lock',
                            routerLink: ['/pages/fit']
                        },
                        {
                            label: 'CASSET',
                            icon: 'pi pi-fw pi-lock',
                            routerLink: ['/pages/casset']
                        },
                        {
                            label: 'Port',
                            icon: 'pi pi-fw pi-lock',
                            routerLink: ['/pages/port']
                        },
                        {
                            label: 'Transaction',
                            icon: 'pi pi-fw pi-lock',
                            routerLink: ['/pages/transaction']
                        },
                    ]
                }]
            },

            {
                items: [{
                    label: 'Monitorning',
                    icon: 'pi pi-fw pi-user',
                    items: [
                        {
                            label: 'Network Monitoring',
                            icon: 'pi pi-fw pi-sign-in',
                            routerLink: ['/pages/network_Monitoring']
                        },
                        {
                            label: 'HSM Monitoring',
                            icon: 'pi pi-fw pi-times-circle',
                            routerLink: ['/pages/hsm_Monitoring']
                        },
                        {
                            label: 'Txn Monitoring',
                            icon: 'pi pi-fw pi-lock',
                            routerLink: ['/pages/txn_Monitoring']
                        },
                        {
                            label: 'ATM Monitoring',
                            icon: 'pi pi-fw pi-lock',
                            routerLink: ['/pages/atm_Monitoring']
                        },
                        {
                            label: 'Transaction Search',
                            icon: 'pi pi-fw pi-lock',
                            routerLink: ['/pages/transaction_Search']
                        },
                    ]
                }]
            },

            {
                items: [{
                    label: 'Control',
                    icon: 'pi pi-fw pi-user',
                    items: [
                        {
                            label: 'Task Manager',
                            icon: 'pi pi-fw pi-sign-in',
                            routerLink: ['/pages/task_Manager']
                        },
                        {
                            label: 'Port Manager',
                            icon: 'pi pi-fw pi-times-circle',
                            routerLink: ['/pages/port_Manager']
                        },
                        {
                            label: 'Network Control',
                            icon: 'pi pi-fw pi-lock',
                            routerLink: ['/pages/network_Control']
                        },
                        {
                            label: 'ATM Control',
                            icon: 'pi pi-fw pi-lock',
                            routerLink: ['/pages/atm_control']
                        },
                    ]
                }]
            },

            {
                items: [{
                    label: 'Risk Management',
                    icon: 'pi pi-fw pi-user',
                    items: [
                        {
                            label: 'INTERNATIONAL TXN ENABLED',
                            icon: 'pi pi-fw pi-sign-in',
                            routerLink: ['/pages/internationalTXNEnadisable']
                        },
                        {
                            label: 'TXN ALLOW WITHOUT PIN',
                            icon: 'pi pi-fw pi-times-circle',
                            routerLink: ['/pages/txnAllowWithoutPin']
                        },
                        {
                            label: 'RISK COUNTRY BLOCK',
                            icon: 'pi pi-fw pi-lock',
                            routerLink: ['/pages/riskCountryBlock']
                        },
                        {
                            label: 'TXN ALLOW FOR RISK COUNTRY',
                            icon: 'pi pi-fw pi-lock',
                            routerLink: ['/pages/txnAllowedRiskCountry']
                        },
                        {
                            label: 'MCC BLOCK',
                            icon: 'pi pi-fw pi-lock',
                            routerLink: ['/pages/mccBlock']
                        },
                        {
                            label: 'TXN ALLOW FOR BLOCKED MCC',
                            icon: 'pi pi-fw pi-lock',
                            routerLink: ['/pages/txnAllowBlockedMCC']
                        },
                        {
                            label: 'RISK ECOM SITE BLOCK',
                            icon: 'pi pi-fw pi-lock',
                            routerLink: ['/pages/riskEcomSiteBlock']
                        },
                    ]
                }]
            },

            {
                items: [{
                    label: 'Reports',
                    icon: 'pi pi-fw pi-user',
                    items: [

                    ]
                }]
            },

            {
                items: [{
                    label: 'Utility',
                    icon: 'pi pi-fw pi-user',
                    items: [
                        {
                            label: 'Email Update',
                            icon: 'pi pi-fw pi-sign-in',
                            routerLink: ['/pages/email_update']
                        },
                        {
                            label: 'Modile Update',
                            icon: 'pi pi-fw pi-times-circle',
                            routerLink: ['/pages/mobile_update']
                        },
                        {
                            label: 'SAF Management',
                            icon: 'pi pi-fw pi-lock',
                            routerLink: ['/pages/saf']
                        },
                        {
                            label: 'Admin card',
                            icon: 'pi pi-fw pi-lock',
                            routerLink: ['/pages/admin_card']
                        },
                    ]
                }]
            },

            {
                items: [{
                    label: 'User Management',
                    icon: 'pi pi-fw pi-user',
                    items: [
                        {
                            label: 'Profile',
                            icon: 'pi pi-fw pi-sign-in',
                            routerLink: ['/auth/login']
                        },
                        {
                            label: 'User',
                            icon: 'pi pi-fw pi-times-circle',
                            routerLink: ['/auth/error']
                        },
                    ]
                }]
            },

            {
                label: 'UI Components',
                items: [
                    { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                    { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                    { label: 'Button', icon: 'pi pi-fw pi-mobile', class: 'rotated-icon', routerLink: ['/uikit/button'] },
                    { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
                    { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
                    { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
                    { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
                    { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
                    { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
                    { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'] },
                    { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
                    { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
                    { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
                    { label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/uikit/timeline'] },
                    { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
                ]
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                routerLink: ['/pages'],
                items: [
                    {
                        label: 'Landing',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/landing']
                    },
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            }
                        ]
                    },
                    {
                        label: 'Crud',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/crud']
                    },
                    {
                        label: 'Not Found',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/pages/notfound']
                    },
                    {
                        label: 'Empty',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/pages/empty']
                    }
                ]
            },
            {
                label: 'Hierarchy',
                items: [
                    {
                        label: 'Submenu 1',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 1.1',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                            {
                                label: 'Submenu 1.2',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
                            }
                        ]
                    },
                    {
                        label: 'Submenu 2',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 2.1',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                            {
                                label: 'Submenu 2.2',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Get Started',
                items: [
                    {
                        label: 'Documentation',
                        icon: 'pi pi-fw pi-book',
                        routerLink: ['/documentation']
                    },
                    {
                        label: 'View Source',
                        icon: 'pi pi-fw pi-github',
                        url: 'https://github.com/primefaces/sakai-ng',
                        target: '_blank'
                    }
                ]
            }
        ];
    }
}
