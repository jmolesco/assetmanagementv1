import { TestBed } from '@angular/core/testing';

import { VideocardService } from './videocard.service';

describe('VideocardService', () => {
  let service: VideocardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideocardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
