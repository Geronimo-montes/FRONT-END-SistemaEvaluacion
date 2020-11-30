import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Docente } from './docente.model';

const PROTOCOL = "http";
const PORT = "80";
@Injectable()
export class DocenteService {
  baseURL: string;
  constructor(private http: HttpClient) {
    this.baseURL = `${PROTOCOL}://sistemaevaluacion:${PORT}/`;
  }

  getDocenteById(id: number): Observable<any> {
    return this.http.get(this.baseURL + 'docente/' + id);
  }

  updateDocenteById(docente: any): Observable<any> {
    return this.http.post(this.baseURL + 'docente/update', docente);
  }
}
