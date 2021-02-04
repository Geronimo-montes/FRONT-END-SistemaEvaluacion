import { Component, OnInit } from '@angular/core';
import { FORMATOS } from 'src/app/model/actividad/actividad.model';
import { Comentario } from 'src/app/model/alumno/alumno.model';
import { AlumnoUserReporsitory } from 'src/app/model/alumno/alumnoUser.repository';

@Component({
  selector: 'app-actividad-evidencia',
  templateUrl: './actividad-evidencia.component.html',
  styleUrls: ['./actividad-evidencia.component.css']
})
export class ActividadEvidenciaComponent implements OnInit {
  public formatos: any[];
  public comentario: string = '';
  constructor(
    private repository: AlumnoUserReporsitory,
  ) {
    this.formatos = FORMATOS;
  }

  ngOnInit(): void {
  }

  get actividadSelected(): any {
    return this.repository.getActividadSelected();
  }

  get comentarios(): Comentario[] {
    return this.repository.getComentarios();
  }

  comentarActividad() {
    if (this.comentario != '') {
      const comentario = {
        idActividadProgramada: this.actividadSelected['idActividadProgramada'],
        idAlumno: this.actividadSelected['idAlumno'],
        comentario: this.comentario
      };

      this.repository.comentarActividad(comentario);
      this.comentario = '';
    }
  }
}
