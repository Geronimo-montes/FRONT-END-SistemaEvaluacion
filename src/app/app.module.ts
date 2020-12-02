import { NgModule } from "@angular/core";
import { ComponentsModule } from './components/components.module';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app.routing';

import { AppComponent } from "./app.component";
import { AuthBaseComponent } from './auth-page/auth-base/auth-base.component';
import { AdminBaseComponent } from './admin-page/admin-base/admin-base.component';

@NgModule({
  imports: [
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