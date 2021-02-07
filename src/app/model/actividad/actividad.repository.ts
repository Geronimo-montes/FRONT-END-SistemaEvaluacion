import { Injectable } from "@angular/core";
import { CalendarEvent } from "angular-calendar";
import { addMinutes } from "date-fns";
import { Subject } from "rxjs";
import { DataSourceService } from "../dataSource.service";
import { NotificacionService } from "../notificacion.service";
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
  private _actividadSelected: Actividad;
  private areasFormacion: AreaFormacion[];
  private aprendizajeEsperado: AprendizajeEsperado[];

  constructor(
    private datasource: DataSourceService,
    private notificacion: NotificacionService,
  ) {
    this.datasource.getActividadesProgramadas().subscribe(data => {
      this.setEvents(data);
    });

    this.datasource.getActividades().subscribe(data => {
      this.actividades = data;
      this._actividadSelected = data[0];
    });

    this.datasource.getAreaFormacion().subscribe((data) => {
      this.areasFormacion = data;
    });

    this.datasource.getAprendizajeEsperado(1).subscribe((data) => {
      this.aprendizajeEsperado = data;
    });
  }

  /**Valores para el calendario */
  getEventsCalendario(): CalendarEvent[] {
    return this.events;
  }
  getRefresh(): Subject<any> {
    return this.refresh;
  }

  /**VAlores para el crud de actividades */
  cargarActividades() {
    this.datasource.getActividades().subscribe(data => {
      this.actividades = data;
      this._actividadSelected = data[0];
    });
  }

  getActiviades(): Actividad[] { return this.actividades; }
  get actividadSelected(): Actividad { return this._actividadSelected; }
  set actividadSelected(valor: Actividad) { this._actividadSelected = valor; }
  getAreaFormacion(): AreaFormacion[] { return this.areasFormacion; }
  getAprendizajeEsperado(): AprendizajeEsperado[] { return this.aprendizajeEsperado; }
  getAprendizajeEsperadoByAreaFormacion(idAreaFormacion) {
    this.datasource.getAprendizajeEsperado(idAreaFormacion).subscribe((data) => {
      this.aprendizajeEsperado = data;
    })
  }


  insterActividad(actividad: FormData) {
    this.datasource.insertActividad(actividad).subscribe((data) => {
      this.notificacion.titulo = data['titulo'];
      this.notificacion.mensaje = data['mensaje'];
      this.notificacion.tipo = data['tipo'];
      this.notificacion.showMensaje();
    });
  }

  programarActividad(valor: any): void {
    this.datasource.programrActividad(valor).subscribe(data => {
      this.notificacion.titulo = data['titulo'];
      this.notificacion.mensaje = data['mensaje'];
      this.notificacion.tipo = data['tipo'];
      this.notificacion.showMensaje();

      this.datasource.getActividadesProgramadas().subscribe(data => {
        this.setEvents(data);
      });
    });
  }

  modificarActividad(valor: any): void {
    this.datasource.modificarActividad(valor).subscribe(data => {
      this.notificacion.titulo = data['titulo'];
      this.notificacion.mensaje = data['mensaje'];
      this.notificacion.tipo = data['tipo'];
      this.notificacion.showMensaje();

      this.datasource.getActividadesProgramadas().subscribe(data => {
        this.setEvents(data);
      });
    });
  }

  deleteActividad(id: any): void {
    this.datasource.deleteActividad(id).subscribe(data => {
      this.notificacion.titulo = data['titulo'];
      this.notificacion.mensaje = data['mensaje'];
      this.notificacion.tipo = data['tipo'];
      this.notificacion.showMensaje();

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
          actions: [
            {
              label: `<span class="ml-2">${a.hora} a ${addMinutes(new Date(a.fecha + ' ' + a.hora), a.duracionMinutos).toTimeString().slice(0, 8)}</span>`,
              a11yLabel: 'Horario',
              onClick: ({ event }: { event: CalendarEvent; }): void => void 0,
            }
          ],
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