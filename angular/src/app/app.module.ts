import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AuthGuard } from 'app/guards/auth.guard';
import { ApiService } from 'app/services/api.service';

// router
import { AppRouter } from 'app/app.routes';

// modules
import { WebsiteModule } from 'app/modules/website/website.module';
import { DashboardModule } from 'app/modules/dashboard/dashboard.module';

// components
import { AppComponent } from 'app/app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRouter,
    WebsiteModule
  ],
  providers: [AuthGuard, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
