import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isLoggedIn: Observable<any>;

  constructor(
    private authService: AuthService
  ) {
    this.isLoggedIn = this.authService.isAuthenticated;
  }

}
