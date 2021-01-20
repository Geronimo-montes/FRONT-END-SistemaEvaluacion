import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminBaseComponent } from './admin-base/admin-base.component';

const routes: Routes = [
  {
    path: '',
    component: AdminBaseComponent,
    children:
      [
        {
          path: '',
          loadChildren: './user-profile/user-profile.module#UserProfileModule',
        }, {
          path: '',
          loadChildren: './alumno/crud-alumnos.module#CrudAlumnosModule',
        }, {
          path: '',
          loadChildren: './actividad/actividad.module#ActividadModule',
        }, {
          path: '',
          loadChildren: './calendario-actividad/calendario-actividad.module#CalendarioActividadModule',
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminBaseRoutingModule { }
