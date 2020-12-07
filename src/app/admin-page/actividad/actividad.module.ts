import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadFichaComponent } from './actividad-ficha/actividad-ficha.component';
import { ActividadTableComponent } from './actividad-table/actividad-table.component';
import { ActividadFormComponent } from './actividad-form/actividad-form.component';
import { ModelModule } from 'src/app/model/model.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActividadRoutingModule } from './actividad-routing.module';
import { ActividadGuard } from './actividad.guard';



@NgModule({
  declarations: [
    ActividadFichaComponent, 
    ActividadTableComponent, 
    ActividadFormComponent
  ],
  imports: [
    ModelModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CommonModule,
    ActividadRoutingModule,
  ],
  providers: [
    ActividadGuard
  ]
})
export class ActividadModule { }
