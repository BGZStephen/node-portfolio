import { Routes, RouterModule } from '@angular/router';

import {
  WorkExamplesEditComponent,
  WorkExamplesListComponent,
  WorkExamplesAddComponent
} from './components/work-examples-components-barrel';

const WORK_EXAMPLES_ROUTES: Routes = [
  {path: '', component: WorkExamplesListComponent},
  {path: 'add', component: WorkExamplesAddComponent},
  {path: ':id', component: WorkExamplesEditComponent},
];

export const WorkExamplesRouter = RouterModule.forChild(WORK_EXAMPLES_ROUTES);
