import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LazyComponentComponent } from './components/lazy-component/lazy-component.component';
import { LazyDynamicComponentComponent } from './components/lazy-dynamic-component/lazy-dynamic-component.component';


const routes: Routes = [
  {
    path: '',
    component: LazyComponentComponent,
    children: []
  },
  {
    path: 'dynamic',
    component: LazyDynamicComponentComponent,
    children: []
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LabsRoutingModule { }
