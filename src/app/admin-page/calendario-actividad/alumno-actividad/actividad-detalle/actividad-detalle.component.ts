import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FORMATOS } from 'src/app/model/actividad/actividad.model';
import { AlumnoUserReporsitory } from 'src/app/model/alumno/alumnoUser.repository';

@Component({
  selector: 'app-actividad-detalle',
  templateUrl: './actividad-detalle.component.html',
  styleUrls: ['./actividad-detalle.component.css']
})
export class ActividadDetalleComponent implements OnInit {
  public formatos: any[];
  public files;

  constructor(
    private repository: AlumnoUserReporsitory,
    private router: Router,
  ) {
    this.formatos = FORMATOS;
  }

  ngOnInit(): void {
  }

  get actividadSelected(): any {
    return this.repository.getActividadSelected();
  }
  get mensaje(): string {
    return this.repository.getMensaje();
  }
  get tipoMensaje(): string {
    return this.repository.getTipoMensaje();
  }
  get formDestino(): string {
    return this.repository.getFormDestino();
  }

  load(event) {
    this.files = event.target.files;
  }

  subirEvidencia() {
    this.repository.subirEvidencia(this.files, this.actividadSelected['idActividadProgramada']);
    this.router.navigateByUrl('/')
  }
}
