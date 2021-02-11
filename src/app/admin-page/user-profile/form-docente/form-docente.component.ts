import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Docente } from 'src/app/model/docente/docente.model';
import { DocenteRepository } from 'src/app/model/docente/docente.repository';

@Component({
  selector: 'app-form-docente',
  templateUrl: './form-docente.component.html',
  styleUrls: ['./form-docente.component.css']
})
export class FormDocenteComponent implements OnInit {
  form: FormGroup;
  public inputDisable: boolean = true;

  constructor(
    private repository: DocenteRepository,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      idDocente: new FormControl(this.docente['idDocente'], { validators: [Validators.required] }),
      nombre: new FormControl(this.docente['nombre'], { validators: [Validators.required, Validators.minLength(4), Validators.pattern('[A-Za-z ][A-Za-z ]*')] }),
      ap1: new FormControl(this.docente['ap1'], { validators: [Validators.required, Validators.minLength(4), Validators.pattern('[A-Za-z][A-Za-z]*')] }),
      ap2: new FormControl(this.docente['ap2'], { validators: [Validators.required, Validators.minLength(4), Validators.pattern('[A-Za-z][A-Za-z]*')] }),
      curp: new FormControl(this.docente['curp'], { validators: [Validators.required, Validators.minLength(18), Validators.maxLength(18)] }),
      rfc: new FormControl(this.docente['rfc'], { validators: [Validators.required, Validators.minLength(13), Validators.maxLength(13)] }),
      direccion: new FormControl(this.docente['direccion'], { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(200)] }),
      telefono: new FormControl(this.docente['telefono'], { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(10), Validators.pattern('[0-9]*')] }),
      facebook: new FormControl(this.docente['facebook'], { validators: [Validators.required] }),
      grupo: new FormControl(this.docente['grupo'], { validators: [Validators.required] }),
      grado: new FormControl(this.docente['grado'], { validators: [Validators.required] }),
      turno: new FormControl(this.docente['turno'], { validators: [Validators.required] }),
      estatus: new FormControl(this.docente['estatus'], { validators: [Validators.required] }),
    });
  }

  get docente(): Docente {
    return this.repository.getDocente();
  }

  isValidInput(fieldName, form): string {
    if (form.controls[fieldName].value == '')
      return '';
    else
      return (form.controls[fieldName].invalid
        && (form.controls[fieldName].dirty
          || form.controls[fieldName].touched)) ? 'is-invalid' : 'is-valid';
  }

  updateDocente(): void {
    const docente = {
      idDocente: this.form.controls['idDocente'].value,
      nombre: this.form.controls['nombre'].value,
      ap1: this.form.controls['ap1'].value,
      ap2: this.form.controls['ap2'].value,
      curp: this.form.controls['curp'].value,
      rfc: this.form.controls['rfc'].value,
      direccion: this.form.controls['direccion'].value,
      telefono: this.form.controls['telefono'].value,
      facebook: this.form.controls['facebook'].value,
      grupo: this.form.controls['grupo'].value,
      grado: this.form.controls['grado'].value,
      turno: this.form.controls['turno'].value,
      estatus: this.form.controls['estatus'].value,
    };
    this.repository.updateDocnete(docente);
  }
}
