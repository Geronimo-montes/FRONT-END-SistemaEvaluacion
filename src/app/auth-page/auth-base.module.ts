import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { CommonModule } from "@angular/common";
import { ModelModule } from "src/app/model/model.module";
import { AuthGuard } from "./auth.guard";
import { AuthBaseRoutingModule } from "./auth-base-routing.module";
import { AuthBaseComponent } from "./auth-base/auth-base.component";
import { ComponentsModule } from "../components/components.module";
import { ToastyModule } from "ng2-toasty";

@NgModule({
    imports: [
        FormsModule,//elementos del formulario
        ReactiveFormsModule,//validaciones formularios/reactivos
        CommonModule,//use de etiquetas *ng en html
        ComponentsModule,
        ModelModule,
        AuthBaseRoutingModule,
        ToastyModule
    ],
    declarations: [
        AuthBaseComponent,
        LoginComponent,
        RegisterComponent,
    ],
    providers: [
        AuthGuard,
    ]
})
export class AuthBaseModule { }