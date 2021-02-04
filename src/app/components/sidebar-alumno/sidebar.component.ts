import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/model/alumno/alumno.model';
import { AlumnoUserReporsitory } from 'src/app/model/alumno/alumnoUser.repository';
import { UserRepository } from 'src/app/model/users/user.repository';


declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES_ALUMNO: RouteInfo[] = [
  //Para el menu lateral: se crea un arreglo con las rutas, agregando nombre e icono luego se recorre en el html
  { path: '/userprofile', title: 'Mi Perfil', icon: 'ni-circle-08 text-yellow', class: '' },
  { path: '/useractividad', title: 'Actividad', icon: 'ni-collection text-green', class: '' },
];

@Component({
  selector: 'app-sidebar-alumno',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarAComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;

  constructor(
    private router: Router,
    private userRepository: UserRepository,
    private repository: AlumnoUserReporsitory,
  ) { }

  ngOnInit() {
    this.menuItems = ROUTES_ALUMNO.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }

  get alumno(): Alumno {
    return this.repository.getAlumno();
  }

  logOut() {
    this.userRepository.logOut();
  }
}