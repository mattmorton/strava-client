import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import { StravaService } from '../services/strava.service';

@Injectable()
export class StravaInterceptor implements HttpInterceptor {

  constructor(
    private oauthService: OAuthService,
    private stravaService: StravaService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.indexOf(environment.stravaBaseUrl) === 0) {
      const modifiedRequest = request.clone({
        headers: request.headers.set('Authorization', this.oauthService.authorizationHeader())
      })
      return next.handle(modifiedRequest);
    }
    return next.handle(request)
  }
}
