import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Alumno } from './alumno/alumno.model';
import { Docente } from './docente/docente.model';

const PROTOCOL = "http";
const PORT = "80";
@Injectable()
export class DataSourceService {
  baseURL: string;
  constructor(private http: HttpClient, private cookies: CookieService) {
    this.baseURL = `${PROTOCOL}://sistemaevaluacion:${PORT}/`;
  }

  getDocenteById(): Observable<Docente> {
    return this.http.get<Docente>(this.baseURL + 'docente', 
    this.getOptions());
  }

  updateDocenteById(docente: any): Observable<any> {
    return this.http.put(this.baseURL + 'docente/update', docente, this.getOptions());
  }

  getAlumnos(grupo: string, grado: string, turno: string): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.baseURL + 'alumno/' + grupo + '/' + grado + '/' + turno,
    this.getOptions());
  }

  getOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: this.cookies.get('token'),
      }),
    };
  }
}
