import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { DataSourceService } from "../dataSource.service";

@Injectable()
export class UserRepository {
  private mensajeError: string;

  constructor(
    private datasource: DataSourceService,
    public router: Router,
    private cookies: CookieService,
  ) { }

  getMensajeError(): string {
    return this.mensajeError;
  }

  login(user: any) {
    //genera un delay para la pantalla de
    this.datasource.login(user).subscribe(data => {
      if (data[0]['token'] !== undefined) {
        this.cookies.set('token', data[0]['token'], new Date(new Date().getTime() + 1000 * 60 * 60));
        setTimeout(() => {
          this.router.navigateByUrl('/profile');
        }, 2000);
      } else {
        this.mensajeError = data[0]['error'];
      }
    });
  }

  logOut() {
    this.datasource.logOut().subscribe(data => {
      if (data === true) {
        this.cookies.set('token', '', new Date(new Date().getTime() - 1000 * 60 * 60));
        this.router.navigateByUrl('/login');
      }
    });
  }
}