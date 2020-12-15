import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadFichaComponent } from './actividad-ficha/actividad-ficha.component';
import { ActividadTableComponent } from './actividad-table/actividad-table.component';
import { ActividadFormComponent } from './actividad-form/actividad-form.component';
import { ModelModule } from 'src/app/model/model.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActividadRoutingModule } from './actividad-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminGuard } from '../admin.guard';
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
    Ng2SearchPipeModule,
  ],
  providers: [
    AdminGuard,
  ]
})
export class ActividadModule { }
