import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TechnologiesManageComponent, TechnologiesAddComponent, TechnologiesEditComponent} from './components/technologies-components-barrel';

import { TechnologiesApiService } from "./technologies-api.service";

@NgModule({
  declarations: [
    TechnologiesManageComponent,
    TechnologiesAddComponent,
    TechnologiesEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TechnologiesApiService],
})
export class TechnologiesModule { }
