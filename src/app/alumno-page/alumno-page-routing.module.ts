import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlumnoBaseComponent } from "./alumno-base/alumno-base.component";
import { AlumnoGuard } from "../components/guards/alumno.guard";

const routes: Routes = [
  {
    path: '',
    component: AlumnoBaseComponent,
    children:
      [
        {
          path: '',
          loadChildren: './profile/profile.module#ProfileModule',
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnoPageRoutingModule { }