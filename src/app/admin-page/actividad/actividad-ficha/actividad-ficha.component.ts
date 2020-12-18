import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActividadRepository } from 'src/app/model/actividad/actividad.repository';
import { Actividad } from 'src/app/model/actividad/aformacion.model';
import { NewActividadRepository } from 'src/app/model/actividad/newActividad.repository';

@Component({
  selector: 'app-actividad-ficha',
  templateUrl: './actividad-ficha.component.html',
  styleUrls: ['./actividad-ficha.component.css']
})
export class ActividadFichaComponent implements OnInit {
  private form: FormGroup;
  constructor(private fb: FormBuilder, private newActividadRepository: NewActividadRepository) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      //perfil: new FormControl('',),
      areaFormacion: new FormControl(0, { validators: [Validators.required] }),
      nombre: new FormControl(this.newActividad.tipoActividad, { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(200), Validators.pattern('[A-Za-z0-9 ][A-Za-z0-9 ]*')] }),
      duracionMinutos: new FormControl('', { validators: [Validators.required, Validators.pattern('[0-9]{1,3}')] }),
      tipoActividad: new FormControl(this.newActividad.tipoActividad, { validators: [Validators.required] }),
      idAprendizajeEsperado: new FormControl(0, { validators: [Validators.required] }),
      idDiagnostico: new FormControl(0, { validators: [Validators.required] }),
      inicio: new FormControl('', { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(2000), Validators.pattern('[A-Za-z ][A-Za-z ]*')] }),
      desarrollo: new FormControl('', { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(2000), Validators.pattern('[A-Za-z ][A-Za-z ]*')] }),
      cierre: new FormControl('', { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(2000), Validators.pattern('[A-Za-z ][A-Za-z ]*')] }),
      evaluacion: new FormControl(''),
      recursos: new FormControl('', { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(2000), Validators.pattern('[A-Za-z ][A-Za-z ]*')] }),
      nombreEvidencia: new FormControl('',),
      formatoEsperado: new FormControl(0,),
      descripcion: new FormControl('',),
    });
  }

  isValidInput(fieldName, form): string {
    if (form.controls[fieldName].value == '' || form.controls[fieldName].value == null)
      return '';
    else
      return (form.controls[fieldName].invalid
        && (form.controls[fieldName].dirty
          || form.controls[fieldName].touched)) ? 'is-invalid' : 'is-valid';
  }

  get newActividad(): Actividad {
    return this.newActividadRepository.getNewActividad();
  }

  get perfil(): string {
    return this.newActividadRepository.getPerfil();
  }

  prueba() {
    this.form.setValue({
      nombre: this.newActividad.tipoActividad,
    });

    console.log(this.form.value);
  }
}
