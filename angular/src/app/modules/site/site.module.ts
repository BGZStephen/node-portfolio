import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SiteRouter } from './site.routes';
import { SiteApiService } from "./services/site-api.service"
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
    CommonModule,
    FormsModule,
    HttpModule,
    SiteRouter
  ],
  providers: [SiteApiService],
})
export class SiteModule { }
