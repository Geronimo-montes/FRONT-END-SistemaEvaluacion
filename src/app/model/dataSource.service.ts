import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Actividad, ActividadProgramada, AprendizajeEsperado, AreaFormacion } from './actividad/actividad.model';
import { Alumno, Comentario } from './alumno/alumno.model';
import { Docente } from './docente/docente.model';
import { Usuario } from './users/user.model';

const PROTOCOL = "http";
const PORT = "80";
@Injectable()
export class DataSourceService {
  baseURL: string;
  constructor(private http: HttpClient, private cookies: CookieService) {
    //this.baseURL = `https://sistemaevaluacionkinder.000webhostapp.com/`;
    this.baseURL = environment.baseURL;
    //this.baseURL = `${PROTOCOL}://sistemaevaluacion:${PORT}/`;
  }

  /**Autenticacion de usuaios */
  login(user: any): Observable<any> {
    return this.http.post(`${this.baseURL}login`, user);
  }

  getUsuario(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseURL}usuario`, this.getOptions());
  }

  validarRol(): Observable<any> {
    return this.http.get(`${this.baseURL}docentevalidacion`, this.getOptions());
  }

  logOut(): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseURL}logout`, 0, this.getOptions());
  }

  updateUser(user: any): Observable<any> {
    return this.http.post(`${this.baseURL}user/update`, user, this.getOptions());
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
    return this.http.get<Docente>(`${this.baseURL}docente`,
      this.getOptions());
  }

  updateDocenteById(docente: any): Observable<Docente> {
    return this.http.post(`${this.baseURL}docente/update`, docente, this.getOptions());
  }

  /**Alumnos get */
  getAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(`${this.baseURL}listaalumno`,
      this.getOptions());
  }

  updateAlumnoById(alumno: FormData): Observable<any> {
    return this.http.post(`${this.baseURL}alumno/update`, alumno, this.getOptions());
  }

  updatePerfil(perfil: any): any {
    let inpost = new FormData();
    inpost.append("file", perfil);
    return this.http.post(`${this.baseURL}updateperfil`, inpost, this.getOptions());
  }

  getAreaFormacion(): Observable<AreaFormacion[]> {
    return this.http.get<AreaFormacion[]>(`${this.baseURL}areaFormacion`);
  }

  getAprendizajeEsperado(id: number): Observable<AprendizajeEsperado[]> {
    return this.http.get<AprendizajeEsperado[]>(`${this.baseURL}aprendizajeEsperado/${id}`);
  }

  insertActividad(actividad: any): Observable<any> {
    return this.http.post(`${this.baseURL}actividadInsert`, actividad, this.getOptions());
  }

  getActividades(): Observable<Actividad[]> {
    return this.http.get<Actividad[]>(`${this.baseURL}actividades`, this.getOptions());
  }

  getActividadById(id: number): Observable<Actividad> {
    return this.http.get<Actividad>(`${this.baseURL}actividad/${id}`, this.getOptions());
  }

  getActividadesProgramadas(): Observable<ActividadProgramada[]> {
    return this.http.get<ActividadProgramada[]>(`${this.baseURL}planTrabajo`, this.getOptions());
  }

  programrActividad(actividad: any): Observable<any> {
    return this.http.post(`${this.baseURL}plantrabajo/insert`, actividad, this.getOptions());
  }

  modificarActividad(actividad: any): Observable<any> {
    return this.http.post(`${this.baseURL}planTrabajo/update`, actividad, this.getOptions());
  }

  deleteActividad(id: number): Observable<any> {
    return this.http.post(`${this.baseURL}planTrabajo/delete/${id}`, this.getOptions());
  }

  /**Usuario alumnos Metodos CRUD */
  getUserAlumnoById(idAlumno?: string): Observable<Alumno> {
    let valor = (idAlumno == undefined) ? idAlumno : 'noalumno';
    return this.http.get<Alumno>(`${this.baseURL}alumnouser/${valor}`, this.getOptions());
  }

  getActividadesAlumno(idAlumno?: string): Observable<any> {
    let valor = (idAlumno == undefined) ? idAlumno : 'noalumno';
    return this.http.get<any>(`${this.baseURL}actividadesalumno/${valor}`, this.getOptions());
  }

  getActividadesAlumnoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseURL}actividadalumno/${id}`, this.getOptions());
  }

  /**comentarios */
  insertComentarios(comentario: any): Observable<Comentario[]> {
    return this.http.post<Comentario[]>(`${this.baseURL}comentarioinsert`, comentario, this.getOptions());
  }

  subirEvidencia(files: any, id: any): any {
    let inpost = new FormData();
    for (let index = 0; index < files.length; index++) {
      inpost.append(index.toString(), files[index]);
    }

    return this.http.post(`${this.baseURL}subirevidencia/${files.length}/${id}`, inpost, this.getOptions());
  }

  getOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: this.cookies.get('token'),
      }),
    };
  }
}
