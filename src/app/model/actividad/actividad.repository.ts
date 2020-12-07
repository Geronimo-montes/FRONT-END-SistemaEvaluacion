import { Injectable } from "@angular/core";
import { DataSourceService } from "../dataSource.service";
import { Actividad, AprendizajeEsperado, AreaFormacion } from "./aformacion.model";

@Injectable()
export class ActividadRepository {
  private areasFormacion: AreaFormacion[];
  private aprendizajeEsperado: AprendizajeEsperado[];
  constructor(private datasource: DataSourceService) {
    this.datasource.getAreaFormacion().subscribe((data) => {
      this.areasFormacion = data;
    })
  }

  getAprendizajeEsperadoByAreaFormacion(idAreaFormacion) {
    this.datasource.getAprendizajeEsperado(idAreaFormacion).subscribe((data) => {
      this.aprendizajeEsperado = data;
    })
  }

  getAreaFormacion(): AreaFormacion[] {
    return this.areasFormacion;
  }
  
  getAprendizajeEsperado(): AprendizajeEsperado[] {
    return this.aprendizajeEsperado;
  }

  insterActividad(actividad: FormData) {
    this.datasource.insertActividad(actividad).subscribe((data) => {
      console.log(data);
    })
  }
}