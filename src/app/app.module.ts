import { NgModule } from "@angular/core";
import { AppRoutingModule } from './app.routing';
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { ToastyModule } from "ng2-toasty";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastyModule.forRoot()
  ],
  declarations: [
    AppComponent, 
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}