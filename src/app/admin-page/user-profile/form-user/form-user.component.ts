import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/model/users/user.model';
import { UserRepository } from 'src/app/model/users/user.repository';
import { validarQueSeanIguales } from './user-profile.validator';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  formUser: FormGroup;

  constructor(
    private repositoryUser: UserRepository,
    private fb: FormBuilder,
  ) { }

  get usuario(): Usuario {
    return this.repositoryUser.getUsuario();
  }

  ngOnInit(): void {
    this.formUser = this.fb.group({
      email: new FormControl(this.usuario.email, { validators: [Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')] }),
      password: new FormControl('', { validators: [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,20}$')] }),
      passwordConfirm: new FormControl('', { validators: [Validators.required] }),
    }, {
      validators: validarQueSeanIguales
    });
  }

  isValidPasswordConfirm(): string {
    if (this.formUser.controls['passwordConfirm'].value == '')
      return '';
    else if (this.formUser.controls['passwordConfirm'].value.length > 0)
      if (this.formUser.controls['password'].value === this.formUser.controls['passwordConfirm'].value) {
        return 'is-valid';
      } else {
        return 'is-invalid';
      }
  }

  isValidInput(fieldName, form): string {
    if (form.controls[fieldName].value == '')
      return '';
    else
      return (form.controls[fieldName].invalid
        && (form.controls[fieldName].dirty
          || form.controls[fieldName].touched)) ? 'is-invalid' : 'is-valid';
  }

  updateUser(): void {
    const user = {
      email: this.formUser.controls['email'].value,
      password: this.formUser.controls['password'].value,
      id: this.usuario.idUsuario,
    };

    this.repositoryUser.updateUser(user);
  }
}
