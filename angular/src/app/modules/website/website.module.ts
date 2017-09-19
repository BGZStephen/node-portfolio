import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { WebsiteRouter } from './website.routes';
import {
  WebsiteViewComponent,
  WebsiteNavbarComponent,
  WebsiteHomeComponent,
  WebsiteWorkComponent,
  WebsiteLabComponent,
  WebsiteWorkExampleComponent
} from './components/website-components-barrel';

@NgModule({
  declarations: [
    WebsiteViewComponent,
    WebsiteNavbarComponent,
    WebsiteHomeComponent,
    WebsiteWorkComponent,
    WebsiteLabComponent,
    WebsiteWorkExampleComponent,
  ],
  imports: [
    CommonModule,
    HttpModule,
    WebsiteRouter
  ],
  providers: [],
  bootstrap: []
})
export class WebsiteModule { }
