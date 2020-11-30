import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AdminBaseComponent } from "./admin-page/admin-base/admin-base.component";
import { AuthBaseComponent } from "./auth-page/auth-base/auth-base.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
     pathMatch: 'full',
  }, {
    path: '',
    component: AuthBaseComponent,
    children: [
      {
        path: '',
        loadChildren: './auth-page/auth-base/auth-base.module#AuthBaseModule'
      }
    ]
  },  {
    path: '',
    component: AdminBaseComponent,
    children: [
      {
        path: '',
        loadChildren: './admin-page/admin-base/admin-base.module#AdminBaseModule'
      }
    ]
  }, {
    path: '**',
    redirectTo: 'login',
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [

  ]
})

export class AppRoutingModule { }