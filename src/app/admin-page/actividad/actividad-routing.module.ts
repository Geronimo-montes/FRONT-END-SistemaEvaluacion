import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadTableComponent } from './actividad-table/actividad-table.component';
import { ActividadFormComponent } from './actividad-form/actividad-form.component';
import { ActividadFichaComponent } from './actividad-ficha/actividad-ficha.component';
import { AdminGuard } from '../admin.guard';

const routes: Routes = [
  {
    path: 'actividad',
    component: ActividadFichaComponent,
    children:
      [
        {
          path: '',
          redirectTo: 'table'
        }, {
          path: 'table',
          component: ActividadTableComponent,
          canActivate: [AdminGuard]
        }, {
          path: 'form',
          component: ActividadFormComponent,
          canActivate: [AdminGuard]
        }
      ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActividadRoutingModule { }
