import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/users/user.model';
import { UserRepository } from 'src/app/model/users/user.repository';

@Component({
  selector: 'app-auth-base',
  templateUrl: './auth-base.component.html',
  styleUrls: ['./auth-base.component.css']
})
export class AuthBaseComponent implements OnInit {
  isCollapsed: boolean = false;
  constructor(
    private repository: UserRepository,
  ) { }

  get usuario(): Usuario {
    return this.repository.getUsuario();
  }
  ngOnInit(): void { }

}
