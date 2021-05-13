/**
 * modules
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BoxComponentComponent } from './components/box-component/box-component.component';
import { DynamicComponentComponent } from './components/dynamic/dynamic-component/dynamic-component.component';



/**
 * security auth
 */
import { CanActiveService as AuthGuard } from 'src/app/services/can-activate.service';


const routes: Routes = [
  {
    path: 'box',
    component: BoxComponentComponent
  },
  {
    path: 'dynamic',
    component: DynamicComponentComponent
  },
  {
    path: 'lazy',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/lazy/lazy-routing.module').then(m => m.LabsRoutingModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
