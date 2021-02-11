import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Alumno } from 'src/app/model/alumno/alumno.model';
import { AlumnoRepository } from 'src/app/model/alumno/alumno.repository';

@Component({
  selector: 'app-profilealumno',
  templateUrl: './profilealumno.component.html',
  styleUrls: ['./profilealumno.component.css']
})
export class ProfilealumnoComponent implements OnInit {
  public perfil;
  public form: FormGroup;
  public imgPerfil: string;

  constructor(private repository: AlumnoRepository, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      perfil: new FormControl('', { validators: [] }),
      idAlumno: new FormControl(this.alumnoSeleccionado['idAlumno'], { validators: [Validators.required] }),
      nombre: new FormControl(this.alumnoSeleccionado['nombre'], { validators: [Validators.required, Validators.minLength(4), Validators.pattern('[A-Za-z ][A-Za-z ]*')] }),
      ap1: new FormControl(this.alumnoSeleccionado['ap1'], { validators: [Validators.required, Validators.minLength(4), Validators.pattern('[A-Za-z ][A-Za-z ]*')] }),
      ap2: new FormControl(this.alumnoSeleccionado['ap2'], { validators: [Validators.required, Validators.minLength(4), Validators.pattern('[A-Za-z ][A-Za-z ]*')] }),
      curp: new FormControl(this.alumnoSeleccionado['curp'], { validators: [Validators.required, Validators.minLength(18), Validators.maxLength(18)] }),
      grupo: new FormControl(this.alumnoSeleccionado['grupo'], { validators: [Validators.required, Validators.minLength(1), Validators.maxLength(1), Validators.pattern('[A-Za-z]')] }),
      grado: new FormControl(this.alumnoSeleccionado['grado'], { validators: [Validators.required, Validators.minLength(1), Validators.maxLength(1), Validators.pattern('[0-9]')] }),
      turno: new FormControl(this.alumnoSeleccionado['turno'], { validators: [Validators.required, Validators.minLength(1), Validators.maxLength(1), Validators.pattern('[A-Za-z]')] }),
      nombreTutor: new FormControl(this.alumnoSeleccionado['nombreTutor'], { validators: [Validators.required, Validators.minLength(4), Validators.pattern('[A-Za-z ][A-Za-z ]*')] }),
      telefono: new FormControl(this.alumnoSeleccionado['telefono'], { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(10), Validators.pattern('[0-9]*')] }),
      email: new FormControl(this.alumnoSeleccionado['email'], { validators: [Validators.required, Validators.email] }),
      facebook: new FormControl(this.alumnoSeleccionado['facebook'], { validators: [Validators.required, Validators.minLength(4), Validators.pattern('[A-Za-z0-9/ ][A-Za-z0-9/ ]*')] }),
      direccion: new FormControl(this.alumnoSeleccionado['direccion'], { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(200)] }),
    });

    this.imgPerfil = this.alumnoSeleccionado['rutaPerfil'];
  }

  get alumnoSeleccionado(): Alumno {
    return this.repository.getalumnoSeleccionado();
  }

  isValidInput(fieldName, form): string {
    if (this.form.controls[fieldName].value == '' || this.form.controls[fieldName].value == null)
      return '';
    else
      return (this.form.controls[fieldName].invalid
        && (this.form.controls[fieldName].dirty
          || this.form.controls[fieldName].touched)) ? 'is-invalid' : 'is-valid';
  }

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
    this.perfil = event.target.files[0];
  }

  updateAlumno(): void {
    let data = new FormData();
    data.append('file', this.perfil);
    data.append('idAlumno', this.form.controls['idAlumno'].value);
    data.append('nombre', this.form.controls['nombre'].value);
    data.append('ap1', this.form.controls['ap1'].value);
    data.append('ap2', this.form.controls['ap2'].value);
    data.append('curp', this.form.controls['curp'].value);
    data.append('grupo', this.form.controls['grupo'].value);
    data.append('grado', this.form.controls['grado'].value);
    data.append('turno', this.form.controls['turno'].value);
    data.append('nombreTutor', this.form.controls['nombreTutor'].value);
    data.append('direccion', this.form.controls['direccion'].value);
    data.append('telefono', this.form.controls['telefono'].value);
    data.append('email', this.form.controls['email'].value);
    data.append('facebook', this.form.controls['facebook'].value);

    this.repository.updateAlumno(data);
  }

}
