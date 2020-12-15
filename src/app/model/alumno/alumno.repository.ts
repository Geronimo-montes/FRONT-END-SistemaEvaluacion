import { Injectable } from "@angular/core";
import { DataSourceService } from "../dataSource.service";
import { Alumno } from "./alumno.model";

@Injectable()
export class AlumnoRepository {
  private alumnos: Alumno[];
  private alumnoSeleccionado: Alumno;
  private mensaje: string;
  private tipoMensaje: string;
  private formDestino: string; /*d: docente | u: credenciales | p: perfil*/

  constructor(private datasource: DataSourceService) {
    this.datasource.getAlumnos('a', '3', 'v').subscribe((data) => {
      this.alumnos = data;
      this.alumnoSeleccionado = data[0];
    });
  }

  getAlumnos(): Alumno[] {
    return this.alumnos;
  }

  getMensaje(): string {
    return this.mensaje;
  }

  getTipoMensaje(): string {
    return this.tipoMensaje;
  }

  getFormDestino(): string {
    return this.formDestino;
  }

  setalumnoSeleccionado(alumno: Alumno): void {
    this.alumnoSeleccionado = alumno;
  }

  getalumnoSeleccionado(): Alumno {
    return this.alumnoSeleccionado;
  }

  updateAlumno(alumno: FormData): void {
    this.datasource.updateAlumnoById(alumno).subscribe((data) => {
      if (data['success']) {
        this.alumnoSeleccionado = <Alumno>data['data'][0];
        this.mensaje = data['mensaje'];
        this.tipoMensaje = 'alert-success';
      } else {
        this.mensaje = data['mensaje'];
        this.tipoMensaje = 'alert-danger';
      }
      this.formDestino = data['destino'];
      this.datasource.getAlumnos('a', '3', 'v').subscribe((data) => {
        this.alumnos = data;
      });
    });
  }
}