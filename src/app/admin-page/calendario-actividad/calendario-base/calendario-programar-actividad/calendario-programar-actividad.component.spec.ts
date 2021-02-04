import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioProgramarActividadComponent } from './calendario-programar-actividad.component';

describe('CalendarioProgramarActividadComponent', () => {
  let component: CalendarioProgramarActividadComponent;
  let fixture: ComponentFixture<CalendarioProgramarActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioProgramarActividadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioProgramarActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
