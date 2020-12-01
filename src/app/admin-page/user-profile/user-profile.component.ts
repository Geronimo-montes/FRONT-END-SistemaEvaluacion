import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DocenteRepository } from '../../model/docente/docente.repository';
import { Docente } from '../../model/docente/docente.model';
import { validarQueSeanIguales } from './user-profile.validator';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
  private form: FormGroup;
  private formUser: FormGroup;
  inputDisable: boolean = true;
  validUserUpdate: boolean = false;
  validDocenteUpdate: boolean = false;

  constructor(private repository: DocenteRepository, private fb: FormBuilder) { } 

  ngOnInit(): void { 
    this.delay(1000);
    this.initForm();
    this.initFormUser();
  }
  
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>this.setValue()); 
  }

  initForm(): void{
    this.form = this.fb.group({
      idDocente       : new FormControl('' , { validators: [Validators.required] }),
      nombre          : new FormControl('' , { validators: [Validators.required, Validators.minLength(4), Validators.pattern('[A-Za-z ][A-Za-z ]*')] }),
      ap1             : new FormControl('' , { validators: [Validators.required, Validators.minLength(4), Validators.pattern('[A-Za-z][A-Za-z]*')] }),
      ap2             : new FormControl('' , { validators: [Validators.required, Validators.minLength(4), Validators.pattern('[A-Za-z][A-Za-z]*')] }),
      curp            : new FormControl('' , { validators: [Validators.required, Validators.minLength(18), Validators.maxLength(18)] }),
      rfc             : new FormControl('' , { validators: [Validators.required, Validators.minLength(13), Validators.maxLength(13)] }),
      direccion       : new FormControl('' , { validators: [Validators.required] }),
      telefono        : new FormControl('' , { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(10), Validators.pattern('[0-9]*')] }),
      facebook        : new FormControl('' , { validators: [Validators.required] }),
      grupo           : new FormControl('' , { validators: [Validators.required] }),
      grado           : new FormControl('' , { validators: [Validators.required] }),
      turno           : new FormControl('' , { validators: [Validators.required] }),
      rol             : new FormControl('' , { validators: [Validators.required] }),
      estatus         : new FormControl('' , { validators: [Validators.required] }),
    });
  }

  initFormUser(): void{
    this.formUser = this.fb.group({
      email           : new FormControl('' , { validators: [Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]}),
      password        : new FormControl('' , { validators: [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,20}$')]}),
      passwordConfirm : new FormControl('' , { validators: [Validators.required] }),
    },{
      validators: validarQueSeanIguales
    });
  }

  isValidInput(fieldName, etiqueta): string {
    if(this.form.controls[fieldName].value == '')
      return '';
    else if (this.form.controls[fieldName].invalid && (this.form.controls[fieldName].dirty || this.form.controls[fieldName].touched))
      return (etiqueta == 'div') ? 'has-danger' : 'is-invalid';
    else
    return (etiqueta == 'div') ? 'has-success' : 'is-valid';
  }

  isValidInputUser(fieldName, etiqueta): string {
    if(this.formUser.controls[fieldName].value == '')
      return '';
    else if (this.formUser.controls[fieldName].invalid && (this.formUser.controls[fieldName].dirty || this.formUser.controls[fieldName].touched))
      return (etiqueta == 'div') ? 'has-danger' : 'is-invalid';
    else 
    return (etiqueta == 'div') ? 'has-success' : 'is-valid';
  }

  isValidPasswordConfirm(): boolean{
    if(this.formUser.controls['passwordConfirm'].value.length > 0)
      if(this.formUser.controls['password'].value == this.formUser.controls['passwordConfirm'].value){
        return false;
      }else{
        return true;
      }
  }

  cambiarTipo(nombre:string) {
  //sin implmentar aun....
    let elemento :any = document.getElementById(nombre);
    elemento.type = elemento.type == "text"? "password" : "text";
  }

  setValue() {
    this.form.patchValue({
      idDocente: this.docente.idDocente,
      nombre: this.docente.nombre,
      ap1:  this.docente.ap1,
      ap2:  this.docente.ap2,
      curp: this.docente.curp,
      rfc:  this.docente.rfc,
      direccion:  this.docente.direccion,
      telefono: this.docente.telefono,
      facebook: this.docente.facebook,
      grupo: this.docente.grupo,
      grado: this.docente.grado,
      turno: this.docente.turno,
      rol: this.docente.rol,
      estatus: this.docente.estatus,
    });

    this.formUser.patchValue({
      email: this.docente.email
    });
  }

  validForm(): boolean {
    return !(!this.inputDisable && this.form.valid);
  }

  get docente(): Docente{ 
    return this.repository.getDocente();
  }

  get mensaje(): string {
    return this.repository.getMensaje();
  }

  get tipoMensaje(): string {
    return this.repository.getTipoMensaje();
  }
  
  updateDocente(): void{
    const docente = {
      idDocente_docente:  this.form.controls['idDocente'].value,
      nombre_docente:     this.form.controls['nombre'].value,
      ap1_docente:        this.form.controls['ap1'].value,
      ap2_docente:        this.form.controls['ap2'].value,
      curp_docente:       this.form.controls['curp'].value,
      rfc_docente:        this.form.controls['rfc'].value,
      direccion_docente:  this.form.controls['direccion'].value,
      telefono_docente:   this.form.controls['telefono'].value,
      facebook_docente:   this.form.controls['facebook'].value,
      grupo_docente:      this.form.controls['grupo'].value,
      grado_docente:      this.form.controls['grado'].value,
      turno_docente:      this.form.controls['turno'].value,
      rol_docente:        this.form.controls['rol'].value,
      estatus_docente:    this.form.controls['estatus'].value,    
    };
    this.repository.updateDocnete(docente);
    this.validDocenteUpdate = true;
    this.validUserUpdate = false;
  }

  updateUser(): void {
    const user= { 
      email: this.formUser.controls['email'].value, 
      password: this.formUser.controls['password'].value,
      id: this.form.controls['idDocente'].value,
    };

    this.repository.updateUser(user);
    this.validDocenteUpdate = false;
    this.validUserUpdate = true;
  }
}