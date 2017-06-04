import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminDashboardViewComponent } from './admin-dashboard-view.component';

// modules
import { WorkExamplesModule } from "./work-examples/work-examples.module"
import { TechnologiesModule } from "./technologies/technologies.module"
import { ProfileModule } from "./profile/profile.module"

@NgModule({
  declarations: [
    AdminDashboardViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WorkExamplesModule,
    TechnologiesModule,
    ProfileModule
  ],
  providers: [],
})
export class AdminDashboardModule { }
