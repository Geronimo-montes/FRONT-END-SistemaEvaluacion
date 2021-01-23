import { Component } from '@angular/core';
import { NgbCalendar, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { ActividadRepository } from 'src/app/model/actividad/actividad.repository';
import { Actividad } from 'src/app/model/actividad/actividad.model';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-calendario-programar-actividad',
  templateUrl: './calendario-programar-actividad.component.html',
  styleUrls: ['./calendario-programar-actividad.component.css']
})
export class CalendarioProgramarActividadComponent {
  public NumRowPage: number = 4;
  public SelectedPage: number = 1;
  public primerControl: number = 1;
  public filtro: string = "";

  private time: NgbTimeStruct;
  private model: NgbDateStruct;
  public mensajeLocal: string;

  constructor(
    calendar: NgbCalendar,
    private repository: ActividadRepository,
  ) {
    this.model = calendar.getToday();
    this.time = { hour: new Date().getHours() + 1, minute: 0, second: 0 };
  }

  /**Actividades programadas */
  get events(): CalendarEvent[] {
    return this.repository.getEventsCalendario();
  }
  get actividadSelected(): Actividad {
    return this.repository.actividadSelected;
  }
  setActividadSelected(valor: Actividad) {
    this.repository.actividadSelected = valor;
  }
  /**Datos del mensaje */
  get mensaje(): string {
    return this.repository.getMensaje();
  }
  get tipoMensaje(): string {
    return this.repository.getTipoMensaje();
  }
  get ubicacion(): string {
    return this.repository.getUbicacion();
  }

  get actividades(): Actividad[] {
    let pageIndex = (this.SelectedPage - 1) * this.NumRowPage;
    let a = this.filtro;
    return this.repository
      .getActiviades()
      .filter(function (actividad) {
        return (
          actividad.nombre.toLocaleLowerCase().indexOf(a.toLocaleLowerCase()) >
          -1
        );
      })
      .slice(pageIndex, pageIndex + this.NumRowPage);
  }

  get NumberPage(): number {
    let a = this.filtro;
    return Math.ceil(
      this.repository.getActiviades().filter(function (actividad) {
        return (
          actividad.nombre.toLocaleLowerCase().indexOf(a.toLocaleLowerCase()) >
          -1
        );
      }).length / this.NumRowPage
    );
  }

  get controls(): number[] {
    let numeros: number[] = [];
    let inicio, fin;
    if (this.SelectedPage === 1) {
      inicio = this.primerControl - 1;
      fin = this.primerControl + 2;
    } else if (this.SelectedPage === this.NumberPage) {
      inicio = this.primerControl - 3;
      fin = this.primerControl + 1;
    } else {
      inicio = this.primerControl - 2;
      fin = this.primerControl + 1;
    }

    for (let index = inicio; index < fin; index++)
      if (index < this.NumberPage && index > -1)
        numeros.push(index + 1);
    return numeros;
  }

  changePage(page) {
    this.SelectedPage = page;
    this.primerControl = page;
  }

  changePrimerControl(control) {
    if (control < 0)
      this.primerControl = (this.primerControl > 2) ?
        this.primerControl + control :
        this.primerControl;
    else
      this.primerControl = (this.primerControl < this.NumberPage - 1) ?
        this.primerControl + control :
        this.primerControl;
  }

  programarNuevaActividad() {
    var fechaactual = new Date();
    var fecha = this.model.year + '-' + this.model.month + '-' + this.model.day;
    var hora = this.time.hour + ':' + this.time.minute + ':' + this.time.second;
    this.mensajeLocal = '';

    if (this.actividadSelected != undefined) {
      if (this.time.hour >= 8 && this.time.hour <= 16) {

        if (this.model.year >= fechaactual.getFullYear() &&
          this.model.month >= fechaactual.getMonth() &&
          this.model.day >= fechaactual.getDate()) {

          const actividad = {
            idPlanTrabajo: this.actividadSelected.idPlanTrabajo,
            fecha: fecha,
            hora: hora,
          }
          this.repository.programarActividad(actividad);
        }
        else
          this.mensajeLocal = '¡Fecha no valida!.';
      } else
        this.mensajeLocal = 'Solo puede prograrmar Actividades de 8:00 - 16:00';
    }
  }
}