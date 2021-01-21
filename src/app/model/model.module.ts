import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { DocenteRepository } from "./docente/docente.repository";
import { DataSourceService } from "./dataSource.service";
import { AlumnoRepository } from "./alumno/alumno.repository";
import { ActividadRepository } from "./actividad/actividad.repository";
import { NewActividadRepository } from "./actividad/newActividad.repository";
import { ActividadProgramadaRepository } from "./actividad/actividad-programada.repository";
import { UserRepository } from "./users/user.repository";

@NgModule({
	imports: [
		HttpClientModule,
	],
	providers: [
		DataSourceService,
		UserRepository,
		DocenteRepository,
		AlumnoRepository,
		ActividadRepository,
		NewActividadRepository,
		ActividadProgramadaRepository,
	]
})
export class ModelModule { }