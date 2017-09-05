import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './guards/auth.guard';
import { ApiService } from './services/api.service';

// router
import { AppRouter } from './app.routes';

// modules
import { WebsiteModule } from './modules/website/website.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

// components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouter,
    WebsiteModule
  ],
  providers: [AuthGuard, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
