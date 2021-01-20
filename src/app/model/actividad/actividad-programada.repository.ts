import { Injectable } from "@angular/core";
import { DataSourceService } from "../dataSource.service";
import { ActividadProgramada } from "./actividad.model";

@Injectable()
export class ActividadProgramadaRepository {
  private actividadesProgramadas: ActividadProgramada[];

  constructor(
    private datasource: DataSourceService,
  ) {
    this.datasource.getActividadesProgramadas().subscribe(data => {
      this.actividadesProgramadas = data;
    });
  }

  getActividadesProgramadas(): ActividadProgramada[] {
    return this.actividadesProgramadas;
  }

}