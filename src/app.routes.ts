import { Routes } from '@angular/router';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';
import { LayoutComponent } from './app/layout/component/layout/layout.component';
import { AtmMonitoringDetailsComponent } from './app/pages/monitorning/atm-monitoring/atm-monitoring-details/atm-monitoring-details.component';
import { TransactionMonitoringFromDBComponent } from './app/pages/monitorning/txn-monitoring/transaction-monitoring-from-db/transaction-monitoring-from-db.component';
import { GraphComponent } from './app/pages/monitorning/txn-monitoring/graph/graph.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: '/landing', pathMatch: 'full', },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
        ]
    },
    { path: 'landing', component: Landing },
    { path: 'atm_Monitoring_details', component: AtmMonitoringDetailsComponent },
    { path: 'trans_monitoringDP', component: TransactionMonitoringFromDBComponent },
    { path: 'graph', component: GraphComponent },

    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];
