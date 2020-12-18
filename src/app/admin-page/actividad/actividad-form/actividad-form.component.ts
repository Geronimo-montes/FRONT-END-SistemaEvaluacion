import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActividadRepository } from 'src/app/model/actividad/actividad.repository';
import { Actividad, AprendizajeEsperado, AreaFormacion, } from 'src/app/model/actividad/aformacion.model';
import { AlumnoRepository } from 'src/app/model/alumno/alumno.repository';

@Component({
  selector: 'app-actividad-form',
  templateUrl: './actividad-form.component.html',
  styleUrls: ['./actividad-form.component.css'],
})
export class ActividadFormComponent implements OnInit {
  public imgPerfil: string;
  public enableAprendizaje: boolean = true;
  private form: FormGroup;
  public hidden = false;

  constructor(private repository: ActividadRepository, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      perfil: new FormControl('',),
      areaFormacion: new FormControl(0, { validators: [Validators.required] }),
      nombre: new FormControl('', { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(200), Validators.pattern('[A-Za-z0-9 ][A-Za-z0-9 ]*')] }),
      duracionMinutos: new FormControl('', { validators: [Validators.required, Validators.pattern('[0-9]{1,3}')] }),
      tipoActividad: new FormControl(0, { validators: [Validators.required] }),
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
    this.form.get('idAprendizajeEsperado').disable();
  }

  get areasFormacion(): AreaFormacion[] {
    return this.repository.getAreaFormacion();
  }

  get aprendizajesEsperados(): AprendizajeEsperado[] {
    return this.repository.getAprendizajeEsperado();
  }

  get mensaje(): string {
    return this.repository.getMensaje();
  }

  get tipoMensaje(): string {
    return this.repository.getTipoMensaje();
  }

  isValidInput(fieldName, form): string {
    if (form.controls[fieldName].value == '' || form.controls[fieldName].value == null)
      return '';
    else
      return (form.controls[fieldName].invalid
        && (form.controls[fieldName].dirty
          || form.controls[fieldName].touched)) ? 'is-invalid' : 'is-valid';
  }

  changeAreaFormacion(): void {
    let idAreaFormacion = this.form.get('areaFormacion').value;
    if (idAreaFormacion != 0) {
      this.repository.getAprendizajeEsperadoByAreaFormacion(idAreaFormacion);
      this.form.get('idAprendizajeEsperado').enable();
    } else {
      this.form.get('idAprendizajeEsperado').disable();
    }
  }

  load(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imgPerfil = reader.result as string;
        this.form.patchValue({
          fileSource: reader.result,
        });
      };
    }
  }

  agregarActividad(perfil: HTMLInputElement) {
    /*let data = new FormData();
    data.append('perfil', perfil.files[0]);*/
    this.repository.insterActividad(this.form.value);
    document.getElementById('id_mensaje').style.display = 'block';
    this.form.reset();
    setInterval(() => {
      document.getElementById('id_mensaje').style.display = 'none';
    }, 10000);
  }
}
