import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../../components/guards/admin.guard';
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
          canActivate: [AdminGuard]
        }, {
          path: 'profilealumno',
          component: ProfilealumnoComponent,
          canActivate: [AdminGuard]
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudAlumnosRoutingModule { }
