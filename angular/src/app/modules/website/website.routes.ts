import { Routes, RouterModule } from '@angular/router';

import {
  WebsiteViewComponent,
  WebsiteHomeComponent,
  WebsiteWorkComponent,
  WebsiteSocialComponent
} from './components/website-components-barrel';

const WEBSITE_ROUTES: Routes = [
  {path: '', component: WebsiteViewComponent, children: [
    {path: '', component: WebsiteHomeComponent},
    {path: 'work', component: WebsiteWorkComponent},
    {path: 'social', component: WebsiteSocialComponent},
  ]},
];

export const WebsiteRouter = RouterModule.forChild(WEBSITE_ROUTES);
