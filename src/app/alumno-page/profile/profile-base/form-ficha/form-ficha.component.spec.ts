import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFichaComponent } from './form-ficha.component';

describe('FormFichaComponent', () => {
  let component: FormFichaComponent;
  let fixture: ComponentFixture<FormFichaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFichaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
