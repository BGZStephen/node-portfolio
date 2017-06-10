import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WorkExamplesApiService } from "./work-examples-api.service"

import { WorkExamplesManageComponent, WorkExamplesAddComponent, WorkExamplesEditComponent } from './components/work-examples-components-barrel';

@NgModule({
  declarations: [WorkExamplesManageComponent, WorkExamplesAddComponent, WorkExamplesEditComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WorkExamplesApiService],
})
export class WorkExamplesModule { }