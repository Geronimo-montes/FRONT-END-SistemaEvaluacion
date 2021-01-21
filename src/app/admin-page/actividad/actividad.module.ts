import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ModelModule } from 'src/app/model/model.module';
import { AdminGuard } from '../admin.guard';
import { ActividadFichaComponent } from './actividad-ficha/actividad-ficha.component';
import { ActividadTableComponent } from './actividad-table/actividad-table.component';
import { ActividadFormComponent } from './actividad-form/actividad-form.component';
import { ActividadRoutingModule } from './actividad-routing.module';
import { ActividadBaseComponent } from './actividad-base/actividad-base.component';
import { ActividadFormTipoComponent } from './actividad-form/actividad-form-tipo/actividad-form-tipo.component';
import { ActividadFormNombreComponent } from './actividad-form/actividad-form-nombre/actividad-form-nombre.component';
import { ActividadFormAprendizajeDiagnosticoComponent } from './actividad-form/actividad-form-aprendizaje-diagnostico/actividad-form-aprendizaje-diagnostico.component';
import { ActividadFormEvidenciaComponent } from './actividad-form/actividad-form-evidencia/actividad-form-evidencia.component';
import { ActividadFormInstrucionesComponent } from './actividad-form/actividad-form-instruciones/actividad-form-instruciones.component';

@NgModule({
  imports: [
    ActividadRoutingModule,
    ModelModule,
    NgbModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,

    CommonModule,
    FormsModule,
    NgbModalModule,
  ],
  declarations: [
    ActividadFichaComponent,
    ActividadTableComponent,
    ActividadFormComponent,
    ActividadBaseComponent,
    ActividadFormTipoComponent,
    ActividadFormNombreComponent,
    ActividadFormAprendizajeDiagnosticoComponent,
    ActividadFormEvidenciaComponent,
    ActividadFormInstrucionesComponent,
  ],
  providers: [
    AdminGuard,
  ]
})
export class ActividadModule { }
