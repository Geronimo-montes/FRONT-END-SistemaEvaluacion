import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModelModule } from "src/app/model/model.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AdminBaseRoutingModule } from "./admin-base-routing.module";
import { AdminBaseComponent } from "./admin-base/admin-base.component";
import { ComponentsModule } from "../components/components.module";
import { ToastyModule } from "ng2-toasty";
import { AlumnoUserProfileComponent } from './alumno-user/alumno-user-profile/alumno-user-profile.component';
@NgModule({
  imports: [
    ModelModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CommonModule,
    ComponentsModule,
    AdminBaseRoutingModule,
    ToastyModule
  ],
  declarations: [
    AdminBaseComponent,
  ],
  providers: [

  ]
})
export class AdminBaseModule { }