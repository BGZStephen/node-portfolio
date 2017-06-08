import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WorkExamplesManageComponent } from './work-examples-manage/work-examples-manage.component';
import { WorkExamplesAddComponent } from './work-examples-add/work-examples-add.component';

@NgModule({
  declarations: [WorkExamplesManageComponent, WorkExamplesAddComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
})
export class WorkExamplesModule { }
