import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from './app.routing';

import { AppComponent } from "./app.component";

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent, 
    RegisterComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}