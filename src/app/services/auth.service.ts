import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject(this.hasValidAccessToken());
  public isAuthenticated = this.isAuthenticated$.asObservable();

  constructor(
    private oauthService: OAuthService
  ) {
  }

  public initAuthLibrary() {
    this.configure();
    this.tryLoginCodeFlow();
    this.handleAuthEvents();
  }

  private configure() {
    return this.oauthService.configure(environment.stravaOAuth);
  }

  private tryLoginCodeFlow() {
    return this.oauthService.tryLoginCodeFlow();
  }

  private handleAuthEvents() {
    return this.oauthService.events.subscribe((event) => {
      console.log('auth event!', event);
      this.isAuthenticated$.next(this.hasValidAccessToken())
    })
  }
  
  public initCodeFlow() {
    return this.oauthService.initCodeFlow();
  }

  public hasValidAccessToken() {
    return this.oauthService.hasValidAccessToken();
  }

  public logOut() {
    this.isAuthenticated$.next(false);
    return this.oauthService.logOut();
  }



}
