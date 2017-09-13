import { Routes, RouterModule } from '@angular/router';

import {
  WorkExamplesIndividualComponent,
  WorkExamplesListComponent,
} from './components/work-examples-components-barrel';

const WORK_EXAMPLES_ROUTES: Routes = [
  {path: '', component: WorkExamplesListComponent},
  {path: ':id', component: WorkExamplesIndividualComponent},
];

export const WorkExamplesRouter = RouterModule.forChild(WORK_EXAMPLES_ROUTES);
