import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelModule } from 'src/app/model/model.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileBaseComponent } from './profile-base/profile-base.component';
import { AlumnoGuard } from '../../components/guards/alumno.guard';
import { FormAlumnoComponent } from './profile-base/form-alumno/form-alumno.component';
import { FormUserComponent } from './profile-base/form-user/form-user.component';
import { FormFichaComponent } from './profile-base/form-ficha/form-ficha.component';
import { AlumnoActividadComponent } from './alumno-actividad/alumno-actividad.component';
import { ActividadDetalleComponent } from './alumno-actividad/actividad-detalle/actividad-detalle.component';
import { ActividadEvidenciaComponent } from './alumno-actividad/actividad-evidencia/actividad-evidencia.component';

@NgModule({
  declarations: [
    ProfileBaseComponent,
    FormAlumnoComponent,
    FormUserComponent,
    FormFichaComponent,
    AlumnoActividadComponent,
    ActividadDetalleComponent,
    ActividadEvidenciaComponent
  ],
  imports: [
    ModelModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CommonModule,
    ProfileRoutingModule,
  ],
  providers: [
    AlumnoGuard,
  ]
})
export class ProfileModule { }
