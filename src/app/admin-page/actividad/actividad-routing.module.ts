import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadTableComponent } from './actividad-table/actividad-table.component';
import { ActividadFormComponent } from './actividad-form/actividad-form.component';
import { AdminGuard } from '../admin.guard';
import { ActividadBaseComponent } from './actividad-base/actividad-base.component';

const routes: Routes = [
  {
    path: 'actividad',
    component: ActividadBaseComponent,
    children: [
      {
        path: '',
        redirectTo: 'table',
      }, {
        path: 'table',
        component: ActividadTableComponent,
        canActivate: [AdminGuard],
      }, {
        path: 'form',
        component: ActividadFormComponent,
        canActivate: [AdminGuard],
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActividadRoutingModule { }
