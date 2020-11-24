import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from "../../users/users.service";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;

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
    const user = {email: this.email, password: this.password };
    this.userService.login(user).subscribe(data => {
      //this.userService.setToken(data.token);
      //this.router.navigateByUrl('/');
      console.log("Valor data: " + data[0]['token']);
    });
  }
}
