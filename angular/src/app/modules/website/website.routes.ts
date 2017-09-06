import { Routes, RouterModule } from '@angular/router';

import {
  WebsiteViewComponent,
  WebsiteHomeComponent,
  WebsiteWorkComponent,
  WebsiteLabComponent,
  WebsiteWorkExampleComponent
} from './components/website-components-barrel';

const WEBSITE_ROUTES: Routes = [
  {path: '', component: WebsiteViewComponent, children: [
    {path: '', component: WebsiteHomeComponent},
    {path: 'work', component: WebsiteWorkComponent},
    {path: 'work/:id', component: WebsiteWorkExampleComponent},
    {path: 'lab', component: WebsiteLabComponent, },
  ]},
];

export const WebsiteRouter = RouterModule.forChild(WEBSITE_ROUTES);
