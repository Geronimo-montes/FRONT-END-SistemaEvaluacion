import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificacionService } from 'src/app/model/notificacion.service';
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
    private notificacion: NotificacionService) {
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
    this.notificacion.titulo = 'Notificacion de Prueba';
    this.notificacion.mensaje = '!Prueba exitosa!';
    this.notificacion.tipo = 'info';

    this.notificacion.showMensaje();
  }
}
