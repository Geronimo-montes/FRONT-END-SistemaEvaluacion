import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModelModule } from 'src/app/model/model.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrudAlumnosRoutingModule } from './crud-alumnos-routing.module';
import { TableAlumnoComponent } from './table-alumno/table-alumno.component';
import { CrudAlumnosComponent } from './crud-alumnos/crud-alumnos.component';
import { ProfilealumnoComponent } from './profilealumno/profilealumno.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminGuard } from '../../components/guards/admin.guard';
@NgModule({
  declarations: [
    CrudAlumnosComponent,
    TableAlumnoComponent,
    ProfilealumnoComponent,
  ],
  imports: [
    ModelModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CommonModule,
    CrudAlumnosRoutingModule,
    Ng2SearchPipeModule,
  ],
  providers: [
    AdminGuard,
  ]
})
export class CrudAlumnosModule { }
