import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadTableComponent } from './actividad-table.component';

describe('ActividadTableComponent', () => {
  let component: ActividadTableComponent;
  let fixture: ComponentFixture<ActividadTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActividadTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
