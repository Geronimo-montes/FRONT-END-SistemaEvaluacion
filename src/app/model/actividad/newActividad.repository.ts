import { Injectable } from "@angular/core";
import { DataSourceService } from "../dataSource.service";
import { NotificacionService } from "../notificacion.service";
import { Actividad, AprendizajeEsperado, Evidencia } from "./actividad.model";

@Injectable()
export class NewActividadRepository {
  private newActividad: Actividad = new Actividad();
  private _perfil: string = 'assets/img/theme/team-4-800x800.jpg';
  public areas: string[];

  constructor(
    private datasource: DataSourceService,
    private notificacion: NotificacionService,
  ) { }

  getNewActividad(): Actividad {
    return this.newActividad;
  }
  getPerfil(): string {
    return this._perfil;
  }
  getAreas(): string[] {
    return this.areas;
  }

  set _areas(value: string) {
    if (this.areas === undefined) {
      this.areas = new Array(1);
      this.areas[0] = value;
    } else {
      let repetido = false;
      this.areas.forEach(function (a: string, i: number) {
        repetido = (a === value) ? true : false;
      });
      if (!repetido) {
        this.areas.push(value);
      }
    }
  }

  set nombre(nombre: string) { this.newActividad.nombre = nombre }
  set duracionMinutos(duracionMinutos: number) { this.newActividad.duracionMinutos = duracionMinutos }
  set tipoActividad(tipoActividad: string) { this.newActividad.tipoActividad = tipoActividad }
  set idAprendizajeEsperado(aprendizajeEsperado: AprendizajeEsperado) {
    if (this.newActividad.idAprendizajeEsperado === undefined) {
      this.newActividad.idAprendizajeEsperado = new Array(1);
      this.newActividad.idAprendizajeEsperado[0] = aprendizajeEsperado;
    } else {
      let repetido = false;
      this.newActividad.idAprendizajeEsperado.forEach(function (value: AprendizajeEsperado, index: Number) {
        if (value.idAprendizajeEsperado === aprendizajeEsperado.idAprendizajeEsperado) {
          repetido = true;
        }
      });
      if (!repetido) {
        this.newActividad.idAprendizajeEsperado.push(aprendizajeEsperado);
      }
    }
  }
  deleteidAprendizajeEsperado(id: number) {
    if (this.newActividad.idAprendizajeEsperado != undefined) {
      this.newActividad.idAprendizajeEsperado =
        this.newActividad.idAprendizajeEsperado.
          filter(
            item => item.idAprendizajeEsperado != id);
    }
  }
  set idDiagnostico(idDiagnostico: number) { this.newActividad.idDiagnostico = idDiagnostico }
  set inicio(inicio: string) { this.newActividad.inicio = inicio }
  set desarrollo(desarrollo: string) { this.newActividad.desarrollo = desarrollo }
  set cierre(cierre: string) { this.newActividad.cierre = cierre }
  set recursos(recursos: string) { this.newActividad.recursos = recursos }
  set evaluacion(evaluacion: string) { this.newActividad.evaluacion = evaluacion }
  set evidencia(evidencia: Evidencia) {
    if (this.newActividad.evidencia === undefined) {
      this.newActividad.evidencia = new Array(1);
      this.newActividad.evidencia[0] = evidencia;
      this.newActividad.evidencia[0].idEvidencia = 1;
    } else {
      let repetido = false;
      this.newActividad.evidencia.forEach(function (value: Evidencia, index: Number) {
        if (value.nombreEvidencia === evidencia.nombreEvidencia) {
          repetido = true;
        }
      });
      if (!repetido) {
        this.newActividad.evidencia.push(evidencia);
        let id = this.newActividad.evidencia.length;
        this.newActividad.evidencia[id - 1].idEvidencia = id;
      }
    }
  }
  deleteEvidencia(id: number) {
    if (this.newActividad.evidencia != undefined) {
      this.newActividad.evidencia =
        this.newActividad.evidencia.
          filter(
            item => item.idEvidencia != id);
    }
  }
  set perfil(ruta: string) { this._perfil = ruta; }

  getValidaData(): boolean {
    if (this.newActividad.nombre != undefined &&
      this.newActividad.duracionMinutos != undefined &&
      this.newActividad.tipoActividad != undefined &&
      this.newActividad.idAprendizajeEsperado != undefined &&
      this.newActividad.evidencia != undefined)
      return true;
    else
      return false;
  }

  insertNewActividad() {
    this.datasource.insertActividad(JSON.stringify(this.newActividad)).subscribe(data => {
      this.notificacion.titulo = data['titulo'];
      this.notificacion.mensaje = data['mensaje'];
      this.notificacion.tipo = data['tipo'];
      this.notificacion.showMensaje();
    });
    this.newActividad = new Actividad();
  }
}