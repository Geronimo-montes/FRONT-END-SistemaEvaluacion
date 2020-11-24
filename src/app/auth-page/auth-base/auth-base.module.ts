import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AuthBaseRoutes } from "./auth-base.routing";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";
import { CommonModule } from "@angular/common";
import { UsersService } from "../../model/users/users.service";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    imports: [
        HttpClientModule, //solicitudes api-rest
        FormsModule,//elementos del formulario
        ReactiveFormsModule,//validaciones formularios/reactivos
        CommonModule,//use de etiquetas *ng en html
        NgbModule,
        RouterModule.forChild(AuthBaseRoutes),
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
    ],
    providers: [
        CookieService,
        UsersService
    ]
})
export class AuthBaseModule { }