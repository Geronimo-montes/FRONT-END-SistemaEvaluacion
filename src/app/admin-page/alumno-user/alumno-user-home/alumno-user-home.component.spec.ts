import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoUserHomeComponent } from './alumno-user-home.component';

describe('AlumnoUserHomeComponent', () => {
  let component: AlumnoUserHomeComponent;
  let fixture: ComponentFixture<AlumnoUserHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoUserHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoUserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
