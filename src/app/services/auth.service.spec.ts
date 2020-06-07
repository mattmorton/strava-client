import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { OAuthService } from 'angular-oauth2-oidc';

export class MockOAuthService {
  hasValidAccessToken = () => {
    return true;
  }

  configure = () => {
    return;
  }

  tryLoginCodeFlow = () => {
    return Promise.resolve();
  }

  handleAuthEvents = () => {
    return;
  }
  
}

describe('AuthService', () => {
  let service: AuthService;
  let oauthService: OAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: OAuthService, useClass: MockOAuthService },

      ]
    });
    service = TestBed.inject(AuthService);
    oauthService = TestBed.get(OAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
