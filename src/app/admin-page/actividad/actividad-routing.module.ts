import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadTableComponent } from './actividad-table/actividad-table.component';
import { ActividadGuard } from './actividad.guard';
import { ActividadFormComponent } from './actividad-form/actividad-form.component';
import { ActividadFichaComponent } from './actividad-ficha/actividad-ficha.component';

const routes: Routes = [
  {
    path: 'actividad',
    component: ActividadFichaComponent,
    children:
    [
      {
        path: '',
        redirectTo: 'form'
      }, {
        path: 'table',
        component: ActividadTableComponent,
        canActivate: [ActividadGuard]
      }, {
        path: 'form',
        component: ActividadFormComponent,
        canActivate: [ActividadGuard]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActividadRoutingModule { }
