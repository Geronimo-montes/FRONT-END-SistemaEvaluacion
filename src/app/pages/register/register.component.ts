import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  email: string;
  password: string;
  confirmPassword: string;
  passwordError: boolean;

  constructor(public userService: UsersService, private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  isValidInput(fieldName): boolean {
    return this.registerForm.controls[fieldName].invalid &&
      (this.registerForm.controls[fieldName].dirty || this.registerForm.controls[fieldName].touched);
  }

  register() {
    const user = { email: this.email, password: this.password };
    this.userService.register(user).subscribe(data => {
      //this.userService.setToken(data.token);
      console.log("Valor data: " + data[0]['nombre']);
    },
    error => {
      console.log(error);
    });
  }


}
