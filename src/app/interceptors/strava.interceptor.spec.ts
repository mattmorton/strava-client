import { TestBed } from '@angular/core/testing';

import { StravaInterceptor } from './strava.interceptor';

describe('StravaInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      StravaInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: StravaInterceptor = TestBed.inject(StravaInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
