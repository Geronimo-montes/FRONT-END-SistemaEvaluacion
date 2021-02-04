import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { isSameDay, isSameMonth, subMilliseconds } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbDateStruct, NgbModal, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { ActividadRepository } from 'src/app/model/actividad/actividad.repository';

@Component({
  selector: 'app-calendario',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  activeDayIsOpen: boolean = false;
  modalData: {
    action: string;
    event: CalendarEvent;
  };
  private model_inicio: NgbDateStruct;
  private time_inicio: NgbTimeStruct;
  private model_fin: NgbDateStruct;
  private time_fin: NgbTimeStruct;
  public mensajeLocal: string;

  constructor(
    private modal: NgbModal,
    private repository: ActividadRepository,
  ) { }

  /*Eventos get enlazados al repository de actividad*/
  get events(): CalendarEvent[] {
    return this.repository.getEventsCalendario();
  }
  get refresh(): Subject<any> {
    return this.repository.getRefresh();
  }
  get mensaje(): string {
    return this.repository.getMensaje();
  }
  get tipoMensaje(): string {
    return this.repository.getTipoMensaje();
  }
  get ubicacion(): string {
    return this.repository.getUbicacion();
  }

  //click en el dia
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }
  //escucha de los eventos
  handleEvent(action: string, event: CalendarEvent): void {
    this.model_inicio = { year: event.start.getFullYear(), month: event.start.getMonth() + 1, day: event.start.getDate() };
    this.time_inicio = { hour: event.start.getHours(), minute: event.start.getMinutes(), second: 0 };
    this.model_fin = { year: event.end.getFullYear(), month: event.end.getMonth() + 1, day: event.end.getDate() };
    this.time_fin = { hour: event.end.getHours(), minute: event.end.getMinutes(), second: 0 };

    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg', centered: true });
  }
  //establecer el tipo de visualizacion del calendario
  setView(view: CalendarView) {
    this.view = view;
  }
  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
  updateFecha(event: CalendarEvent) {
    var fechaactual = new Date();
    var fecha = this.model_inicio.year + '-' + this.model_inicio.month + '-' + this.model_inicio.day;
    var hora = this.time_inicio.hour + ':' + this.time_inicio.minute + ':' + this.time_inicio.second;
    this.mensajeLocal = '';

    if (this.time_inicio.hour >= 8 && this.time_inicio.hour <= 16) {
      if (this.model_inicio.year >= fechaactual.getFullYear() &&
        this.model_inicio.month >= fechaactual.getMonth() &&
        this.model_inicio.day >= fechaactual.getDate()) {

        const modActividad = {
          idActividadProgramada: event.id,
          fecha: fecha,
          hora: hora,
          //  duracion: (event.end.getTime() - event.start.getTime()) / 60000,
        };
        this.repository.modificarActividad(modActividad);
      }
      else
        this.mensajeLocal = '¡Fecha no valida!.';
    } else
      this.mensajeLocal = 'Solo puede prograrmar Actividades de 8:00 - 16:00';
  }
  deleteActividad(event: CalendarEvent) {
    this.repository.deleteActividad(event.id);
  }
}
