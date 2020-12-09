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
  public inputDisable = false;
  private form: FormGroup;
  public imgPerfil: string;
  constructor(private repository: AlumnoRepository, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      perfil          : new FormControl('', { validators: [Validators.required] }),
      idAlumno        : new FormControl(this.alumnoSeleccionado['idAlumno'], { validators: [Validators.required] }),
      nombre          : new FormControl(this.alumnoSeleccionado['nombre'], { validators: [Validators.required] }),
      ap1             : new FormControl(this.alumnoSeleccionado['ap1'], { validators: [Validators.required] }),
      ap2             : new FormControl(this.alumnoSeleccionado['ap2'], { validators: [Validators.required] }),
      curp            : new FormControl(this.alumnoSeleccionado['curp'], { validators: [Validators.required] }),
      grupo           : new FormControl(this.alumnoSeleccionado['grupo'], { validators: [Validators.required] }),
      grado           : new FormControl(this.alumnoSeleccionado['grado'], { validators: [Validators.required] }),
      turno           : new FormControl(this.alumnoSeleccionado['turno'], { validators: [Validators.required] }),
     
      nombreTutor     : new FormControl(this.alumnoSeleccionado['nombreTutor'], { validators: [Validators.required] }),
      ap1Tutor        : new FormControl('', { validators: [Validators.required] }),
      ap2Tutor        : new FormControl('', { validators: [Validators.required] }),
      telefono        : new FormControl(this.alumnoSeleccionado['telefono'], { validators: [Validators.required] }),
      email           : new FormControl(this.alumnoSeleccionado['email'], { validators: [Validators.required] }),
      facebook        : new FormControl(this.alumnoSeleccionado['facebook'], { validators: [Validators.required] }),
      direccion       : new FormControl(this.alumnoSeleccionado['direccion'], { validators: [Validators.required] }),
    });

    this.imgPerfil = this.alumnoSeleccionado['rutaPerfil'];
  }

  get alumnoSeleccionado(): Alumno {
    return this.repository.getalumnoSeleccionado();
  }
  get mensaje(): string {
    return this.repository.getMensaje();
  }
  get tipoMensaje(): string {
    return this.repository.getTipoMensaje();
  }
  get formDestino(): string {
    return this.repository.getFormDestino();
  }
  
  load(event){
    const reader = new FileReader();    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      
      reader.onload = () => {
        this.imgPerfil = reader.result as string;
        this.form.patchValue({
          fileSource: reader.result
        });
      };
    }
  }

  updateAlumno(form: FormGroup): void {
    this.repository.updateAlumno(form.value);
  }

}
