import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadFormAprendizajeDiagnosticoComponent } from './actividad-form-aprendizaje-diagnostico.component';

describe('ActividadFormAprendizajeDiagnosticoComponent', () => {
  let component: ActividadFormAprendizajeDiagnosticoComponent;
  let fixture: ComponentFixture<ActividadFormAprendizajeDiagnosticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActividadFormAprendizajeDiagnosticoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadFormAprendizajeDiagnosticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
