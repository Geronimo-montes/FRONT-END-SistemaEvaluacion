import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from './app.routing';

import { AppComponent } from "./app.component";

import { ComponentsModule } from './components/components.module';
import { AuthBaseComponent } from './auth-page/auth-base/auth-base.component';
import { RouterModule } from "@angular/router";
import { AdminBaseComponent } from './admin-page/admin-base/admin-base.component';

@NgModule({
  imports: [
    BrowserModule, 
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent, 
    AuthBaseComponent, //login y registro
    AdminBaseComponent, //perfil docente
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}