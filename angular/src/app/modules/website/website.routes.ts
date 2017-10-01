import { Routes, RouterModule } from '@angular/router';

import {
  WebsiteHomeComponent,
} from './components/website-components-barrel';

const WEBSITE_ROUTES: Routes = [
  {path: '', component: WebsiteHomeComponent},
];

export const WebsiteRouter = RouterModule.forChild(WEBSITE_ROUTES);
