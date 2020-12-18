import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadFormTipoComponent } from './actividad-form-tipo.component';

describe('ActividadFormTipoComponent', () => {
  let component: ActividadFormTipoComponent;
  let fixture: ComponentFixture<ActividadFormTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActividadFormTipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadFormTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
