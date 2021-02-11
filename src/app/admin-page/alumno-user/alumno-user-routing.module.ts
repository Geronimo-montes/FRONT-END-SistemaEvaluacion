import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoGuard } from 'src/app/components/guards/alumno.guard';
import { AlumnoUserBaseComponent } from './alumno-user-base/alumno-user-base.component';
import { AlumnoUserHomeComponent } from './alumno-user-home/alumno-user-home.component';

const routes: Routes = [
  {
    path: '',
    component: AlumnoUserBaseComponent,
    children: [
      {
        path: 'alumnouserprofile',
        component: AlumnoUserBaseComponent,
        canActivate: [AlumnoGuard]
      }, {
        path: 'alumnouserhome',
        component: AlumnoUserHomeComponent,
        canActivate: [AlumnoGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoUserRoutingModule { }
