import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// router
import { WorkExamplesRouter } from './work-examples.routes';

// components
import {
  WorkExamplesListComponent,
  WorkExamplesIndividualComponent
} from './components/work-examples-components-barrel';

@NgModule({
  declarations: [
    WorkExamplesListComponent,
    WorkExamplesIndividualComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    WorkExamplesRouter
  ],
  providers: [],
  bootstrap: []
})
export class WorkExamplesModule { }
