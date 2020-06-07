import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { OAuthService } from 'angular-oauth2-oidc';
import { RouterTestingModule } from '@angular/router/testing';

export class MockOAuthService {
  hasValidAccessToken = () => {
    return true;
  }
}

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let oauthService: OAuthService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: OAuthService, useClass: MockOAuthService}
      ]
    });
    guard = TestBed.inject(AuthGuard);
    oauthService = TestBed.get(OAuthService)
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
