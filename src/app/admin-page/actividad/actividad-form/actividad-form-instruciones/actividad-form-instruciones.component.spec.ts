import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadFormInstrucionesComponent } from './actividad-form-instruciones.component';

describe('ActividadFormInstrucionesComponent', () => {
  let component: ActividadFormInstrucionesComponent;
  let fixture: ComponentFixture<ActividadFormInstrucionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActividadFormInstrucionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadFormInstrucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
