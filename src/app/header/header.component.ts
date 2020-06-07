import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn: boolean;

  constructor(
    private authService: AuthService
  ) {

  }

  ngOnInit(): void {
    this.authService.isAuthenticated.subscribe((data) => {
      this.isLoggedIn = data;
      console.log(data);
      
    })
  }

  initCodeFlow() {
    this.authService.initCodeFlow();
  }

  logOut() {
    this.authService.logOut();
  }

}
