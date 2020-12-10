import { Component, OnInit } from "@angular/core";
import { ActividadRepository } from "src/app/model/actividad/actividad.repository";
import { Actividad } from "src/app/model/actividad/aformacion.model";

@Component({
  selector: "app-actividad-table",
  templateUrl: "./actividad-table.component.html",
  styleUrls: ["./actividad-table.component.css"],
})
export class ActividadTableComponent implements OnInit {
  public NumRowPage: number = 5;
  public SelectedPage: number = 1;
  public filtro: string = "";
  constructor(private repository: ActividadRepository) { }

  ngOnInit(): void { }

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
    for (let index = 0; index < this.NumberPage; index++)
      numeros.push(index + 1);
    return numeros;
  }

  changePage(page) {
    this.SelectedPage = page;
  }
}
