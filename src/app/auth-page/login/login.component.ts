import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from "../../model/users/users.service";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  loginValidate = true;
  mensajeError: string;
  email: string;
  password: string;

  constructor(public userService: UsersService, public router: Router, private fb: FormBuilder) { }
   
  ngOnInit(): void {
    this.initForm();
  }
  ngOnDestroy() { }

  initForm(): void{
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
    this.email = this.loginForm.value['email'];
    this.password = this.loginForm.value['password'];

    const user = {email: this.email, password: this.password };
    this.userService.login(user).subscribe(data => {
      if(data[0]['token'] !== undefined) {
        this.userService.setToken(data[0]['token']);
        this.loginValidate = true;
        this.router.navigateByUrl('/profile');
      } else {
        this.loginValidate = false;
        this.mensajeError = data[0]['error'];
      }
    });
  }
}
