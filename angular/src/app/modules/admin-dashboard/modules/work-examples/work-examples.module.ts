import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ApiService } from '../../../../services/api.service';

import {
  WorkExamplesManageComponent,
  WorkExamplesAddComponent,
  WorkExamplesEditComponent
} from './components/work-examples-components-barrel';

@NgModule({
  declarations: [WorkExamplesManageComponent, WorkExamplesAddComponent, WorkExamplesEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService],
})
export class WorkExamplesModule { }
