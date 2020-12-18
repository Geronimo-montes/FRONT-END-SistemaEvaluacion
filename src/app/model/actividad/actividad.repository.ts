import { Injectable } from "@angular/core";
import { DataSourceService } from "../dataSource.service";
import { Actividad, AprendizajeEsperado, AreaFormacion } from "./aformacion.model";

@Injectable()
export class ActividadRepository {
  private actividades: Actividad[];
  private areasFormacion: AreaFormacion[];
  private aprendizajeEsperado: AprendizajeEsperado[];
  private mensaje: string;
  private tipoMensaje: string;

  constructor(private datasource: DataSourceService) {
    this.datasource.getActividades().subscribe(data => {
      this.actividades = data;
    });

    this.datasource.getAreaFormacion().subscribe((data) => {
      this.areasFormacion = data;
    });

    this.datasource.getAprendizajeEsperado(1).subscribe((data) => {
      this.aprendizajeEsperado = data;
    })
  }

  getAprendizajeEsperadoByAreaFormacion(idAreaFormacion) {
    this.datasource.getAprendizajeEsperado(idAreaFormacion).subscribe((data) => {
      this.aprendizajeEsperado = data;
    })
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

  insterActividad(actividad: FormData) {
    this.datasource.insertActividad(actividad).subscribe((data) => {
      if (data['success']) {
        this.mensaje = data['mensaje'];
        this.tipoMensaje = 'alert-success';
      } else {
        this.mensaje = data['mensaje'];
        this.tipoMensaje = 'alert-danger';
      }
    })
  }
}