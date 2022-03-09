import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe((d) => {
      if (d.access_token) {
        this.authService.setAuthenticatedUser(d.access_token);
        this.router.navigate(['athlete/detail'])
      }
    })
  }

  ngOnInit(): void {
  }

  initCodeFlow() {
    this.authService.initCodeFlow();
  }

}
