import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminBaseComponent } from './admin-base/admin-base.component';

const routes: Routes = [
  {
    path: '',
    component: AdminBaseComponent,
    children:
      [
        /**
         * Ruta del Docente
         */
        {
          /**Perfil del doncente */
          path: '',
          loadChildren: './user-profile/user-profile.module#UserProfileModule',
        }, {
          /**Paginas de gestion de alumnos */
          path: '',
          loadChildren: './alumno/crud-alumnos.module#CrudAlumnosModule',
        }, {
          /**Gestion de actividades */
          path: '',
          loadChildren: './actividad/actividad.module#ActividadModule',
        }, {
          /**Calendario de trabajo */
          path: '',
          loadChildren: './calendario-actividad/calendario-actividad.module#CalendarioActividadModule',
        },

        /**
         * Rutas del usuario alumno
         */
        {
          /**Perfil del doncente */
          path: '',
          loadChildren: './alumno-user/alumno-user.module#AlumnoUserModule',
        },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminBaseRoutingModule { }
