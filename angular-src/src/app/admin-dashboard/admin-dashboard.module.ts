import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "../app.routes"
import { AdminDashboardViewComponent } from './admin-dashboard-view.component';

// Services
import { AdminDashboardApiService } from "./admin-dashboard-api.service"

// modules
import { WorkExamplesModule } from "./work-examples/work-examples.module"
import { TechnologiesModule } from "./technologies/technologies.module"
import { ProfileModule } from "./profile/profile.module";
import { AdminLoginComponent } from './components/admin-login/admin-login.component'

@NgModule({
  declarations: [
    AdminDashboardViewComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WorkExamplesModule,
    TechnologiesModule,
    ProfileModule,
    router
  ],
  providers: [AdminDashboardApiService],
})
export class AdminDashboardModule { }
