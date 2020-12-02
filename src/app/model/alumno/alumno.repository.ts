import { Injectable } from "@angular/core";
import { DataSourceService } from "../dataSource.service";
import { Alumno } from "./alumno.model";

@Injectable()
export class AlumnoRepository {
  private alumnos: Alumno[];
  constructor(private datasource: DataSourceService) {
    this.datasource.getAlumnos('a','3','v').subscribe((data) => {
      this.alumnos = data;
    });
  }

  getAlumnos(): Alumno[] {
    return this.alumnos;
  }
}