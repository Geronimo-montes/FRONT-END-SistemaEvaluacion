import { Component, OnInit } from '@angular/core';
import { Docente } from 'src/app/model/docente/docente.model';
import { DocenteRepository } from 'src/app/model/docente/docente.repository';
import { Usuario } from 'src/app/model/users/user.model';
import { UserRepository } from 'src/app/model/users/user.repository';

@Component({
  selector: 'app-admin-base',
  templateUrl: './admin-base.component.html',
  styleUrls: ['./admin-base.component.css']
})
export class AdminBaseComponent implements OnInit {
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
