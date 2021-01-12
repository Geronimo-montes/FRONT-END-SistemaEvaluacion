import { Component, OnInit } from '@angular/core';
import { ActividadRepository } from 'src/app/model/actividad/actividad.repository';
import { Actividad } from 'src/app/model/actividad/aformacion.model';
import { NewActividadRepository } from 'src/app/model/actividad/newActividad.repository';

@Component({
  selector: 'app-actividad-base',
  templateUrl: './actividad-base.component.html',
  styleUrls: ['./actividad-base.component.css']
})
export class ActividadBaseComponent implements OnInit {

  constructor(
    private repository: ActividadRepository,
    private newActividad: NewActividadRepository,
  ) { }

  ngOnInit(): void {
    this.newActividad.getActividadById(1);
  }

  get actividades(): Actividad[] {
    return this.repository.getActiviades();
  }
}
