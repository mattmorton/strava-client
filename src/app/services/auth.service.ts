import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';
import { StravaService } from './strava.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private oauthService: OAuthService,
    private stravaService: StravaService
  ) {
    this.configure();
    this.tryLoginCodeFlow();
    this.handleAuthEvents();
  }

  private configure() {
    return this.oauthService.configure(environment.stravaOAuth);
  }

  public initCodeFlow() {
    return this.oauthService.initCodeFlow();
  }

  private tryLoginCodeFlow() {
    return this.oauthService.tryLoginCodeFlow();
  }

  public authorizationHeader() {
    return this.oauthService.authorizationHeader();
  }

  public revokeTokenAndLogout() {
    return this.oauthService.revokeTokenAndLogout();
  }

  private handleAuthEvents() {
    return this.oauthService.events.subscribe((event) => {
      console.log('event', event);
    })
  }

}
