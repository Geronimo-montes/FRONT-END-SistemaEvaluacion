import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";

const PROTOCOL = "http";
const PORT = "80";
@Injectable()
export class UsersService {
  baseURL: string;
  constructor(private http: HttpClient, private cookies: CookieService) {
    this.baseURL = `${PROTOCOL}://sistemaevaluacion:${PORT}/`;
  }

  login(user: any): Observable<any> {
    return this.http.post(this.baseURL + 'login', user);
  }
  
  logOut(): Observable<boolean> {
    let res = this.http.put<boolean>(this.baseURL + 'logout', null, this.getOptions());
    this.cookies.delete('token');
    return res;
  }

  updateUser(user: any): Observable<any> {
    return this.http.put(this.baseURL + 'user/update', user, this.getOptions());
  }
    
  setToken(token: string) { //cookie que espira en 3 horas
    this.cookies.set('token', token, new Date(new Date().getTime() + 1000*60*60));
  }
  
  getToken() {
    return this.cookies.get("token");
  }

  register(user: any): Observable<any> {
    //sin implementar
    return this.http.get("http://sistemaevaluacion/alumno/1");
  }

  getOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: this.cookies.get('token'),
      }),
    };
  }
}