import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "./app.routes"
import { AuthGuard } from "./guards/auth.guard"
import { ApiService } from "./api.service"

import { AppComponent } from './app.component';

// modules
import { AdminDashboardModule } from "./admin-dashboard/admin-dashboard.module";
import { SiteModule } from './site/site.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AdminDashboardModule,
    SiteModule,
    router
  ],
  providers: [AuthGuard, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }