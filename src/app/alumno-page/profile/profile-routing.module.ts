import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlumnoGuard } from "../alumno.guard";
import { AlumnoActividadComponent } from "./alumno-actividad/alumno-actividad.component";
import { ProfileBaseComponent } from "./profile-base/profile-base.component";

const routes: Routes = [
  {
    path: 'userprofile',
    component: ProfileBaseComponent,
    canActivate: [AlumnoGuard],
  }, {
    path: 'useractividad',
    component: AlumnoActividadComponent,
    canActivate: [AlumnoGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }