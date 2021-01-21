import { Component, OnInit } from '@angular/core';
import { ActividadRepository } from 'src/app/model/actividad/actividad.repository';
import { Actividad, AprendizajeEsperado, AreaFormacion, } from 'src/app/model/actividad/actividad.model';
import Stepper from 'bs-stepper';
import { NewActividadRepository } from 'src/app/model/actividad/newActividad.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actividad-form',
  templateUrl: './actividad-form.component.html',
  styleUrls: ['./actividad-form.component.css'],
})
export class ActividadFormComponent implements OnInit {
  /**Datos del stepper */
  public stepper: Stepper;
  constructor(
    private repository: ActividadRepository,
    private newActividadRepository: NewActividadRepository,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: true,
      animation: true,
    });
  }

  get areasFormacion(): AreaFormacion[] {
    return this.repository.getAreaFormacion();
  }
  get aprendizajesEsperados(): AprendizajeEsperado[] {
    return this.repository.getAprendizajeEsperado();
  }

  next() {
    this.stepper.next();
  }

  previous() {
    this.stepper.previous();
  }

  regresarTabla() {
    this.router.navigateByUrl("actividad/table");
  }

  insertActividad() {
    this.newActividadRepository.insertNewActividad();
  }
}
