import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/model/users/users.service';
import { DocenteRepository } from 'src/app/model/docente/docente.repository';
import { Docente } from 'src/app/model/docente/docente.model';

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
  constructor(location: Location, private element: ElementRef, private router: Router,
    private userService: UsersService, private repository: DocenteRepository) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
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
