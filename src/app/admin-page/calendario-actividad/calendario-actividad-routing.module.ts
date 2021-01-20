import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../admin.guard';
import { CalendarioBaseComponent } from './calendario-base/calendario-base.component';
import { CalendarioComponent } from './calendario/calendario.component';

const routes: Routes = [
  {
    path: 'plantrabajo',
    component: CalendarioBaseComponent,
    children: [
      {
        path: '',
        redirectTo: 'calendario',
      }, {
        path: 'calendario',
        component: CalendarioComponent,
        canActivate: [AdminGuard],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CalendarioActividadRoutingModule { }
