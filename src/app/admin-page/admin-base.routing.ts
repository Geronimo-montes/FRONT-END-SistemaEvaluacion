import { Routes } from "@angular/router";
import { AdminGuard } from "./admin.guard";
import { CrudAlumnosComponent } from "./crud-alumnos/crud-alumnos.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

export const AdminBaseRoutes: Routes = [
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [ AdminGuard ]
  }, {
    path: 'alumnos',
    component: CrudAlumnosComponent,
    canActivate: [ AdminGuard ]
  } 
  /*{
    path: '',
    component: CrudAlumnosComponent,
    children: [
      {
        path: '',
        loadChildren: './crud-alumnos/crud-alumnos.module#CrudAlumnosModule',
      }
    ],
  }
  /*{
    path: 'alumnos',
    component: CrudAlumnosComponent,
    canActivate: [ AdminGuard ]
  }*/
];