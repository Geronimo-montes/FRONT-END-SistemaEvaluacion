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
  ) { }

  ngOnInit() { }

  ngOnDestroy() {
    this.docente = null;
  }

  getDocente(): Docente { return this.docente; }

  setDocente(): void {
    this.datasource.getDocenteById().subscribe((data) => {
      this.docente = data;
    });
  }

  updateDocnete(docente: any) {
    this.datasource.updateDocenteById(docente).subscribe((data) => {
      this.notificacion.titulo = data['titulo'];
      this.notificacion.mensaje = data['mensaje'];
      this.notificacion.tipo = data['tipo'];
      this.notificacion.showMensaje();

      if (data['success'])
        this.docente = data['data'];
    });
  }
}