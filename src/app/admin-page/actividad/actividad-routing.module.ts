import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadTableComponent } from './actividad-table/actividad-table.component';
import { ActividadFormComponent } from './actividad-form/actividad-form.component';
import { ActividadFichaComponent } from './actividad-ficha/actividad-ficha.component';
import { AdminGuard } from '../admin.guard';
import { ActividadBaseComponent } from './actividad-base/actividad-base.component';
import { ActividadFormTipoComponent } from './actividad-form/actividad-form-tipo/actividad-form-tipo.component';
import { ActividadFormNombreComponent } from './actividad-form/actividad-form-nombre/actividad-form-nombre.component';
import { ActividadFormAprendizajeDiagnosticoComponent } from './actividad-form/actividad-form-aprendizaje-diagnostico/actividad-form-aprendizaje-diagnostico.component';

const routes: Routes = [
  {
    path: 'actividad',
    component: ActividadBaseComponent,
    children: [
      {
        path: '',
        redirectTo: 'table',
      }, {
        path: 'table',
        component: ActividadTableComponent,
        canActivate: [AdminGuard],
      }, {
        path: 'form',
        component: ActividadFormComponent,
        children: [
          {
            path: 'tipoactividad',
            component: ActividadFormTipoComponent,
            canActivate: [AdminGuard],
          }, {
            path: 'nombreactividad',
            component: ActividadFormNombreComponent,
            canActivate: [AdminGuard],
          }, {
            path: 'aprendizajediagnostico',
            component: ActividadFormAprendizajeDiagnosticoComponent,
            canActivate: [AdminGuard],
          }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActividadRoutingModule { }
