import { Routes, RouterModule } from "@angular/router"

// dashboard specific
import { AdminDashboardViewComponent, AdminDashboardLoginComponent } from "./admin-dashboard/components/admin-dashboard-components-barrel"

//site specifics
import { SiteViewComponent } from "./site/site-view.component"

const APP_ROUTES: Routes = [
  {path: "", component: SiteViewComponent},
  {path: "login", component: AdminDashboardLoginComponent},
  {path: "dashboard", component: AdminDashboardViewComponent, children: []}
]

export const router = RouterModule.forRoot(APP_ROUTES)
