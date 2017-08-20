import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "../app.routes"
import { SiteApiService } from "./site-api.service"
import { SiteViewComponent, SiteWorkExamplesComponent, SiteCodeLabComponent, SiteHomeComponent,
         SiteNavbarComponent} from './components/site-components-barrel';



@NgModule({
  declarations: [
    SiteViewComponent,
    SiteHomeComponent,
    SiteWorkExamplesComponent,
    SiteCodeLabComponent,
    SiteNavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router
  ],
  providers: [SiteApiService],
})
export class SiteModule { }
