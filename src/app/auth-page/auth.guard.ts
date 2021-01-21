import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private cookies: CookieService,
    private router: Router,
  ) { }

  canActivate(): boolean {
    if (this.cookies.get('token').length > 0) {
      this.router.navigateByUrl('profile');
      return false;
    }
    return true;
  }

}
