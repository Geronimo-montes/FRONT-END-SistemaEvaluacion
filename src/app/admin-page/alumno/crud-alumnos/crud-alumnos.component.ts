import { Component, OnDestroy, OnInit } from '@angular/core';
import { Alumno } from 'src/app/model/alumno/alumno.model';
import { AlumnoRepository } from 'src/app/model/alumno/alumno.repository';

@Component({
  selector: 'app-crud-alumnos',
  templateUrl: './crud-alumnos.component.html',
  styleUrls: ['./crud-alumnos.component.css']
})
export class CrudAlumnosComponent implements OnInit {
  public imgPerfil: string;
  constructor(private repository: AlumnoRepository) { }

  ngOnInit(){ }

  get alumnos(): Alumno[] {
    return this.repository.getAlumnos();
  }

  get alumnoSeleccionado(): Alumno {
    return this.repository.getalumnoSeleccionado();
  }
}