import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/model/alumno/alumno.model';
import { AlumnoRepository } from 'src/app/model/alumno/alumno.repository';

@Component({
  selector: 'app-crud-alumnos',
  templateUrl: './crud-alumnos.component.html',
  styleUrls: ['./crud-alumnos.component.css']
})
export class CrudAlumnosComponent implements OnInit {
  alumnoSeleccionado: Alumno;
  constructor(private repository: AlumnoRepository) { }

  ngOnInit(){ 
    this.delay(1000);
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>this.alumnoSeleccionado = this.alumnos[0]); 
  }

  get alumnos(): Alumno[] {
    return this.repository.getAlumnos();
  }

  cambiarAlumnoSeleccionado(alumno: Alumno) {
    this.alumnoSeleccionado = alumno;
  }
}
