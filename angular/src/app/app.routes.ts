import { Routes, RouterModule } from "@angular/router"

//site specifics
import { SiteViewComponent, SiteHomeComponent, SiteWorkExamplesComponent,
         SiteCodeLabComponent} from "./modules/site/components/site-components-barrel"

const APP_ROUTES: Routes = [
  {path: "", component: SiteViewComponent},
  {path: "home", component: SiteHomeComponent, outlet: "siteOutlet"},
  {path: "work-examples", component: SiteWorkExamplesComponent, outlet: "siteOutlet"},
  {path: "code-lab", component: SiteCodeLabComponent, outlet: "siteOutlet"},
  {path: 'dashboard', loadChildren: './modules/admin-dashboard/admin-dashboard.module#AdminDashboardModule'}
]

export const router = RouterModule.forRoot(APP_ROUTES)
