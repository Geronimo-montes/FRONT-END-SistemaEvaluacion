import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadFormEvidenciaComponent } from './actividad-form-evidencia.component';

describe('ActividadFormEvidenciaComponent', () => {
  let component: ActividadFormEvidenciaComponent;
  let fixture: ComponentFixture<ActividadFormEvidenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActividadFormEvidenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadFormEvidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
