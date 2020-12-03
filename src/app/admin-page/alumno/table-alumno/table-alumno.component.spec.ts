import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAlumnoComponent } from './table-alumno.component';

describe('TableAlumnoComponent', () => {
  let component: TableAlumnoComponent;
  let fixture: ComponentFixture<TableAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
