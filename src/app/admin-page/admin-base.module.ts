import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModelModule } from "src/app/model/model.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AdminBaseRoutingModule } from "./admin-base-routing.module";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { AdminGuard } from "./admin.guard";
import { AdminBaseComponent } from "./admin-base/admin-base.component";
import { ComponentsModule } from "../components/components.module";

@NgModule({
  imports: [
    ModelModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CommonModule,
    ComponentsModule,
    AdminBaseRoutingModule,
  ],
  declarations: [
    AdminBaseComponent,
    UserProfileComponent,
  ],
  providers:[
    AdminGuard,
  ]
})
export class AdminBaseModule { }