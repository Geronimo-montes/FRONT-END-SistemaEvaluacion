import { Injectable, OnInit } from "@angular/core";
import { Docente } from "./docente.model";
import { UsersService } from "../users/users.service";
import { DocenteService } from "./docente.service";

@Injectable()
export class DocenteRepository{
    private docente: Docente;
    private mensaje: string;

    constructor(private docenteService: DocenteService, private userService: UsersService) { 
        this.userService.validarUser().subscribe((data) => {
            if(data['success'])
                this.docenteService.getDocenteById(data['id']).subscribe((data) => {
                    this.docente = <Docente>data[0];
                });
        });
    }

    getDocente(): Docente {
        return this.docente;
    }

    getMensaje(): string {
        return this.mensaje;
    }

    updateDocnete(docente: any): void {
        this.userService.validarUser().subscribe((data) => {
            if(data['success'])
                this.docenteService.updateDocenteById(docente).subscribe((data) => {
                    this.docente = <Docente>data[0];
                });
        });
    }

    updateUser(user: any): void{ 
        this.userService.validarUser().subscribe((data) => {
            if(data['success'])
                this.userService.updateUser(user).subscribe((data) => {
                    if(data['success'])
                        this.mensaje = data['mensaje'];
                    else
                        this.mensaje= data['mensaje'];
                });
        });
    }
}