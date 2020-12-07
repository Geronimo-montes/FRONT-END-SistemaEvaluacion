import { TestBed } from '@angular/core/testing';

import { ActividadGuard } from './actividad.guard';

describe('ActividadGuard', () => {
  let guard: ActividadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActividadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
