import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ModelModule } from "src/app/model/model.module";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { AdminBaseRoutes } from "./admin-base.routing";
import { AdminGuard } from "./admin.guard";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CrudAlumnosComponent } from "./crud-alumnos/crud-alumnos.component";

@NgModule({
  imports: [
    ModelModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    CommonModule,
    RouterModule.forChild(AdminBaseRoutes),
  ],
  declarations: [
    UserProfileComponent,
    CrudAlumnosComponent
  ],
  providers:[
    AdminGuard,
  ]
})
export class AdminBaseModule { }