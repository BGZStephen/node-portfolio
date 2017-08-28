import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SiteRouter } from './site.routes';

// Services
import { ApiService } from '../../services/api.service';

// Components
import {
  SiteViewComponent,
  SiteWorkExamplesComponent,
  SiteCodeLabComponent,
  SiteHomeComponent,
  SiteNavbarComponent
} from './components/site-components-barrel';


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
  providers: [ApiService],
})
export class SiteModule { }
