import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DashboardRouter } from './dashboard.routes';
import { FlashMessagesModule } from 'angular2-flash-messages';

// Components
import {
  AdminDashboardLoginComponent,
  AdminDashboardViewComponent,
  AdminDashboardNotificationBarComponent,
  AdminDashboardNavbarComponent
} from './components/admin-dashboard-components-barrel'

// Services
import { AdminDashboardApiService } from "./services/admin-dashboard-api.service"

// Modules
import { WorkExamplesModule } from "./modules/work-examples/work-examples.module"
import { TechnologiesModule } from "./modules/technologies/technologies.module"
import { ProfileModule } from "./modules/profile/profile.module";

@NgModule({
  declarations: [
    AdminDashboardViewComponent,
    AdminDashboardLoginComponent,
    AdminDashboardNavbarComponent,
    AdminDashboardNotificationBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    WorkExamplesModule,
    TechnologiesModule,
    ProfileModule,
    DashboardRouter
  ],
  providers: [AdminDashboardApiService],
})
export class AdminDashboardModule { }
