import { Injectable } from "@angular/core";
import { CalendarEvent } from "angular-calendar";
import { addMinutes } from "date-fns";
import { Subject } from "rxjs";
import { DataSourceService } from "../dataSource.service";
import { Actividad, AprendizajeEsperado, AreaFormacion } from "./actividad.model";

const colors: any = {
  1: {//red
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  2: {//blue
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  3: {//yellow
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Injectable()
export class ActividadRepository {
  /**Valores para el calendario de actividades**/
  private events: CalendarEvent[] = [];
  refresh: Subject<any> = new Subject();

  /**Valores para el crud de actividades**/
  private actividades: Actividad[];
  private actividad: Actividad;
  private areasFormacion: AreaFormacion[];
  private aprendizajeEsperado: AprendizajeEsperado[];

  private mensaje: string;
  private tipoMensaje: string;
  private ubicacion: string;

  constructor(
    private datasource: DataSourceService,
  ) {
    this.datasource.getActividadesProgramadas().subscribe(data => {
      this.setEvents(data);
    });

    this.datasource.getActividades().subscribe(data => {
      this.actividades = data;
    });

    this.datasource.getAreaFormacion().subscribe((data) => {
      this.areasFormacion = data;
    });

    this.datasource.getAprendizajeEsperado(1).subscribe((data) => {
      this.aprendizajeEsperado = data;
    });
  }

  getEventsCalendario(): CalendarEvent[] {
    return this.events;
  }

  getRefresh(): Subject<any> {
    return this.refresh;
  }

  getAprendizajeEsperadoByAreaFormacion(idAreaFormacion) {
    this.datasource.getAprendizajeEsperado(idAreaFormacion).subscribe((data) => {
      this.aprendizajeEsperado = data;
    })
  }

  getActiviad(): Actividad {
    return this.actividad;
  }

  getActiviades(): Actividad[] {
    return this.actividades;
  }

  getAreaFormacion(): AreaFormacion[] {
    return this.areasFormacion;
  }

  getAprendizajeEsperado(): AprendizajeEsperado[] {
    return this.aprendizajeEsperado;
  }

  getMensaje(): string {
    return this.mensaje;
  }
  getTipoMensaje(): string {
    return this.tipoMensaje;
  }
  getUbicacion(): string {
    return this.ubicacion;
  }

  insterActividad(actividad: FormData) {
    this.datasource.insertActividad(actividad).subscribe((data) => {
      if (data['success']) {
        this.mensaje = data['mensaje'];
        this.tipoMensaje = 'alert-success';
      } else {
        this.mensaje = data['mensaje'];
        this.tipoMensaje = 'alert-danger';
      }
    });
  }

  programarActividad(valor: any): void {
    this.datasource.programrActividad(valor).subscribe(data => {
      if (data['success']) {
        this.mensaje = data['mensaje'];
        this.tipoMensaje = 'alert-success';
        this.ubicacion = 'p';
      } else {
        this.mensaje = data['mensaje'];
        this.tipoMensaje = 'alert-danger';
        this.ubicacion = 'p';
      }

      this.datasource.getActividadesProgramadas().subscribe(data => {
        this.setEvents(data);
      });
    });
  }

  modificarActividad(valor: any): void {
    this.datasource.modificarActividad(valor).subscribe(data => {
      if (data['success']) {
        this.mensaje = data['mensaje'];
        this.tipoMensaje = 'alert-success';
        this.ubicacion = 'c';
      } else {
        this.mensaje = data['mensaje'];
        this.tipoMensaje = 'alert-danger';
        this.ubicacion = 'c';
      }

      this.datasource.getActividadesProgramadas().subscribe(data => {
        this.setEvents(data);
      });
    });
  }

  deleteActividad(id: any): void {
    this.datasource.deleteActividad(id).subscribe(data => {
      if (data['success']) {
        this.mensaje = data['mensaje'];
        this.tipoMensaje = 'alert-success';
        this.ubicacion = 'c';
      } else {
        this.mensaje = data['mensaje'];
        this.tipoMensaje = 'alert-danger';
        this.ubicacion = 'c';
      }

      this.datasource.getActividadesProgramadas().subscribe(data => {
        this.setEvents(data);
      });
    });
  }

  setEvents(data: any) {
    this.events = [];
    data.forEach(a => {
      this.events = [
        ...this.events,
        {
          id: a.idActividadProgramada,
          title: a.nombrePlanTrabajo,
          start: new Date(a.fecha + ' ' + a.hora),
          end: addMinutes(new Date(a.fecha + ' ' + a.hora), a.duracionMinutos),
          color: colors[Math.floor(Math.random() * 3) + 1],
          draggable: false,
          resizable: {
            beforeStart: false,
            afterEnd: false,
          },
        },
      ];
    });
    this.refresh.next();
  }
}