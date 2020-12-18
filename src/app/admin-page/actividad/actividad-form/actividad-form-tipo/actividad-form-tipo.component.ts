import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewActividadRepository } from 'src/app/model/actividad/newActividad.repository';

@Component({
  selector: 'app-actividad-form-tipo',
  templateUrl: './actividad-form-tipo.component.html',
  styleUrls: ['./actividad-form-tipo.component.css']
})
export class ActividadFormTipoComponent implements OnInit {

  constructor(private newActividadRepository: NewActividadRepository, private router: Router) { }

  ngOnInit(): void { }

  setTipoActividad(tipo: string) {
    this.newActividadRepository.tipoActividad = tipo;
    this.router.navigateByUrl('/actividad/form/nombreactividad');
  }

}
