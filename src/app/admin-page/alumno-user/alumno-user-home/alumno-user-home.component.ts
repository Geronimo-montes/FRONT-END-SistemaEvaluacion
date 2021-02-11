import { Component, OnInit } from '@angular/core';
import { AlumnoUserReporsitory } from 'src/app/model/alumno/alumnoUser.repository';

@Component({
  selector: 'app-alumno-user-home',
  templateUrl: './alumno-user-home.component.html',
  styleUrls: ['./alumno-user-home.component.css']
})
export class AlumnoUserHomeComponent implements OnInit {
  public date = new Date();

  constructor(
    private repository: AlumnoUserReporsitory,
  ) {

  }

  ngOnInit(): void { }

  get actividadesHoy(): any {
    return this.repository.getActividades().filter(a => {
      let afecha = new Date(a['fechainicio']);

      if (afecha.getFullYear() === this.date.getFullYear() &&
        afecha.getMonth() === this.date.getMonth() &&
        afecha.getDate() === this.date.getDate() &&
        afecha.getHours() >= this.date.getHours()) {
        return a;
      }
    });
  }

  get actividadesFuturas(): any {
    return this.repository.getActividades().filter(a => {
      let afecha = new Date(a['fechainicio']);

      if (afecha.getFullYear() === this.date.getFullYear() &&
        afecha.getMonth() === this.date.getMonth() &&
        afecha.getDate() > this.date.getDate()) {
        return a;
      }
    });
  }

  get actividadesAtrasadas(): any {
    return this.repository.getActividades().filter(a => {
      let afecha = new Date(a['fechainicio']);

      if (afecha.getFullYear() === this.date.getFullYear() &&
        afecha.getMonth() === this.date.getMonth() &&
        afecha.getDate() < this.date.getDate()) {
        return a;
      }
    });
  }

  get actividadSelected(): any {
    return this.repository.getActividades();
  }
}
