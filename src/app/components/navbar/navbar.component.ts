import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES_ALUMNO, ROUTES_DOCENTE } from '../sidebar/sidebar.component';
import { Location } from '@angular/common';
import { UserRepository } from 'src/app/model/users/user.repository';
import { Usuario } from 'src/app/model/users/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  public location_Link = '/profile';

  constructor(
    location: Location,
    private userRepository: UserRepository,
  ) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = (this.usuario.rol == 'docente') ?
      ROUTES_DOCENTE.filter(listTitles => listTitles) :
      ROUTES_ALUMNO.filter(listTitles => listTitles);
  }

  get usuario(): Usuario { return this.userRepository.getUsuario(); }

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
