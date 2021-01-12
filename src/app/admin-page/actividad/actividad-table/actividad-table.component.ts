import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ActividadRepository } from "src/app/model/actividad/actividad.repository";
import { Actividad } from "src/app/model/actividad/aformacion.model";
import { NewActividadRepository } from "src/app/model/actividad/newActividad.repository";

@Component({
  selector: "app-actividad-table",
  templateUrl: "./actividad-table.component.html",
  styleUrls: ["./actividad-table.component.scss"],
})
export class ActividadTableComponent implements OnInit {
  public NumRowPage: number = 5;
  public SelectedPage: number = 1;
  public primerControl: number = 1;
  public filtro: string = "";
  constructor(
    private repository: ActividadRepository,
    private newAcividad: NewActividadRepository,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.newAcividad._newActividad = this.actividad;
  }

  get actividad(): Actividad {
    return this.repository.getActiviad();
  }

  get actividades(): Actividad[] {
    let pageIndex = (this.SelectedPage - 1) * this.NumRowPage;
    let a = this.filtro;
    return this.repository
      .getActiviades()
      .filter(function (actividad) {
        return (
          actividad.nombre.toLocaleLowerCase().indexOf(a.toLocaleLowerCase()) >
          -1
        );
      })
      .slice(pageIndex, pageIndex + this.NumRowPage);
  }

  get NumberPage(): number {
    let a = this.filtro;
    return Math.ceil(
      this.repository.getActiviades().filter(function (actividad) {
        return (
          actividad.nombre.toLocaleLowerCase().indexOf(a.toLocaleLowerCase()) >
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

  cambiarActividadSeleccionada(actividad: Actividad) {
    this.newAcividad.getActividadById(actividad.idPlanTrabajo);
  }

  nuevaActividad() {
    this.newAcividad.getActividadById(1);
    this.router.navigateByUrl("actividad/form");
  }
}
