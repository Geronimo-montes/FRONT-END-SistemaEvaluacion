import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Actividad } from 'src/app/model/actividad/actividad.model';
import { NewActividadRepository } from 'src/app/model/actividad/newActividad.repository';
import { ActividadFormComponent } from '../actividad-form.component';

@Component({
  selector: 'app-actividad-form-instruciones',
  templateUrl: './actividad-form-instruciones.component.html',
  styleUrls: ['./actividad-form-instruciones.component.css']
})
export class ActividadFormInstrucionesComponent implements OnInit {
  private form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private newActividadRepository: NewActividadRepository,
    private padre: ActividadFormComponent,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      inicio: new FormControl(this.newActividadRepository.inicio,
        { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(2000)] }),
      desarrollo: new FormControl(this.newActividadRepository.desarrollo,
        { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(2000)] }),
      cierre: new FormControl(this.newActividadRepository.cierre,
        { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(2000)] }),
      recursos: new FormControl(this.newActividadRepository.recursos,
        { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(2000)] }),
    });
  }

  get newActividad(): Actividad {
    return this.newActividadRepository.getNewActividad();
  }
  get validData(): boolean {
    return this.newActividadRepository.getValidaData();
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
    this.newActividadRepository.inicio = this.form.controls['inicio'].value;
    this.newActividadRepository.desarrollo = this.form.controls['desarrollo'].value;
    this.newActividadRepository.cierre = this.form.controls['cierre'].value;
    this.newActividadRepository.recursos = this.form.controls['recursos'].value;

    this.padre.insertActividad();
    this.form.reset();
  }

}
