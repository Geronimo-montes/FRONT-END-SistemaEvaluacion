import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DataSourceService } from 'src/app/model/dataSource.service';

@Injectable({
  providedIn: 'root'
})
export class AlumnoGuard implements CanActivate {
  constructor(
    private cookies: CookieService,
    private router: Router,
    private datasource: DataSourceService,
  ) { }

  canActivate(): boolean {
    if (this.cookies.get('token').length == 0) {
      this.router.navigateByUrl('login');
      return false;
    } else {
      this.datasource.getUsuario().subscribe(data => {
        if (data.rol != 'alumno') {
          this.router.navigateByUrl('login');
          return false;
        }
      });
    }
    return true;
  }
}
