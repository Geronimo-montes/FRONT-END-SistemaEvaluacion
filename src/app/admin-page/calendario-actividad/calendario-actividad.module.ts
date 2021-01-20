import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { CalendarioComponent } from './calendario/calendario.component';
import { CalendarioBaseComponent } from './calendario-base/calendario-base.component';
import { AdminGuard } from '../admin.guard';
import { CalendarioActividadRoutingModule } from './calendario-actividad-routing.module';
import { CalendarioProgramarActividadComponent } from './calendario-programar-actividad/calendario-programar-actividad.component';
import { ModelModule } from 'src/app/model/model.module';

@NgModule({
  declarations: [
    CalendarioBaseComponent,
    CalendarioComponent,
    CalendarioProgramarActividadComponent,
  ],
  imports: [
    NgbModule,
    ModelModule,
    CalendarioActividadRoutingModule,
    CommonModule,
    FormsModule,
    NgbModalModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
  ],
  providers: [
    AdminGuard,
  ]
})
export class CalendarioActividadModule { }
