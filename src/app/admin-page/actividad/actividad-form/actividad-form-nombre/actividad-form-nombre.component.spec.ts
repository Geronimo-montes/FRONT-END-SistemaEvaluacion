import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadFormNombreComponent } from './actividad-form-nombre.component';

describe('ActividadFormNombreComponent', () => {
  let component: ActividadFormNombreComponent;
  let fixture: ComponentFixture<ActividadFormNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActividadFormNombreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadFormNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
