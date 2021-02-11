import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/model/alumno/alumno.model';
import { AlumnoUserReporsitory } from 'src/app/model/alumno/alumnoUser.repository';
import { Usuario } from 'src/app/model/users/user.model';
import { UserRepository } from 'src/app/model/users/user.repository';

@Component({
  selector: 'app-alumno-user-base',
  templateUrl: './alumno-user-base.component.html',
  styleUrls: ['./alumno-user-base.component.css']
})
export class AlumnoUserBaseComponent implements OnInit {

  constructor(
    private repository: AlumnoUserReporsitory,
    private repositoryUser: UserRepository,
  ) { }

  ngOnInit(): void {
    this.repositoryUser.setUsuario();
    this.repository.setUserAlumno();
    this.repository.setActividadesByAlumno();
  }

  get usuario(): Usuario {
    return this.repositoryUser.getUsuario();
  }
  get alumno(): Alumno {
    return this.repository.getAlumno();
  }
  get actividades(): any {
    return this.repository.getActividades();
  }
}
