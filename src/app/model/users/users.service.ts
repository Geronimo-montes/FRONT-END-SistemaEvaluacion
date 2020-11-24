import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class UsersService {
  constructor(private http: HttpClient, private cookies: CookieService) {}

  login(user: any): Observable<any> {
    return this.http.post("http://sistemaevaluacion/login", user);
  }

  register(user: any): Observable<any> {
    return this.http.get("http://sistemaevaluacion/alumno/1");
  }

  setToken(token: string) { //cookie que espira en 3 horas
    this.cookies.set('token', token, new Date(new Date().getTime() + 1000*60*60*3));
  }

  getToken() {
    return this.cookies.get("token");
  }

  //Pendiente Metodo Para validar la sesion mediante el token
  //al validar se retorna el nombre de usuario correspondiente al token
}