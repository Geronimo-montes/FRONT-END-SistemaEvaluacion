import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/model/alumno/alumno.model';
import { AlumnoUserReporsitory } from 'src/app/model/alumno/alumnoUser.repository';
import { Usuario } from 'src/app/model/users/user.model';
import { UserRepository } from 'src/app/model/users/user.repository';

@Component({
  selector: 'app-profile-base',
  templateUrl: './profile-base.component.html',
  styleUrls: ['./profile-base.component.css']
})
export class ProfileBaseComponent implements OnInit {

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
  get actividades(): any {
    return this.repository.getActividades();
  }

  ngOnInit(): void {
  }

}
