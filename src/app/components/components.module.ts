import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModelModule } from '../model/model.module';
import { SidebarAComponent } from './sidebar-alumno/sidebar.component';
import { NavbarAComponent } from './navbar-alumno/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    ModelModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    NavbarAComponent,
    SidebarComponent,
    SidebarAComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    NavbarAComponent,
    SidebarComponent,
    SidebarAComponent,
  ]
})
export class ComponentsModule { }
