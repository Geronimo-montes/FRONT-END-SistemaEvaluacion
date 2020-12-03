import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaInformacionComponent } from './ficha-informacion.component';

describe('FichaInformacionComponent', () => {
  let component: FichaInformacionComponent;
  let fixture: ComponentFixture<FichaInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaInformacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
