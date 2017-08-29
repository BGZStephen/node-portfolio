import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
  {path: '', loadChildren: './modules/website/website.module#WebsiteModule'},
];

export const AppRouter = RouterModule.forRoot(APP_ROUTES);
