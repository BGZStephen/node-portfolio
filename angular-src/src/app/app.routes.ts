import { Routes, RouterModule } from "@angular/router"

import { AuthGuard } from "./guards/auth.guard"

// dashboard specific
import { AdminDashboardViewComponent, AdminDashboardLoginComponent } from "./admin-dashboard/components/admin-dashboard-components-barrel"

// technologies specific
import { TechnologiesAddComponent, TechnologiesManageComponent, TechnologiesEditComponent } from "./admin-dashboard/technologies/components/technologies-components-barrel"

// work-example specific
import { WorkExamplesAddComponent, WorkExamplesManageComponent, WorkExamplesEditComponent } from "./admin-dashboard/work-examples/components/work-examples-components-barrel"

//site specifics
import { SiteViewComponent } from "./site/site-view.component"

const APP_ROUTES: Routes = [
  {path: "", component: SiteViewComponent},
  {path: "login", component: AdminDashboardLoginComponent},
  {path: "dashboard", component: AdminDashboardViewComponent, children: [
    {path: "technologies-add", component: TechnologiesAddComponent, outlet: "adminDashboardOutlet"},
    {path: "technologies-manage", component: TechnologiesManageComponent, outlet: "adminDashboardOutlet"},
    {path: "technologies-manage/:technologyId", component: TechnologiesEditComponent, outlet: "adminDashboardOutlet"},
    {path: "work-examples-add", component: WorkExamplesAddComponent, outlet: "adminDashboardOutlet"},
    {path: "work-examples-manage", component: WorkExamplesManageComponent, outlet: "adminDashboardOutlet"},
    {path: "work-examples-edit/:workExampleId", component: WorkExamplesEditComponent, outlet: "adminDashboardOutlet"},
  ], canActivate: [AuthGuard]}
]

export const router = RouterModule.forRoot(APP_ROUTES)
