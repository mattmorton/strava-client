import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject(this.hasValidAccessToken());
  public isAuthenticated = this.isAuthenticated$.asObservable();

  constructor(
    private oauthService: OAuthService,
    private router: Router
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
      this.isAuthenticated$.next(this.hasValidAccessToken())
      switch (event.type) {
        case 'token_received':
          this.router.navigate(['athlete/detail']);
          break;
        case 'logout':
          this.router.navigate(['login']);
          break;
        default:
          break;
      }
    })
  }
  
  public initCodeFlow() {
    console.log('why not working!!')
    return this.oauthService.initCodeFlow();
  }

  public hasValidAccessToken() {
    return this.oauthService.hasValidAccessToken();
  }

  public logOut() {
    return this.oauthService.logOut();
  }



}
