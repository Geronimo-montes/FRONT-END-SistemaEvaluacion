import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actividad } from "../actividad/actividad.model";
import { DataSourceService } from "../dataSource.service";
import { Alumno, Comentario } from "./alumno.model";

@Injectable()
export class AlumnoUserReporsitory {
  private alumno: Alumno;//datos alumno
  private actividades: any[]; //actividades pendientes
  private actividadSelected: Actividad;
  private comentarios: Comentario[];

  private mensaje: string;
  private tipoMensaje: string;
  private formDestino: string; /*d: docente | u: credenciales | p: perfil*/

  constructor(
    private datasource: DataSourceService,
    private router: Router,
  ) {
    this.datasource.getAlumnoById().subscribe((data) => {
      this.alumno = data;
    });
    datasource.getActividadesAlumno().subscribe((data) => {
      this.actividades = data;
    });
  }

  getAlumno(): Alumno {
    return this.alumno;
  }
  getActividadSelected(): Actividad {
    return this.actividadSelected;
  }
  getActividades(): any {
    return this.actividades;
  }
  getComentarios(): Comentario[] {
    return this.comentarios;
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
      this.tipoMensaje = (data['success']) ? 'alert-success' : 'alert-danger';
      this.mensaje = data['mensaje'];
      this.formDestino = data['destino'];
    });
  }
}