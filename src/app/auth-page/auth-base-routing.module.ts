import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthBaseComponent } from "./auth-base/auth-base.component";
import { AuthGuard } from "./auth.guard";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  {
    path: '',
    component: AuthBaseComponent,
    children:
      [
        {
          path: 'login',
          component: LoginComponent,
          canActivate: [AuthGuard],
        }, {
          path: 'register',
          component: RegisterComponent,
          canActivate: [AuthGuard],
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthBaseRoutingModule { }