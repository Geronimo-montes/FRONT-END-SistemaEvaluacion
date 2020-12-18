import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Alumno } from "src/app/model/alumno/alumno.model";
import { AlumnoRepository } from "src/app/model/alumno/alumno.repository";

@Component({
  selector: "app-table-alumno",
  templateUrl: "./table-alumno.component.html",
  styleUrls: ["./table-alumno.component.css"],
})
export class TableAlumnoComponent implements OnInit {
  public NumRowPage: number = 5;
  public SelectedPage: number = 1;
  public primerControl: number = 1;
  public filtro: string = "";
  constructor(private repository: AlumnoRepository, private route: Router) { }

  ngOnInit(): void { }

  get alumnos(): Alumno[] {
    let pageIndex = (this.SelectedPage - 1) * this.NumRowPage;
    let b = this.filtro;
    return this.repository
      .getAlumnos()
      .filter(function (a) {
        return (
          (a.nombre + " " + a.ap1 + " " + a.ap2)
            .toLocaleLowerCase()
            .indexOf(b.toLocaleLowerCase()) > -1
        );
      })
      .slice(pageIndex, pageIndex + this.NumRowPage);
  }

  get NumberPage(): number {
    let b = this.filtro;
    return Math.ceil(
      this.repository.getAlumnos().filter(function (a) {
        return (
          (a.nombre + " " + a.ap1 + " " + a.ap2)
            .toLocaleLowerCase()
            .indexOf(b.toLocaleLowerCase()) > -1
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


  cambiarAlumnoSeleccionado(alumno: Alumno) {
    this.repository.setalumnoSeleccionado(alumno);
  }

  editarDatosAlumno(alumno: Alumno) {
    this.repository.setalumnoSeleccionado(alumno);
    this.route.navigateByUrl("alumno/profilealumno");
  }
}
