import { Routes, RouterModule } from '@angular/router';

// site specifics
import { SiteViewComponent, SiteHomeComponent, SiteWorkExamplesComponent,
         SiteCodeLabComponent} from './components/site-components-barrel';

const SITE_ROUTES: Routes = [
  {path: '', component: SiteViewComponent, children: [
    {path: '', component: SiteHomeComponent},
    {path: 'work-examples', component: SiteWorkExamplesComponent},
    {path: 'code-lab', component: SiteCodeLabComponent},
  ]},
];

export const SiteRouter = RouterModule.forChild(SITE_ROUTES);
