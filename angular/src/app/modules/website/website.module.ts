import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WebsiteRouter } from './website.routes';
import {
  WebsiteViewComponent,
  WebsiteNavbarComponent,
  WebsiteHomeComponent,
  WebsiteWorkComponent,
  WebsiteSocialComponent
} from './components/website-components-barrel';

@NgModule({
  declarations: [
    WebsiteViewComponent,
    WebsiteNavbarComponent,
    WebsiteHomeComponent,
    WebsiteWorkComponent,
    WebsiteSocialComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    WebsiteRouter
  ],
  providers: [],
  bootstrap: []
})
export class WebsiteModule { }
