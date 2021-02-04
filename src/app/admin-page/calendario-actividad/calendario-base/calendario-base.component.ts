import { Component, OnInit, ViewChild } from '@angular/core';
import { ActividadRepository } from 'src/app/model/actividad/actividad.repository';
import { Actividad, ActividadProgramada } from 'src/app/model/actividad/actividad.model';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-calendario-base',
  templateUrl: './calendario-base.component.html',
  styleUrls: ['./calendario-base.component.css']
})
export class CalendarioBaseComponent {
  constructor(
    private repository: ActividadRepository,
  ) { }

  get events(): CalendarEvent[] {
    return this.repository.getEventsCalendario();
  }

  get actividades(): Actividad[] {
    return this.repository.getActiviades();
  }
}
