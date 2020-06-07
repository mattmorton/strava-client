import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StravaService } from './strava.service';

describe('StravaService', () => {
  let service: StravaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(StravaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
