import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  TechnologiesManageComponent,
  TechnologiesAddComponent,
  TechnologiesEditComponent
} from './components/technologies-components-barrel';

import { ApiService } from '../../../../services/api.service';

@NgModule({
  declarations: [
    TechnologiesManageComponent,
    TechnologiesAddComponent,
    TechnologiesEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService],
})
export class TechnologiesModule { }
