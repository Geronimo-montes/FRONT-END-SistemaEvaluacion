import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { ComponentsModule } from '../components/components.module';
import { AlumnoPageRoutingModule } from './alumno-page-routing.module';
import { AlumnoBaseComponent } from './alumno-base/alumno-base.component';
@NgModule({
  imports: [
    ModelModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    CommonModule,
    AlumnoPageRoutingModule,
  ],
  declarations: [
    AlumnoBaseComponent,
  ],
})
export class AlumnoPageModule { }
