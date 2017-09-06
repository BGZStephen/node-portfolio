import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DashboardRouter } from './dashboard.routes';
import {
  DashboardViewComponent,
  DashboardHomeComponent,
  DashboardNavbarComponent,
  DashboardLoginComponent
} from './components/dashboard-components-barrel';

@NgModule({
  declarations: [
    DashboardViewComponent,
    DashboardHomeComponent,
    DashboardNavbarComponent,
    DashboardLoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    DashboardRouter
  ],
  providers: [],
  bootstrap: []
})
export class DashboardModule { }
