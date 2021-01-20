import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioBaseComponent } from './calendario-base.component';

describe('CalendarioBaseComponent', () => {
  let component: CalendarioBaseComponent;
  let fixture: ComponentFixture<CalendarioBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
