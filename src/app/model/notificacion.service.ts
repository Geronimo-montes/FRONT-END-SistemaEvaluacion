import { Injectable } from '@angular/core';
import { ToastData, ToastOptions, ToastyConfig, ToastyService } from 'ng2-toasty';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  constructor(
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig,
  ) { }

  set titulo(value: string) { this._titulo = value; }
  set mensaje(value: string) { this._mensaje = value; }
  set tipo(value: string) { this._tipo = value; }

  showMensaje() {
    let toastOptions: ToastOptions = {
      title: this._titulo,
      msg: this._mensaje,
      showClose: true,
      timeout: 10000,
      theme: 'bootstrap',
      onAdd: (toast: ToastData) => {
        //console.log(`Toast ${toast.id} has been added!`);
      },
      onRemove: function (toast: ToastData) {
        //console.log(`Toast ${toast.id} has been removed!`);
      }
    };

    switch (this._tipo) {
      case 'default':
        this.toastyService.default(toastOptions);
        break;
      case 'info':
        this.toastyService.info(toastOptions);
        break;
      case 'success':
        this.toastyService.success(toastOptions);
        break;
      case 'wait':
        this.toastyService.wait(toastOptions);
        break;
      case 'error':
        this.toastyService.error(toastOptions);
        break;
      case 'warning':
        this.toastyService.warning(toastOptions);
        break;
    }
  }

  private _titulo: string;
  private _mensaje: string;
  private _tipo: string;



}
