import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Docente } from 'src/app/model/docente/docente.model';
import { DocenteRepository } from 'src/app/model/docente/docente.repository';
import { Usuario } from 'src/app/model/users/user.model';
import { UserRepository } from 'src/app/model/users/user.repository';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES_DOCENTE: RouteInfo[] = [
  //Para el menu lateral: se crea un arreglo con las rutas, agregando nombre e icono luego se recorre en el html
  //{ path: '/profile', title: 'Mi Perfil', icon: 'ni-circle-08 text-yellow', class: '' },
  { path: '/alumno', title: 'Alumnos', icon: 'ni-hat-3 text-blue', class: 'ni-4x' },
  { path: '/actividad', title: 'Actividades', icon: 'ni-collection text-green', class: '' },
  { path: '/plantrabajo', title: 'Calendario', icon: 'ni-calendar-grid-58 text-orange', class: '' },
];

export const ROUTES_ALUMNO: RouteInfo[] = [
  //Para el menu lateral: se crea un arreglo con las rutas, agregando nombre e icono luego se recorre en el html
  { path: '/alumnouserprofile', title: 'Mi Perfil', icon: 'ni-circle-08 text-yellow', class: '' },
  { path: '/alumnouserhome', title: 'Pagina Principal', icon: 'ni-shop text-blue', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;

  constructor(
    private router: Router,
    private userRepository: UserRepository,
  ) { }

  ngOnInit() {
    this.menuItems = (this.usuario.rol == 'docente') ?
      ROUTES_DOCENTE.filter(menuItem => menuItem) :
      ROUTES_ALUMNO.filter(menuItem => menuItem);

    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }

  get usuario(): Usuario { return this.userRepository.getUsuario(); }

  logOut() {
    this.userRepository.logOut();
  }
}