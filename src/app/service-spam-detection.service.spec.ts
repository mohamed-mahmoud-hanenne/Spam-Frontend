import { TestBed } from '@angular/core/testing';

import { ServiceSpamDetectionService } from './service-spam-detection.service';

describe('ServiceSpamDetectionService', () => {
  let service: ServiceSpamDetectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSpamDetectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
