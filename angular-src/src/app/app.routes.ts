import { Routes, RouterModule } from "@angular/router"

// dashboard specific
import { AdminDashboardViewComponent } from "./admin-dashboard/admin-dashboard-view.component"
import { AdminLoginComponent } from "./admin-dashboard/components/admin-login/admin-login.component"

//site specifics
import { SiteViewComponent } from "./site/site-view.component"

const APP_ROUTES: Routes = [
  {path: "", component: SiteViewComponent},
  {path: "login", component: AdminLoginComponent},
  {path: "dashboard", component: AdminDashboardViewComponent, children: [
    {path: "login", component: AdminLoginComponent}
  ]}
]

export const router = RouterModule.forRoot(APP_ROUTES)
