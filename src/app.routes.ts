import { Routes } from '@angular/router';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';
import { LayoutComponent } from './app/layout/component/layout/layout.component';
import { AtmMonitoringDetailsComponent } from './app/pages/monitorning/atm-monitoring/atm-monitoring-details/atm-monitoring-details.component';
import { TransactionMonitoringFromDBComponent } from './app/pages/monitorning/txn-monitoring/transaction-monitoring-from-db/transaction-monitoring-from-db.component';
import { GraphComponent } from './app/pages/monitorning/txn-monitoring/graph/graph.component';
import { ControlMonitoringDetailsComponent } from './app/pages/control/control-monitoring/control-monitoring-details/control-monitoring-details.component';
import { FraudMonitoringDetailsComponent } from './app/pages/monitorning/fraud-monitoring/fraud-monitoring-details/fraud-monitoring-details.component';
import { FraudRiskDbComponent } from './app/pages/monitorning/fradu-risk-txn-monitoring/fraud-risk-db/fraud-risk-db.component';
import { AuthGuard } from './app/layout/authGuard/auth.guard';
import { ChangePasswordComponent } from './app/pages/change-password/change-password.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: '/auth/login', pathMatch: 'full', },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') ,canActivate: [AuthGuard]}
        ]
    },
     { path: 'change_password', component: ChangePasswordComponent },
    { path: 'landing', component: Landing },
    { path: 'atm_Monitoring_details', component: AtmMonitoringDetailsComponent },
    { path: 'control_Monitoring_Details', component: ControlMonitoringDetailsComponent },
    { path: 'trans_monitoringDP', component: TransactionMonitoringFromDBComponent },
    { path: 'FraudRisk_Db', component: FraudRiskDbComponent },

    { path: 'fraud_Monitoring_details', component: FraudMonitoringDetailsComponent },
    { path: 'graph', component: GraphComponent },

    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];
