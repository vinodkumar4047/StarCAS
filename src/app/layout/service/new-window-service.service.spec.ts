import { TestBed } from '@angular/core/testing';

import { NewWindowServiceService } from './new-window-service.service';

describe('NewWindowServiceService', () => {
  let service: NewWindowServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewWindowServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
