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
    for (let index = 0; index < this.NumberPage; index++)
      numeros.push(index + 1);
    return numeros;
  }

  changePage(page) {
    this.SelectedPage = page;
  }

  cambiarAlumnoSeleccionado(alumno: Alumno) {
    this.repository.setalumnoSeleccionado(alumno);
  }

  editarDatosAlumno(alumno: Alumno) {
    this.repository.setalumnoSeleccionado(alumno);
    this.route.navigateByUrl("alumno/profilealumno");
  }
}
