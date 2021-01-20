import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Docente } from 'src/app/model/docente/docente.model';
import { DocenteRepository } from 'src/app/model/docente/docente.repository';
import { UsersService } from 'src/app/model/users/users.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  //Para el menu lateral: se crea un arreglo con las rutas, agregando nombre e icono luego se recorre en el html
  { path: '/profile', title: 'Mi Perfil', icon: 'ni-circle-08 text-yellow', class: '' },
  { path: '/alumno', title: 'Alumnos', icon: 'ni-hat-3 text-blue', class: 'ni-4x' },
  { path: '/actividad', title: 'Actividades', icon: 'ni-collection text-green', class: '' },
  { path: '/plantrabajo', title: 'Plan Trabajo', icon: 'ni-calendar-grid-58 text-orange', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router, private userService: UsersService, private repository: DocenteRepository) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }

  get docente(): Docente {
    return this.repository.getDocente();
  }

  logOut() {
    this.userService.logOut().subscribe((data) => {
      if (data) {
        this.router.navigateByUrl('login');
      }
    })
  }
}