import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoUserBaseComponent } from './alumno-user-base.component';

describe('AlumnoUserBaseComponent', () => {
  let component: AlumnoUserBaseComponent;
  let fixture: ComponentFixture<AlumnoUserBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoUserBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoUserBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
