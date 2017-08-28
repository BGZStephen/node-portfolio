import { Routes, RouterModule } from "@angular/router"

//site specifics
import { SiteViewComponent, SiteHomeComponent, SiteWorkExamplesComponent,
         SiteCodeLabComponent} from "./modules/site/components/site-components-barrel"

const APP_ROUTES: Routes = [
  {path: '', loadChildren: './modules/site/site.module#SiteModule'},
  {path: 'dashboard', loadChildren: './modules/admin-dashboard/admin-dashboard.module#AdminDashboardModule'},
]

export const AppRouter = RouterModule.forRoot(APP_ROUTES)
