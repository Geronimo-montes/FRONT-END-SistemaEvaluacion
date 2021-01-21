import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LOCALE_ID, NgModule } from "@angular/core";
import { AppRoutingModule } from './app.routing';
import { AppComponent } from "./app.component";
import { ToastyModule } from "ng2-toasty";
import { FormsModule } from '@angular/forms';

import { registerLocaleData } from "@angular/common";
import localeEs from '@angular/common/locales/es-MX';
//fehcas en español mexicano
registerLocaleData(localeEs, 'es-MX');

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastyModule.forRoot(),
    FormsModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-MX' },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }