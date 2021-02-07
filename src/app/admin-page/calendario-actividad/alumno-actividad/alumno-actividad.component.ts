import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/model/alumno/alumno.model';
import { AlumnoUserReporsitory } from 'src/app/model/alumno/alumnoUser.repository';
import { Usuario } from 'src/app/model/users/user.model';
import { UserRepository } from 'src/app/model/users/user.repository';

@Component({
  selector: 'app-alumno-actividad',
  templateUrl: './alumno-actividad.component.html',
  styleUrls: ['./alumno-actividad.component.css']
})
export class AlumnoActividadComponent implements OnInit {

  constructor(
    private repositoryUser: UserRepository,
    private repository: AlumnoUserReporsitory,
  ) { }

  get usuario(): Usuario {
    return this.repositoryUser.getUsuario();
  }
  get alumno(): Alumno {
    return this.repository.getAlumno();
  }
  get actividadSelected(): any {
    return this.repository.getActividadSelected();
  }

  ngOnInit(): void {
  }

}
