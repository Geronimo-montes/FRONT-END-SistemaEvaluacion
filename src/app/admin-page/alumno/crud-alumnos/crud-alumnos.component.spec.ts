import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAlumnosComponent } from './crud-alumnos.component';

describe('CrudAlumnosComponent', () => {
  let component: CrudAlumnosComponent;
  let fixture: ComponentFixture<CrudAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudAlumnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
