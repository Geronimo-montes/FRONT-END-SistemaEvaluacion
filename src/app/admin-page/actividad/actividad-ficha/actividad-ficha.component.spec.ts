import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadFichaComponent } from './actividad-ficha.component';

describe('ActividadFichaComponent', () => {
  let component: ActividadFichaComponent;
  let fixture: ComponentFixture<ActividadFichaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActividadFichaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
