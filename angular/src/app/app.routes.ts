import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
  {path: '', loadChildren: './modules/site/site.module#SiteModule'},
  {path: 'dashboard', loadChildren: './modules/admin-dashboard/admin-dashboard.module#AdminDashboardModule'},
];

export const AppRouter = RouterModule.forRoot(APP_ROUTES);
