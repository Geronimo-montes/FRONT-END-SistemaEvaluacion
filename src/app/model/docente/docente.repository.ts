import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { Docente } from "./docente.model";
import { DataSourceService } from "../dataSource.service";

@Injectable()
export class DocenteRepository implements OnInit, OnDestroy {
  private docente: Docente;
  private mensaje: string;
  private tipoMensaje: string;
  private formDestino: string; /*d: docente | u: credenciales | p: perfil*/

  constructor(
    private datasource: DataSourceService,
  ) {
    this.datasource.getDocenteById().subscribe((data) => {
      this.docente = <Docente>data[0];
    });
  }

  ngOnInit() { }
  ngOnDestroy() {
    this.docente = null;
    this.mensaje = null;
    this.tipoMensaje = null;
    this.formDestino = null;
  }

  getDocente(): Docente {
    return this.docente;
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

  updateDocnete(docente: any) {
    this.datasource.updateDocenteById(docente).subscribe((data) => {
      if (data['success']) {
        this.docente = <Docente>data['data'][0];
        this.mensaje = data['mensaje'];
        this.tipoMensaje = 'alert-success';
      } else {
        this.mensaje = data['mensaje'];
        this.tipoMensaje = 'alert-danger';
      }
      this.formDestino = data['destino'];
    });
  }

  updatePerfil(perfil: any) {
    this.datasource.updatePerfil(perfil).subscribe((data) => {
      this.tipoMensaje = (data['success']) ? 'alert-success' : 'alert-danger';
      this.mensaje = data['mensaje'];
      this.formDestino = data['destino'];
    });
  }
}