import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoBaseComponent } from './alumno-base.component';

describe('AlumnoBaseComponent', () => {
  let component: AlumnoBaseComponent;
  let fixture: ComponentFixture<AlumnoBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
