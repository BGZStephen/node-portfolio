import { Routes, RouterModule } from "@angular/router"

import { AdminDashboardViewComponent } from "./admin-dashboard/admin-dashboard-view.component"
import { SiteViewComponent } from "./site/site-view.component"

const APP_ROUTES: Routes = [
  {path: "", component: SiteViewComponent},
  {path: "admin", component: AdminDashboardViewComponent}
]

export const router = RouterModule.forRoot(APP_ROUTES)
