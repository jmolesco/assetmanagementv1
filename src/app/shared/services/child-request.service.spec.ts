import { TestBed } from '@angular/core/testing';

import { ChildRequestService } from './child-request.service';

describe('ChildRequestService', () => {
  let service: ChildRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChildRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
