import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { Actividad } from "./aformacion.model";

@Injectable()
export class NewActividadRepository implements OnInit, OnDestroy {
  private newActividad: Actividad = new Actividad();
  private _perfil: string = 'assets/img/theme/team-4-800x800.jpg';
  constructor() { }
  ngOnInit() { }
  ngOnDestroy() { }

  getNewActividad(): Actividad {
    return this.newActividad;
  }

  getPerfil(): string {
    return this._perfil;
  }

  set nombre(nombre: string) { this.newActividad.nombre = nombre }
  set duracionMinutos(duracionMinutos: number) { this.newActividad.duracionMinutos = duracionMinutos }
  set tipoActividad(tipoActividad: string) { this.newActividad.tipoActividad = tipoActividad }
  set idAprendizajeEsperado(idAprendizajeEsperado: number) { this.newActividad.idAprendizajeEsperado = idAprendizajeEsperado }
  set idDiagnostico(idDiagnostico: number) { this.newActividad.idDiagnostico = idDiagnostico }
  set inicio(inicio: string) { this.newActividad.inicio = inicio }
  set desarrollo(desarrollo: string) { this.newActividad.desarrollo = desarrollo }
  set cierre(cierre: string) { this.newActividad.cierre = cierre }
  set recursos(recursos: string) { this.newActividad.recursos = recursos }
  set evaluacion(evaluacion: string) { this.newActividad.evaluacion = evaluacion }
  set fechaModificacion(fechaModificacion: string) { this.newActividad.fechaModificacion = fechaModificacion }
  set estatus(estatus: string) { this.newActividad.estatus = estatus }
  set perfil(ruta: string) { this._perfil = ruta; }
}