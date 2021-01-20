import { Component, OnInit } from '@angular/core';
import { ActividadRepository } from 'src/app/model/actividad/actividad.repository';
import { Actividad } from 'src/app/model/actividad/actividad.model';

@Component({
  selector: 'app-actividad-base',
  templateUrl: './actividad-base.component.html',
  styleUrls: ['./actividad-base.component.css']
})
export class ActividadBaseComponent implements OnInit {

  constructor(
    private repository: ActividadRepository,
  ) { }

  ngOnInit(): void { }

  get actividades(): Actividad[] {
    return this.repository.getActiviades();
  }
}
