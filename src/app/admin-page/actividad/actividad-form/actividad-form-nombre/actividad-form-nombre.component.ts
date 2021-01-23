import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Actividad } from 'src/app/model/actividad/actividad.model';
import { NewActividadRepository } from 'src/app/model/actividad/newActividad.repository';
import { ActividadFormComponent } from '../actividad-form.component';

@Component({
  selector: 'app-actividad-form-nombre',
  templateUrl: './actividad-form-nombre.component.html',
  styleUrls: ['./actividad-form-nombre.component.css']
})
export class ActividadFormNombreComponent implements OnInit {
  private form: FormGroup;
  public imgPerfil: string;
  constructor(
    private fb: FormBuilder,
    private newActividadRepository: NewActividadRepository,
    private padre: ActividadFormComponent,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      perfil: new FormControl('', { validators: [Validators.required] }),
      nombre: new FormControl(this.newActividadRepository.nombre, { validators: [Validators.required, Validators.minLength(4), Validators.pattern('[A-Za-z ][A-Za-z ]*')] }),
      duracion: new FormControl(this.newActividadRepository.duracionMinutos, { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(3), Validators.pattern('[0-9]*')] }),
    });
    this.imgPerfil = this.newActividadRepository['rutaPerfil'];
  }

  get newActividad(): Actividad {
    return this.newActividadRepository.getNewActividad();
  }

  isValidInput(fieldName, form): string {
    if (form.controls[fieldName].value == '' || form.controls[fieldName].value == null)
      return '';
    else
      return (form.controls[fieldName].invalid
        && (form.controls[fieldName].dirty
          || form.controls[fieldName].touched)) ? 'is-invalid' : 'is-valid';
  }

  load(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imgPerfil = reader.result as string;
      };
    }
  }

  setValues() {
    this.newActividadRepository.nombre = this.form.controls['nombre'].value;
    this.newActividadRepository.duracionMinutos = this.form.controls['duracion'].value;
    this.newActividadRepository.perfil = this.imgPerfil;

    this.padre.next();
  }
}
