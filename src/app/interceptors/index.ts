import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { StravaInterceptor } from './strava.interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: StravaInterceptor, multi: true }
];