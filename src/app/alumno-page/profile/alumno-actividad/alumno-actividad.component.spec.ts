import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoActividadComponent } from './alumno-actividad.component';

describe('AlumnoActividadComponent', () => {
  let component: AlumnoActividadComponent;
  let fixture: ComponentFixture<AlumnoActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoActividadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
