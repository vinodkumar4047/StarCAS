import { Routes } from '@angular/router';
import { Documentation } from './documentation/documentation';
import { Crud } from './crud/crud';
import { Empty } from './empty/empty';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskManagerComponent } from './control/task-manager/task-manager.component';
import { ATMControlComponent } from './control/atm-control/atm-control.component';

export default [
    { path: 'documentation', component: Documentation },
    { path: 'crud', component: Crud },
    { path: 'empty', component: Empty },
    { path: 'dashboard', component: DashboardComponent },
    {path:'task_Manager',  component: TaskManagerComponent},
    {path:'atm_control',  component: ATMControlComponent},
    { path: '**', redirectTo: '/notfound' }

] as Routes;
