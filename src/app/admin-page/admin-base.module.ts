import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ModelModule } from "src/app/model/model.module";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { AdminBaseRoutes } from "./admin-base.routing";
import { AdminGuard } from "./admin.guard";

@NgModule({
    imports: [
        ModelModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(AdminBaseRoutes),
    ],
    declarations: [
        UserProfileComponent,
    ],
    providers:[
        AdminGuard,
    ]
})
export class AdminBaseModule { }