import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Docente } from 'src/app/model/docente/docente.model';
import { DocenteRepository } from 'src/app/model/docente/docente.repository';
import { Usuario } from 'src/app/model/users/user.model';
import { UserRepository } from 'src/app/model/users/user.repository';

@Component({
  selector: 'app-ficha-informacion',
  templateUrl: './ficha-informacion.component.html',
  styleUrls: ['./ficha-informacion.component.css']
})
export class FichaInformacionComponent implements OnInit {
  form: FormGroup;
  public imgPerfil: string;

  constructor(
    private repository: DocenteRepository,
    private userRepository: UserRepository,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      perfil: new FormControl(null, { validators: [Validators.required] })
    });
    this.imgPerfil = this.usuario.rutaPerfil;
  }

  get usuario(): Usuario { return this.userRepository.getUsuario(); }
  get docente(): Docente { return this.repository.getDocente(); }

  load(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imgPerfil = reader.result as string;
        this.form.patchValue({
          fileSource: reader.result
        });
      };
    }
    let file = event.target.files[0];
    this.userRepository.updatePerfil(file);
  }
}
