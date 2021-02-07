import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/model/alumno/alumno.model';
import { AlumnoUserReporsitory } from 'src/app/model/alumno/alumnoUser.repository';

@Component({
  selector: 'app-form-ficha',
  templateUrl: './form-ficha.component.html',
  styleUrls: ['./form-ficha.component.css']
})
export class FormFichaComponent implements OnInit {
  public imgPerfil: string;

  constructor(
    private repository: AlumnoUserReporsitory,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.imgPerfil = this.alumno['rutaPerfil'];
  }

  get alumno(): Alumno {
    return this.repository.getAlumno();
  }
  get actividades(): any[] {
    return this.repository.getActividades();
  }

  setActividad(id: number) {
    this.repository.setActividadSeleted(id);
  }
}
