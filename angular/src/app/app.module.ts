import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRouter } from "./app.routes"
import { AuthGuard } from "./guards/auth.guard"

import { AppComponent } from './app.component';

// modules
import { AdminDashboardModule } from "./modules/admin-dashboard/admin-dashboard.module";
import { SiteModule } from './modules/site/site.module'

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
    AppRouter
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
