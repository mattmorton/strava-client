import { TestBed } from '@angular/core/testing';

import { StravaInterceptor } from './strava.interceptor';
import { StravaService } from '../services/strava.service';
import { AuthService } from '../services/auth.service';
import { OAuthService } from 'angular-oauth2-oidc';

export class MockStravaService {

}

export class MockOAuthService {

}

describe('StravaInterceptor', () => {
  let oauthService: OAuthService;
  let stravaService: StravaService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      StravaInterceptor,
      { provide: StravaService, useClass: MockStravaService },
      { provide: OAuthService, useClass: MockOAuthService }
    ]
  }));

  it('should be created', () => {
    const interceptor: StravaInterceptor = TestBed.inject(StravaInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
