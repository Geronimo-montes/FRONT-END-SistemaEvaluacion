import { Component, OnInit, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { UserRepository } from 'src/app/model/users/user.repository';
import { AlumnoUserReporsitory } from 'src/app/model/alumno/alumnoUser.repository';
import { Alumno } from 'src/app/model/alumno/alumno.model';
import { ROUTES_ALUMNO } from '../sidebar-alumno/sidebar.component';

@Component({
  selector: 'app-navbar-alumno',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarAComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  public location_Link = '/profile';

  constructor(
    location: Location,
    private element: ElementRef,
    private userRepository: UserRepository,
    private repository: AlumnoUserReporsitory,
  ) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES_ALUMNO.filter(listTitle => listTitle);
  }

  get alumno(): Alumno {
    return this.repository.getAlumno();
  }

  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '/') {
      let index = titlee.indexOf('/', 1);
      titlee = (index === -1) ? titlee.slice(0) : titlee.slice(0, index);
      this.location_Link = titlee;
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return titlee;
  }

  logOut() {
    this.userRepository.logOut();
  }
}
