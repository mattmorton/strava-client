import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';
import { StravaService } from './services/strava.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public athlete$: Observable<any>;

  constructor(
    private authService: AuthService,
    private stravaService: StravaService
  ) {
    this.athlete$ = this.stravaService.athlete$;
  }

  initCodeFlow() {
    this.authService.initCodeFlow();
  }

  revokeTokenAndLogout() {
    this.authService.revokeTokenAndLogout();
  }
}
