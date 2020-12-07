import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class ActividadGuard implements CanActivate {
  constructor(private cookies: CookieService, private router: Router) {}
  canActivate(): boolean{
    if(this.cookies.get('token').length == 0){
      this.router.navigateByUrl('login');
      return false;
    }
    return true;    
  }
}
