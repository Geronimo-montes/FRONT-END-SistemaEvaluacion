import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AuthBaseRoutes } from "./auth-base.routing";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { CommonModule } from "@angular/common";
import { ModelModule } from "src/app/model/model.module";
import { AuthGuard } from "./auth.guard";
import { AdminGuard } from "../admin-page/admin.guard";

@NgModule({
    imports: [
        HttpClientModule, //solicitudes api-rest
        FormsModule,//elementos del formulario
        ReactiveFormsModule,//validaciones formularios/reactivos
        CommonModule,//use de etiquetas *ng en html
        ModelModule,
        RouterModule.forChild(AuthBaseRoutes),
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
    ],
    providers: [
        AuthGuard,
    ]
})
export class AuthBaseModule { }