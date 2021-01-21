import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActividadRepository } from 'src/app/model/actividad/actividad.repository';
import { AprendizajeEsperado, AreaFormacion } from 'src/app/model/actividad/actividad.model';
import { NewActividadRepository } from 'src/app/model/actividad/newActividad.repository';
import { ActividadFormComponent } from '../actividad-form.component';

@Component({
  selector: 'app-actividad-form-aprendizaje-diagnostico',
  templateUrl: './actividad-form-aprendizaje-diagnostico.component.html',
  styleUrls: ['./actividad-form-aprendizaje-diagnostico.component.css']
})
export class ActividadFormAprendizajeDiagnosticoComponent implements OnInit {
  private form: FormGroup;
  public NumRowPage: number = 5;
  public SelectedPage: number = 1;
  public primerControl: number = 1;
  public filtro: string = "";

  constructor(
    private newActividadRepository: NewActividadRepository,
    private repository: ActividadRepository,
    private padre: ActividadFormComponent,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      areaFormacion: new FormControl('1'),
    });
  }

  get areasFormacion(): AreaFormacion[] {
    return this.repository.getAreaFormacion();
  }

  get aprendizajeEsperado(): AprendizajeEsperado[] {
    let pageIndex = (this.SelectedPage - 1) * this.NumRowPage;
    let a = this.filtro;
    return this.repository
      .getAprendizajeEsperado()
      .filter(function (b) {
        return (
          b.descripcion.toLocaleLowerCase().indexOf(a.toLocaleLowerCase()) >
          -1
        );
      })
      .slice(pageIndex, pageIndex + this.NumRowPage);
  }

  get NumberPage(): number {
    let a = this.filtro;
    return Math.ceil(
      this.repository
        .getAprendizajeEsperado()
        .filter(function (b) {
          return (
            b.descripcion.toLocaleLowerCase().indexOf(a.toLocaleLowerCase()) >
            -1
          );
        }).length / this.NumRowPage
    );
  }

  get controls(): number[] {
    let numeros: number[] = [];
    let inicio, fin;
    if (this.SelectedPage === 1) {
      inicio = this.primerControl - 1;
      fin = this.primerControl + 2;
    } else if (this.SelectedPage === this.NumberPage) {
      inicio = this.primerControl - 3;
      fin = this.primerControl + 1;
    } else {
      inicio = this.primerControl - 2;
      fin = this.primerControl + 1;
    }

    for (let index = inicio; index < fin; index++)
      if (index < this.NumberPage && index > -1)
        numeros.push(index + 1);
    return numeros;
  }

  changePage(page) {
    this.SelectedPage = page;
    this.primerControl = page;
  }

  changePrimerControl(control) {
    if (control < 0)
      this.primerControl = (this.primerControl > 2) ?
        this.primerControl + control :
        this.primerControl;
    else
      this.primerControl = (this.primerControl < this.NumberPage - 1) ?
        this.primerControl + control :
        this.primerControl;
  }

  changeAreaFormacion(): void {
    let idAreaFormacion = this.form.get('areaFormacion').value;
    if (idAreaFormacion != 0) {
      this.repository.getAprendizajeEsperadoByAreaFormacion(idAreaFormacion);
    }
  }

  setValues(value: AprendizajeEsperado) {
    this.newActividadRepository.idAprendizajeEsperado = value;
    this.newActividadRepository._areas = value.idAreaFormacion[0].descripcion;
  }
}
