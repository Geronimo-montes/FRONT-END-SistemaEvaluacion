import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastData, ToastOptions, ToastyConfig, ToastyService } from 'ng2-toasty';
import { Observable, Subscription, timer } from 'rxjs';
import { UserRepository } from 'src/app/model/users/user.repository';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    public repositiry: UserRepository,
    private fb: FormBuilder,
    private toastyService: ToastyService, private toastyConfig: ToastyConfig) {
    //this.toastyConfig.theme = 'bootstrap';
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
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
    let toastOptions: ToastOptions = {
      title: 'Prueba Toasty',
      msg: 'Contenido MSM',
      showClose: true,
      timeout: 50000,
      theme: 'bootstrap',
      onAdd: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: function (toast: ToastData) {
        console.log('Toast ' + toast.id + ' has been removed!');
      }
    };

    this.toastyService.default(toastOptions);
    this.toastyService.info(toastOptions);
    this.toastyService.success(toastOptions);
    this.toastyService.wait(toastOptions);
    this.toastyService.error(toastOptions);
    this.toastyService.warning(toastOptions);
  }
}
