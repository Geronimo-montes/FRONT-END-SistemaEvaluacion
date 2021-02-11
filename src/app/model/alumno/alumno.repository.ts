import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { DataSourceService } from "../dataSource.service";
import { NotificacionService } from "../notificacion.service";
import { Alumno } from "./alumno.model";

@Injectable()
export class AlumnoRepository implements OnInit, OnDestroy {
  private alumnos: Alumno[];
  private alumnoSeleccionado: Alumno;

  constructor(
    private datasource: DataSourceService,
    private notificacion: NotificacionService,
  ) { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.alumnoSeleccionado = null;
    this.alumnos = null;
  }

  getAlumnos(): Alumno[] { return this.alumnos; }

  getalumnoSeleccionado(): Alumno { return this.alumnoSeleccionado; }

  setalumnoSeleccionado(alumno: Alumno): void { this.alumnoSeleccionado = alumno; }

  setListaAlumnos() {
    this.datasource.getAlumnos().subscribe((data) => {
      this.alumnos = data;
      this.alumnoSeleccionado = data[0];
    });
  }

  updateAlumno(alumno: FormData): void {
    this.datasource.updateAlumnoById(alumno).subscribe((data) => {
      this.notificacion.titulo = data['titulo'];
      this.notificacion.mensaje = data['mensaje'];
      this.notificacion.tipo = data['tipo'];
      this.notificacion.showMensaje();

      if (data['success'])
        this.alumnoSeleccionado = <Alumno>data['data'][0];

      this.datasource.getAlumnos().subscribe((data) => {
        this.alumnos = data;
      });
    });
  }
}