import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { DataSourceService } from "../dataSource.service";
import { Usuario } from "./user.model";

@Injectable()
export class UserRepository {
  private usuario: Usuario;
  private mensaje: string;
  private tipoMensaje: string;
  private formDestino: string; /*d: docente | u: credenciales | p: perfil*/


  constructor(
    private datasource: DataSourceService,
    public router: Router,
    private cookies: CookieService,
  ) {
    this.datasource.getUsuario().subscribe(data => {
      this.usuario = data;
    });
  }

  getUsuario(): Usuario {
    return this.usuario;
  }
  getMensaje(): string {
    return this.mensaje;
  }
  getTipoMensaje(): string {
    return this.tipoMensaje;
  }

  getFormDestino(): string {
    return this.formDestino;
  }

  login(user: any) {
    //genera un delay para la pantalla de
    this.datasource.login(user).subscribe(data => {
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
      } else {
        this.mensaje = data['error'];
      }
    });
  }

  logOut() {
    this.datasource.logOut().subscribe(data => {
      if (data) {
        this.cookies.set('token', '', new Date(new Date().getTime() - 1000 * 60 * 60));
        this.cookies.set('rol', '', new Date(new Date().getTime() - 1000 * 60 * 60));
        this.router.navigateByUrl('/login');
      }
    });
  }

  updateUser(user: any): void {
    this.datasource.updateUser(user).subscribe((data) => {
      if (data['success']) {
        this.mensaje = data['mensaje'];
        this.tipoMensaje = 'alert-success';
      } else {
        this.mensaje = data['mensaje'];
        this.tipoMensaje = 'alert-danger';
      }
      this.formDestino = data['destino'];
    });
  }
}