import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Evidencia } from 'src/app/model/actividad/actividad.model';
import { NewActividadRepository } from 'src/app/model/actividad/newActividad.repository';
import { ActividadFormComponent } from '../actividad-form.component';
import { FORMATOS } from '../../../../model/actividad/actividad.model';
@Component({
  selector: 'app-actividad-form-evidencia',
  templateUrl: './actividad-form-evidencia.component.html',
  styleUrls: ['./actividad-form-evidencia.component.css']
})
export class ActividadFormEvidenciaComponent implements OnInit {
  private form: FormGroup;
  public formatos: any[];
  constructor(
    private fb: FormBuilder,
    private newActividadRepository: NewActividadRepository,
    private padre: ActividadFormComponent,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: new FormControl('', { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern('[A-Za-z0-9 ][A-Za-z0-9 ]*')] }),
      formato: new FormControl(0, { validators: [Validators.required, Validators.pattern('[0-3]*')] }),
      descripcion: new FormControl('', { validators: [Validators.required, Validators.minLength(4), Validators.pattern('[A-Za-z0-9,. ][A-Za-z0-9,. ]*')] }),
    });
    this.formatos = FORMATOS;
  }

  isValidInput(fieldName, form): string {
    if (form.controls[fieldName].value == '' || form.controls[fieldName].value == null)
      return '';
    else
      return (form.controls[fieldName].invalid
        && (form.controls[fieldName].dirty
          || form.controls[fieldName].touched)) ? 'is-invalid' : 'is-valid';
  }

  setValues() {
    let evidencia = new Evidencia(
      null,
      null,
      this.form.controls['nombre'].value,
      this.form.controls['descripcion'].value,
      this.form.controls['formato'].value,
    );

    this.newActividadRepository.evidencia = evidencia;
    this.form.setValue({ nombre: '', formato: '', descripcion: '' });
  }

}
