import { Routes, RouterModule } from '@angular/router';

import {
  DashboardLoginComponent,
  DashboardViewComponent,
  DashboardHomeComponent
} from './components/dashboard-components-barrel';

const DASHBOARD_ROUTES: Routes = [
  {path: 'login', component: DashboardLoginComponent },
  {path: '', component: DashboardViewComponent, children: [
    {path: '', component: DashboardHomeComponent},
  ]},
];

export const DashboardRouter = RouterModule.forChild(DASHBOARD_ROUTES);
