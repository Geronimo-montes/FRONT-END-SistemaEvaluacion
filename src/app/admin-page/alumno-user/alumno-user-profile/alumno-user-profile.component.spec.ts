import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoUserProfileComponent } from './alumno-user-profile.component';

describe('AlumnoUserProfileComponent', () => {
  let component: AlumnoUserProfileComponent;
  let fixture: ComponentFixture<AlumnoUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoUserProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
