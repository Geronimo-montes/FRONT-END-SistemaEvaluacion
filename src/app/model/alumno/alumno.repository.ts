import { Injectable } from "@angular/core";
import { DataSourceService } from "../dataSource.service";
import { NotificacionService } from "../notificacion.service";
import { Alumno } from "./alumno.model";

@Injectable()
export class AlumnoRepository {
  private alumnos: Alumno[];
  private alumnoSeleccionado: Alumno;

  constructor(
    private datasource: DataSourceService,
    private notificacion: NotificacionService,
  ) {
    this.datasource.getAlumnos('a', '3', 'v').subscribe((data) => {
      this.alumnos = data;
      this.alumnoSeleccionado = data[0];
    });
  }

  getAlumnos(): Alumno[] {
    return this.alumnos;
  }

  setalumnoSeleccionado(alumno: Alumno): void {
    this.alumnoSeleccionado = alumno;
  }

  getalumnoSeleccionado(): Alumno {
    return this.alumnoSeleccionado;
  }

  updateAlumno(alumno: FormData): void {
    this.datasource.updateAlumnoById(alumno).subscribe((data) => {
      this.notificacion.titulo = data['titulo'];
      this.notificacion.mensaje = data['mensaje'];
      this.notificacion.tipo = data['tipo'];
      this.notificacion.showMensaje();

      if (data['success'])
        this.alumnoSeleccionado = <Alumno>data['data'];

      this.datasource.getAlumnos('a', '3', 'v').subscribe((data) => {
        this.alumnos = data;
      });
    });
  }
}