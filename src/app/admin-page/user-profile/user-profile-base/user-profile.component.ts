import { Component, OnInit } from '@angular/core';
import { DocenteRepository } from '../../../model/docente/docente.repository';
import { Docente } from '../../../model/docente/docente.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  constructor(private repository: DocenteRepository) { }

  ngOnInit(): void { }

  get docente(): Docente {
    return this.repository.getDocente();
  }
}