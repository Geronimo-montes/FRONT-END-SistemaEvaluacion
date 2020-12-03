import { Component, OnInit } from '@angular/core';
import { Docente } from 'src/app/model/docente/docente.model';
import { DocenteRepository } from 'src/app/model/docente/docente.repository';

@Component({
  selector: 'app-ficha-informacion',
  templateUrl: './ficha-informacion.component.html',
  styleUrls: ['./ficha-informacion.component.css']
})
export class FichaInformacionComponent implements OnInit {

  constructor(private repository: DocenteRepository) { }

  ngOnInit(): void { }

  get docente(): Docente {
    return this.repository.getDocente();
  }
}
