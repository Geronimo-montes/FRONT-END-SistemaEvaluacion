import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { DataSourceService } from "../dataSource.service";
import { NotificacionService } from "../notificacion.service";
import { Usuario } from "./user.model";

@Injectable()
export class UserRepository {
  private usuario: Usuario;

  constructor(
    private datasource: DataSourceService,
    public router: Router,
    private cookies: CookieService,
    private notificacion: NotificacionService,
  ) {
    //¿Que proposito tiene llamarlo en el constructor?
    this.datasource.getUsuario().subscribe(data => {
      this.usuario = data;
    });
  }

  getUsuario(): Usuario { return this.usuario; }

  login(user: any) { /**/
    this.datasource.login(user).subscribe(data => {
      this.notificacion.titulo = data['titulo'];
      this.notificacion.mensaje = data['mensaje'];
      this.notificacion.tipo = data['tipo'];
      this.notificacion.showMensaje();

      if (data['token'] !== undefined) {
        this.cookies.set('token', data['token'], new Date(new Date().getTime() + 1000 * 60 * 60));
        this.cookies.set('rol', data['rol'], new Date(new Date().getTime() + 1000 * 60 * 60));
        setTimeout(() => {
          if (data['rol'] === 'docente') {
            this.router.navigateByUrl('/profile');
          } else {
            this.router.navigateByUrl('/userprofile');
          }
        }, 2000);
      }
    });
  }

  logOut() {
    this.datasource.logOut().subscribe(data => {
      this.notificacion.titulo = data['titulo'];
      this.notificacion.mensaje = data['mensaje'];
      this.notificacion.tipo = data['tipo'];
      this.notificacion.showMensaje();

      if (data['logout']) {
        this.cookies.set('token', '', new Date(new Date().getTime() - 1000 * 60 * 60));
        this.cookies.set('rol', '', new Date(new Date().getTime() - 1000 * 60 * 60));
        setTimeout(() => {
          this.router.navigateByUrl('/login');
        }, 2000);

      }
    });
  }

  updateUser(user: any): void {
    this.datasource.updateUser(user).subscribe((data) => {
      this.notificacion.titulo = data['titulo'];
      this.notificacion.mensaje = data['mensaje'];
      this.notificacion.tipo = data['tipo'];
      this.notificacion.showMensaje();
    });
  }
}