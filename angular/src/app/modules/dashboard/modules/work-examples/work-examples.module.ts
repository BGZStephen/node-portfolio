import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NotificationService } from '../../../../services/notification.service';

// router
import { WorkExamplesRouter } from './work-examples.routes';

// components
import {
  WorkExamplesListComponent,
  WorkExamplesEditComponent,
  WorkExamplesAddComponent
} from './components/work-examples-components-barrel';

@NgModule({
  declarations: [
    WorkExamplesListComponent,
    WorkExamplesEditComponent,
    WorkExamplesAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    WorkExamplesRouter
  ],
  providers: [NotificationService],
  bootstrap: []
})
export class WorkExamplesModule { }
