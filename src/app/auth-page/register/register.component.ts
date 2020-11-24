import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../model/users/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    this.email = this.registerForm.value['email'];
    this.password = this.registerForm.value['password'];

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
