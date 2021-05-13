import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';

import { DynamicHooksModule, HookParserEntry } from 'ngx-dynamic-hooks';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BoxComponentComponent } from './components/box-component/box-component.component';
import { RouterModule } from '@angular/router';
import { DynamicComponentComponent } from './components/dynamic/dynamic-component/dynamic-component.component';

const componentParsers: Array<HookParserEntry> = [
  {component: BoxComponentComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    BoxComponentComponent,
    DynamicComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    DynamicHooksModule.forRoot({
      globalParsers: componentParsers
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
