import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from './app.routing';

import { AppComponent } from "./app.component";

import { ComponentsModule } from './components/components.module';
import { AuthBaseComponent } from './auth-page/auth-base/auth-base.component';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    BrowserModule, 
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent, 
    AuthBaseComponent,
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}