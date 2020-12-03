import { Injectable } from "@angular/core";
import { DataSourceService } from "../dataSource.service";
import { Alumno } from "./alumno.model";

@Injectable()
export class AlumnoRepository {
  private alumnos: Alumno[];
  private alumnoSeleccionado: Alumno;
  constructor(private datasource: DataSourceService) {
    this.datasource.getAlumnos('a','3','v').subscribe((data) => {
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
}