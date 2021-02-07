import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { Docente } from "./docente.model";
import { DataSourceService } from "../dataSource.service";
import { NotificacionService } from "../notificacion.service";

@Injectable()
export class DocenteRepository implements OnInit, OnDestroy {
  private docente: Docente;

  constructor(
    private datasource: DataSourceService,
    private notificacion: NotificacionService,
  ) {
    this.datasource.getDocenteById().subscribe((data) => {
      this.docente = <Docente>data[0];
    });
  }

  ngOnInit() { }
  ngOnDestroy() {
    this.docente = null;
  }

  getDocente(): Docente { return this.docente; }

  updateDocnete(docente: any) {
    this.datasource.updateDocenteById(docente).subscribe((data) => {
      this.notificacion.titulo = data['titulo'];
      this.notificacion.mensaje = data['mensaje'];
      this.notificacion.tipo = data['tipo'];
      this.notificacion.showMensaje();

      if (data['success'])
        this.docente = <Docente>data['data'][0];
    });
  }

  updatePerfil(perfil: any) {
    this.datasource.updatePerfil(perfil).subscribe((data) => {
      this.notificacion.titulo = data['titulo'];
      this.notificacion.mensaje = data['mensaje'];
      this.notificacion.tipo = data['tipo'];
      this.notificacion.showMensaje();
    });
  }
}