import { Routes } from '@angular/router';
import { Documentation } from './documentation/documentation';
import { Crud } from './crud/crud';
import { Empty } from './empty/empty';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskManagerComponent } from './control/task-manager/task-manager.component';
import { ATMControlComponent } from './control/atm-control/atm-control.component';
import { PortManagerComponent } from './control/port-manager/port-manager.component';
import { NetworkControlComponent } from './control/network-control/network-control.component';
import { InstitutionComponent } from './Configuration/institution/institution.component';
import { BranchComponent } from './Configuration/branch/branch.component';
import { BinComponent } from './Configuration/bin/bin.component';
import { ATMTypeComponent } from './Configuration/atm-type/atm-type.component';
import { ATMComponent } from './Configuration/atm/atm.component';
import { ExternalBinComponent } from './Configuration/external-bin/external-bin.component';
import { FitComponent } from './Configuration/fit/fit.component';
import { CASSETComponent } from './Configuration/casset/casset.component';
import { PortComponent } from './Configuration/port/port.component';
import { TransactionComponent } from './Configuration/transaction/transaction.component';
import { AddEditViewAtmDetailsComponent } from './Configuration/atm/add-edit-view-atm-details/add-edit-view-atm-details.component';

export default [
    { path: 'documentation', component: Documentation },
    { path: 'crud', component: Crud },
    { path: 'empty', component: Empty },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'task_Manager', component: TaskManagerComponent },
    { path: 'port_Manager', component: PortManagerComponent },
    { path: 'network_Control', component: NetworkControlComponent },
    { path: 'atm_control', component: ATMControlComponent },
    { path: 'institution', component: InstitutionComponent },
    { path: 'branch', component: BranchComponent },
    { path: 'bin', component: BinComponent },
    { path: 'atmType', component: ATMTypeComponent },
    { path: 'atm', component: ATMComponent },
    { path: 'add_edit_atm', component: AddEditViewAtmDetailsComponent },
    { path: 'externalBin', component: ExternalBinComponent },
    { path: 'fit', component: FitComponent },
    { path: 'casset', component: CASSETComponent },
    { path: 'port', component: PortComponent },
    { path: 'transaction', component: TransactionComponent },
    { path: '**', redirectTo: '/notfound' }

] as Routes;
