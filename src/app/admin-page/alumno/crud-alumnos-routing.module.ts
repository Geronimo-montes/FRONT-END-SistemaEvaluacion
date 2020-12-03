import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudAlumnosComponent } from './crud-alumnos/crud-alumnos.component';
import { CrudGuard } from './crud.guard';
import { ProfilealumnoComponent } from './profilealumno/profilealumno.component';
import { TableAlumnoComponent } from './table-alumno/table-alumno.component';

const routes: Routes = [
  {
    path: 'alumno',
    component: CrudAlumnosComponent,
    children:
    [
      {
        path: '',
        redirectTo: 'table'
      }, {
        path: 'table',
        component: TableAlumnoComponent,
        canActivate: [CrudGuard]
      }, {
        path: 'profilealumno',
        component: ProfilealumnoComponent,
        canActivate: [CrudGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudAlumnosRoutingModule { }
