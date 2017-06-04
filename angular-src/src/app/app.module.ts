import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// modules
import { AdminDashboardModule } from "./admin-dashboard/admin-dashboard.module";
import { SiteViewComponent } from './site/site-view.component'

@NgModule({
  declarations: [
    AppComponent,
    SiteViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
