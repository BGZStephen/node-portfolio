import { Routes, RouterModule } from "@angular/router"

// dashboard specific
import { AdminDashboardViewComponent, AdminDashboardLoginComponent } from "./components/admin-dashboard-components-barrel"

// technologies specific
import { TechnologiesAddComponent, TechnologiesManageComponent, TechnologiesEditComponent } from "./modules/technologies/components/technologies-components-barrel"

// work-example specific
import { WorkExamplesAddComponent, WorkExamplesManageComponent, WorkExamplesEditComponent } from "./modules/work-examples/components/work-examples-components-barrel"

const DASHBOARD_ROUTES: Routes = [
  {path: "dashboard", component: AdminDashboardViewComponent, children: [
    {path: "technologies-add", component: TechnologiesAddComponent},
    {path: "technologies-manage", component: TechnologiesManageComponent},
    {path: "technologies-manage/:technologyId", component: TechnologiesEditComponent},
    {path: "work-examples-add", component: WorkExamplesAddComponent},
    {path: "work-examples-manage", component: WorkExamplesManageComponent},
    {path: "work-examples-edit/:workExampleId", component: WorkExamplesEditComponent}
  ]}
]

export const DashboardRouter = RouterModule.forChild(DASHBOARD_ROUTES)
