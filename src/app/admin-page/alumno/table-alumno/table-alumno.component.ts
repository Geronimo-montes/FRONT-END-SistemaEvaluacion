import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/model/alumno/alumno.model';
import { AlumnoRepository } from 'src/app/model/alumno/alumno.repository';

@Component({
  selector: 'app-table-alumno',
  templateUrl: './table-alumno.component.html',
  styleUrls: ['./table-alumno.component.css']
})
export class TableAlumnoComponent implements OnInit {
  public NumRowPage: number = 5;
  public SelectedPage: number = 1;
  constructor(private repository: AlumnoRepository, private route: Router) { }

  ngOnInit(): void { }

  get alumnos(): Alumno[] {
    let pageIndex = (this.SelectedPage - 1) * this.NumRowPage;
    return this.repository.getAlumnos().slice(pageIndex, pageIndex + this.NumRowPage);
  }

  get NumberPage(): number {
    return Math.ceil(this.repository.getAlumnos().length 
    / this.NumRowPage);
  }

  get controls(): number[] {
    let numeros: number[] = [];
    for (let index = 0; index < this.NumberPage; index++)
      numeros.push(index + 1);
    return numeros;
  }

  changePage(page){
    this.SelectedPage = page;
  }

  cambiarAlumnoSeleccionado(alumno: Alumno) {
    this.repository.setalumnoSeleccionado(alumno);
  }

  editarDatosAlumno(alumno: Alumno) {
    this.repository.setalumnoSeleccionado(alumno);
    this.route.navigateByUrl('alumno/profilealumno');
  }
}
