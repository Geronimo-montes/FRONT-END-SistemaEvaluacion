import { Component, OnInit } from '@angular/core';
import { ActividadRepository } from 'src/app/model/actividad/actividad.repository';
import { Actividad } from 'src/app/model/actividad/aformacion.model';

@Component({
  selector: 'app-actividad-ficha',
  templateUrl: './actividad-ficha.component.html',
  styleUrls: ['./actividad-ficha.component.css']
})
export class ActividadFichaComponent implements OnInit {

  constructor(private repository: ActividadRepository) { }

  ngOnInit(): void { }

  get actividades(): Actividad[] {
    return this.repository.getActiviades();
  }

}
