import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FichaInformacionComponent } from './ficha-informacion/ficha-informacion.component';
import { ModelModule } from 'src/app/model/model.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile-base/user-profile.component';
import { FormDocenteComponent } from './form-docente/form-docente.component';
import { FormUserComponent } from './form-user/form-user.component';
import { AdminGuard } from '../admin.guard';
@NgModule({
  declarations: [
    UserProfileComponent,
    FichaInformacionComponent,
    FormDocenteComponent,
    FormUserComponent,
  ],
  imports: [
    ModelModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CommonModule,
    UserProfileRoutingModule,
  ],
  providers: [
    AdminGuard,
  ]
})
export class UserProfileModule { }
