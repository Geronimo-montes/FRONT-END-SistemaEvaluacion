import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

const PROTOCOL = "http";
const PORT = "80";
@Injectable()
export class DocenteService {
  baseURL: string;
  constructor(private http: HttpClient, private cookies: CookieService) {
    this.baseURL = `${PROTOCOL}://sistemaevaluacion:${PORT}/`;
  }

  getDocenteById(): Observable<any> {
    return this.http.get(this.baseURL + 'docente', this.getOptions());
  }

  updateDocenteById(docente: any): Observable<any> {
    return this.http.put(this.baseURL + 'docente/update', docente, this.getOptions());
  }

  getOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: this.cookies.get('token'),
      }),
    };
  }
}
