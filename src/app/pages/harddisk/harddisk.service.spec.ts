import { TestBed } from '@angular/core/testing';

import { HarddiskService } from './harddisk.service';

describe('HarddiskService', () => {
  let service: HarddiskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HarddiskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
