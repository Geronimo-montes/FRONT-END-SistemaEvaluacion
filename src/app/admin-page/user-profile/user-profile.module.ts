import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelModule } from 'src/app/model/model.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { AdminGuard } from '../../components/guards/admin.guard';
import { FichaInformacionComponent } from './ficha-informacion/ficha-informacion.component';
import { FormDocenteComponent } from './form-docente/form-docente.component';
import { FormUserComponent } from './form-user/form-user.component';
import { UserProfileComponent } from './user-profile-base/user-profile.component';

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
