import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminBaseComponent } from './admin-base/admin-base.component';
import { AdminGuard } from './admin.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: AdminBaseComponent,
    children: 
    [
      {
        path: 'profile',
        component: UserProfileComponent,
        canActivate: [ AdminGuard ]
      }, {
        path: '',
        loadChildren: './alumno/crud-alumnos.module#CrudAlumnosModule',
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminBaseRoutingModule { }
