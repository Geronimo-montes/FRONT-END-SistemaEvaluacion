import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Alumno } from 'src/app/model/alumno/alumno.model';
import { AlumnoUserReporsitory } from 'src/app/model/alumno/alumnoUser.repository';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.css']
})
export class FormAlumnoComponent implements OnInit {
  form: FormGroup;
  public inputDisable: boolean = true;

  constructor(
    private repository: AlumnoUserReporsitory,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      idAlumno: new FormControl(this.alumno[0]['idAlumno'], { validators: [Validators.required] }),
      nombre: new FormControl(this.alumno[0]['nombre'], { validators: [Validators.required, Validators.minLength(4), Validators.pattern('[A-Za-z ][A-Za-z ]*')] }),
      ap1: new FormControl(this.alumno[0]['ap1'], { validators: [Validators.required, Validators.minLength(4), Validators.pattern('[A-Za-z][A-Za-z]*')] }),
      ap2: new FormControl(this.alumno[0]['ap2'], { validators: [Validators.required, Validators.minLength(4), Validators.pattern('[A-Za-z][A-Za-z]*')] }),
      curp: new FormControl(this.alumno[0]['curp'], { validators: [Validators.required, Validators.minLength(18), Validators.maxLength(18)] }),
      direccion: new FormControl(this.alumno[0]['direccion'], { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(200)] }),
      telefono: new FormControl(this.alumno[0]['telefono'], { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(10), Validators.pattern('[0-9]*')] }),
      facebook: new FormControl(this.alumno[0]['facebook'], { validators: [Validators.required] }),
      grupo: new FormControl(this.alumno[0]['grupo'], { validators: [Validators.required] }),
      grado: new FormControl(this.alumno[0]['grado'], { validators: [Validators.required] }),
      turno: new FormControl(this.alumno[0]['turno'], { validators: [Validators.required] }),
      estatus: new FormControl(this.alumno[0]['estatus'], { validators: [Validators.required] }),
    });

    console.log(this.alumno);
  }

  get alumno(): Alumno {
    return this.repository.getAlumno();
  }

  isValidInput(fieldName, form): string {
    if (form.controls[fieldName].value == '')
      return '';
    else
      return (form.controls[fieldName].invalid
        && (form.controls[fieldName].dirty
          || form.controls[fieldName].touched)) ? 'is-invalid' : 'is-valid';
  }
}
