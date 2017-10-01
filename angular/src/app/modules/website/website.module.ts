import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { WebsiteRouter } from './website.routes';
import {
  WebsiteHomeComponent,
} from './components/website-components-barrel';

@NgModule({
  declarations: [
    WebsiteHomeComponent,
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
