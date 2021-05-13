import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { LabsRoutingModule } from './lazy-routing.module';

import { LazyModuleComponent } from './lazy-module.component';
import { LazyComponentComponent } from './components/lazy-component/lazy-component.component';
import { LazyDynamicComponentComponent } from './components/lazy-dynamic-component/lazy-dynamic-component.component';

import { DynamicHooksModule, HookParserEntry } from 'ngx-dynamic-hooks';
import { BoxComponentComponent} from 'src/app/components/box-component/box-component.component';

@NgModule({
  declarations: [
    LazyModuleComponent,
    LazyComponentComponent,
    LazyDynamicComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LabsRoutingModule,
    DynamicHooksModule
  ],
  providers: [
  ]
})
export class LazyModule { }
