import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TechnologiesManageComponent, TechnologiesAddComponent } from './components/technologies-components-barrel';

@NgModule({
  declarations: [TechnologiesManageComponent, TechnologiesAddComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
})
export class TechnologiesModule { }
