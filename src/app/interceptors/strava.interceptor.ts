import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class StravaInterceptor implements HttpInterceptor {

  constructor(
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.indexOf(environment.stravaBaseUrl) === 0) {
      const token = localStorage.getItem('token');
      const modifiedRequest = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      })
      return next.handle(modifiedRequest);
    }
    return next.handle(request)
  }
}
