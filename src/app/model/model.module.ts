import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { DocenteRepository } from "./docente/docente.repository";
import { DocenteService } from "./docente/docente.service";
import { UsersService } from "./users/users.service";

@NgModule({
    imports:[
        HttpClientModule,
    ],
    providers:[
        UsersService,
        DocenteService,
        DocenteRepository,
    ]
})
export class ModelModule { }