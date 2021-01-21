import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Actividad, ActividadProgramada, AprendizajeEsperado, AreaFormacion } from './actividad/actividad.model';
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

  /**Autenticacion de usuaios */
  login(user: any): Observable<any> {
    return this.http.post(this.baseURL + 'login', user);
  }

  logOut(): Observable<boolean> {
    return this.http.put<boolean>(this.baseURL + 'logout', 0, this.getOptions());
  }

  updateUser(user: any): Observable<any> {
    return this.http.put(this.baseURL + 'user/update', user, this.getOptions());
  }

  getToken() {
    return this.cookies.get("token");
  }

  register(user: any): Observable<any> {
    //sin implementar
    return this.http.get("http://sistemaevaluacion/alumno/1");
  }

  /**Usuario Docente Metodos CRUD */
  getDocenteById(): Observable<Docente> {
    return this.http.get<Docente>(this.baseURL + 'docente',
      this.getOptions());
  }

  updateDocenteById(docente: any): Observable<any> {
    return this.http.put(this.baseURL + 'docente/update', docente, this.getOptions());
  }

  /**Alumnos get */
  getAlumnos(grupo: string, grado: string, turno: string): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.baseURL + 'alumno/' + grupo + '/' + grado + '/' + turno,
      this.getOptions());
  }

  updateAlumnoById(alumno: FormData): Observable<any> {
    return this.http.post(this.baseURL + 'alumno/update', alumno, this.getOptions());
  }

  updatePerfil(perfil: any): any {
    let input = new FormData();
    input.append("file", perfil);
    return this.http.post(this.baseURL + 'updateperfil', input, this.getOptions());
  }

  getAreaFormacion(): Observable<AreaFormacion[]> {
    return this.http.get<AreaFormacion[]>(this.baseURL + 'areaFormacion');
  }

  getAprendizajeEsperado(id: number): Observable<AprendizajeEsperado[]> {
    return this.http.get<AprendizajeEsperado[]>(this.baseURL + 'aprendizajeEsperado/' + id);
  }

  insertActividad(actividad: any): Observable<any> {
    return this.http.post(this.baseURL + 'actividadInsert', actividad, this.getOptions());
  }

  getActividades(): Observable<Actividad[]> {
    return this.http.get<Actividad[]>(this.baseURL + 'actividades', this.getOptions());
  }

  getActividadById(id: number): Observable<Actividad> {
    return this.http.get<Actividad>(this.baseURL + 'actividad/' + id, this.getOptions());
  }

  getActividadesProgramadas(): Observable<ActividadProgramada[]> {
    return this.http.get<ActividadProgramada[]>(this.baseURL + 'planTrabajo', this.getOptions());
  }

  programrActividad(actividad: any): Observable<any> {
    return this.http.post(this.baseURL + 'planTrabajo/insert', actividad, this.getOptions());
  }

  modificarActividad(actividad: any): Observable<any> {
    return this.http.put(this.baseURL + 'planTrabajo/update', actividad, this.getOptions());
  }

  deleteActividad(id: number): Observable<any> {
    return this.http.delete(this.baseURL + 'planTrabajo/delete/' + id, this.getOptions());
  }

  getOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: this.cookies.get('token'),
      }),
    };
  }
}
