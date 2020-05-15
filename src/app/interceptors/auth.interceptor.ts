import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import { StravaService } from '../services/strava.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private stravaService: StravaService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {      
      return next.handle(request).pipe(
        tap((res) => {
          if (res instanceof HttpResponse) {
            if (res.body.athlete) {
              console.log(res.body.athlete);
              this.stravaService.athlete$.next(res.body.athlete)
            }
          }
        
          
         // this.stravaService.athlete$.next(res.body.athlete)
        })
      );
    // return next.handle(request)
  }
}
