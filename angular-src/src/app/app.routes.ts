import { Routes, RouterModule } from "@angular/router"

// dashboard specific
import { AdminDashboardViewComponent, AdminDashboardLoginComponent } from "./admin-dashboard/components/admin-dashboard-components-barrel"

// technologies specific
import { TechnologiesAddComponent, TechnologiesManageComponent, TechnologiesEditComponent } from "./admin-dashboard/technologies/components/technologies-components-barrel"

//site specifics
import { SiteViewComponent } from "./site/site-view.component"

const APP_ROUTES: Routes = [
  {path: "", component: SiteViewComponent},
  {path: "login", component: AdminDashboardLoginComponent},
  {path: "dashboard", component: AdminDashboardViewComponent, children: [
    {path: "technologies-add", component: TechnologiesAddComponent, outlet: "adminDashboardOutlet"},
    {path: "technologies-manage", component: TechnologiesManageComponent, outlet: "adminDashboardOutlet"},
    {path: "technologies-manage/:technologyId", component: TechnologiesEditComponent, outlet: "adminDashboardOutlet"}
  ]}
]

export const router = RouterModule.forRoot(APP_ROUTES)
