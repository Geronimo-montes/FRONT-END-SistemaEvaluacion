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
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminBaseRoutingModule { }
