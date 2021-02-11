import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DataSourceService } from 'src/app/model/dataSource.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private cookies: CookieService,
    private router: Router,
    private datasource: DataSourceService,
  ) { }

  canActivate(): boolean {
    if (this.cookies.get('token').length > 0) {
      this.datasource.getUsuario().subscribe(data => {
        if (data.rol != 'docente') {
          this.router.navigateByUrl('alumnouserhome');
          return false;
        } else {
          this.router.navigateByUrl('plantrabajo');
          return false;
        }
      });
    }
    return true;
  }

}
