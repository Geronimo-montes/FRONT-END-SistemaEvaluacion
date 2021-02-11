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
  ) { }

  getUsuario(): Usuario { return this.usuario; }

  setUsuario() {
    this.datasource.getUsuario().subscribe(data => {
      this.usuario = data;
    });
  }

  login(user: any) { /**/
    this.datasource.login(user).subscribe(data => {
      this.notificacion.titulo = data['titulo'];
      this.notificacion.mensaje = data['mensaje'];
      this.notificacion.tipo = data['tipo'];
      this.notificacion.showMensaje();

      if (data['token'] !== undefined) {
        this.cookies.set('token', data['token'], new Date(new Date().getTime() + 1000 * 60 * 60));
        setTimeout(() => {
          if (data['user']['rol'] == 'docente')
            this.router.navigateByUrl('/plantrabajo');
          else
            this.router.navigateByUrl('/alumnouserhome');
        }, 2000);
      }
    });
  }

  logOut() {
    this.datasource.logOut().subscribe(data => {
      console.log(data);

      this.notificacion.titulo = data['titulo'];
      this.notificacion.mensaje = data['mensaje'];
      this.notificacion.tipo = data['tipo'];
      this.notificacion.showMensaje();

      if (data['logout']) {
        this.cookies.set('token', '', new Date(new Date().getTime() - 1000 * 60 * 60));
        this.usuario = null;

        setTimeout(() => {
          this.router.navigateByUrl('/login');
        }, 1000);
      }
    });
  }

  updatePerfil(perfil: any) {
    this.datasource.updatePerfil(perfil).subscribe((data) => {
      console.log(data);
      this.notificacion.titulo = data['titulo'];
      this.notificacion.mensaje = data['mensaje'];
      this.notificacion.tipo = data['tipo'];
      this.notificacion.showMensaje();
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
