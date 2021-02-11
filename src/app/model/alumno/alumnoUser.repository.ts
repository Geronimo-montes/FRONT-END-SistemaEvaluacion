import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Actividad } from "../actividad/actividad.model";
import { DataSourceService } from "../dataSource.service";
import { NotificacionService } from "../notificacion.service";
import { Alumno, Comentario } from "./alumno.model";

@Injectable()
export class AlumnoUserReporsitory implements OnInit, OnDestroy {
  private alumno: Alumno;//datos alumno
  private actividades: any[]; //actividades pendientes
  private actividadSelected: Actividad;
  private comentarios: Comentario[];

  constructor(
    private datasource: DataSourceService,
    private router: Router,
    private notificacion: NotificacionService,
  ) { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.alumno = null;
    this.actividades = null;
    this.actividadSelected = null;
    this.comentarios = null;
  }

  getAlumno(): Alumno { return this.alumno; }

  getActividadSelected(): Actividad { return this.actividadSelected; }

  getActividades(): any { return this.actividades; }

  getComentarios(): Comentario[] { return this.comentarios; }

  setUserAlumno(idAlumno?: string): void {
    this.datasource.getUserAlumnoById(idAlumno).subscribe((data) => {
      this.alumno = data;
    });
  }

  setActividadesByAlumno(idAlumno?: string): void {
    this.datasource.getActividadesAlumno(idAlumno).subscribe((data) => {
      console.log(data);
      this.actividades = data;
    });
  }

  setActividadSeleted(id: number) {
    this.datasource.getActividadesAlumnoById(id).subscribe(data => {
      this.actividadSelected = data['actividad'];
      this.comentarios = data['comentarios'];
      this.router.navigateByUrl('useractividad');
    });
  }

  comentarActividad(valor: any) {
    this.datasource.insertComentarios(valor).subscribe(data => {
      this.comentarios = data;
    })
  }

  subirEvidencia(files: any, id: number) {
    this.datasource.subirEvidencia(files, id).subscribe((data) => {
      console.log(data);
      this.actividades = data['actividades'];

      this.notificacion.titulo = data['titulo'];
      this.notificacion.mensaje = data['mensaje'];
      this.notificacion.tipo = data['tipo'];
      this.notificacion.showMensaje();
    });
  }
}
