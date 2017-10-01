import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthService } from 'app/services/auth.service';

// router
import { DashboardRouter } from './dashboard.routes';

// modules

import { WorkExamplesModule } from './modules/work-examples/work-examples.module';

// components
import {
  DashboardViewComponent,
  DashboardHomeComponent,
  DashboardNavbarComponent,
  DashboardLoginComponent,
} from './components/dashboard-components-barrel';

@NgModule({
  declarations: [
    DashboardViewComponent,
    DashboardHomeComponent,
    DashboardNavbarComponent,
    DashboardLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    DashboardRouter
  ],
  providers: [AuthService],
  bootstrap: []
})
export class DashboardModule { }
