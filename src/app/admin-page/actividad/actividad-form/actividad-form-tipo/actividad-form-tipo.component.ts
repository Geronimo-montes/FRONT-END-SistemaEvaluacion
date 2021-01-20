import { Component, OnInit } from '@angular/core';
import { Actividad } from 'src/app/model/actividad/actividad.model';
import { NewActividadRepository } from 'src/app/model/actividad/newActividad.repository';
import { ActividadFormComponent } from '../actividad-form.component';

@Component({
  selector: 'app-actividad-form-tipo',
  templateUrl: './actividad-form-tipo.component.html',
  styleUrls: ['./actividad-form-tipo.component.css']
})
export class ActividadFormTipoComponent implements OnInit {

  constructor(
    private newActividadRepository: NewActividadRepository,
    private padre: ActividadFormComponent,
  ) { }

  ngOnInit(): void { }

  get newActividad(): Actividad {
    return this.newActividadRepository.getNewActividad();
  }

  setTipoActividad(tipo: string) {
    this.newActividadRepository.tipoActividad = tipo;
    this.padre.next();
  }
}
