import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoUserProfileComponent } from './alumno-user-profile/alumno-user-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModelModule } from 'src/app/model/model.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlumnoUserRoutingModule } from './alumno-user-routing.module';
import { AlumnoGuard } from 'src/app/components/guards/alumno.guard';
import { AlumnoUserBaseComponent } from './alumno-user-base/alumno-user-base.component';
import { AlumnoUserHomeComponent } from './alumno-user-home/alumno-user-home.component';



@NgModule({
  declarations: [
    AlumnoUserProfileComponent,
    AlumnoUserBaseComponent,
    AlumnoUserHomeComponent,
  ],
  imports: [
    CommonModule,
    ModelModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CommonModule,
    AlumnoUserRoutingModule,
  ],
  providers: [
    AlumnoGuard
  ]
})
export class AlumnoUserModule { }
