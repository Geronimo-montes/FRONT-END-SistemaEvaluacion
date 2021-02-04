import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserRepository } from '../model/users/user.repository';

@Injectable({
  providedIn: 'root'
})
export class AlumnoGuard implements CanActivate {
  constructor(
    private cookies: CookieService,
    private router: Router,
    private repository: UserRepository,
  ) { }

  canActivate(): boolean {
    if (this.cookies.get('token').length == 0) {
      this.router.navigateByUrl('login');
      return false;
    } else if (this.cookies.get('rol') != 'alumno') {
      this.router.navigateByUrl('login');
      return false;
    }
    return true;
  }
}
