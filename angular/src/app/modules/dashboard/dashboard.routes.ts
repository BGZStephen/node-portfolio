import { Routes, RouterModule } from '@angular/router';

import {
  DashboardLoginComponent,
  DashboardViewComponent,
  DashboardHomeComponent,
  DashboardWorkComponent
} from './components/dashboard-components-barrel';

const DASHBOARD_ROUTES: Routes = [
  {path: 'login', component: DashboardLoginComponent },
  {path: '', component: DashboardViewComponent, children: [
    {path: '', component: DashboardHomeComponent},
    {path: 'work-examples', loadChildren: './modules/work-examples/work-examples.module#WorkExamplesModule'},
  ]},
];

export const DashboardRouter = RouterModule.forChild(DASHBOARD_ROUTES);
