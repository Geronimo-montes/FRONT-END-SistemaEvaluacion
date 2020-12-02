import { TestBed } from '@angular/core/testing';

import { DataSourceService } from '../dataSource.service';

describe('DocenteService', () => {
  let service: DataSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
