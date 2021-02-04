import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRepository } from 'src/app/model/users/user.repository';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  animacion: boolean;

  constructor(
    private repository: UserRepository,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  get mensajeError(): string {
    return this.repository.getMensaje();
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      password: ['', Validators.required]
    });
  }

  isValidInput(fieldName): boolean {
    return this.loginForm.controls[fieldName].invalid &&
      (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
  }

  login() {
    this.animacion = true;
    const user = {
      email: this.loginForm.value['email'],
      password: this.loginForm.value['password'],
    };

    this.repository.login(user);
    setTimeout(() => {
      this.animacion = !this.animacion;
    }, 10000);
  }
}
