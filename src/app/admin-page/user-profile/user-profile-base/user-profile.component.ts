import { Component, OnDestroy, OnInit } from '@angular/core';
import { DocenteRepository } from '../../../model/docente/docente.repository';
import { Docente } from '../../../model/docente/docente.model';
import { UserRepository } from 'src/app/model/users/user.repository';
import { Usuario } from 'src/app/model/users/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  constructor(
    private repository: DocenteRepository,
    private repositoryUser: UserRepository,
  ) { }

  ngOnInit(): void {
    this.repositoryUser.setUsuario();
    this.repository.setDocente();
  }

  get usuario(): Usuario {
    return this.repositoryUser.getUsuario();
  }
  get docente(): Docente {
    return this.repository.getDocente();
  }
}