import { Component, OnInit } from '@angular/core';
import { ActividadRepository } from 'src/app/model/actividad/actividad.repository';
import { Actividad, FORMATOS } from 'src/app/model/actividad/aformacion.model';
import { NewActividadRepository } from 'src/app/model/actividad/newActividad.repository';

@Component({
  selector: 'app-actividad-ficha',
  templateUrl: './actividad-ficha.component.html',
  styleUrls: ['./actividad-ficha.component.css']
})
export class ActividadFichaComponent implements OnInit {
  public formatos: any[];

  constructor(
    private newActividadRepository: NewActividadRepository
  ) { }

  ngOnInit(): void {
    this.formatos = FORMATOS;
  }

  get newActividad(): Actividad {
    return this.newActividadRepository.getNewActividad();
  }

  get areas(): string[] {
    return this.newActividadRepository.getAreas();
  }

  get perfil(): string {
    return this.newActividadRepository.getPerfil();
  }

  deleteAprendizaje(id) {
    this.newActividadRepository.deleteidAprendizajeEsperado(id);
  }

  deleteEvidencia(id) {
    this.newActividadRepository.deleteEvidencia(id);
  }

  registrarNuevaActividad() { }
}
