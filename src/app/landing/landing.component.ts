import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.route.queryParamMap.subscribe((d) => {
      console.log(d);
      
    })
  }

  ngOnInit(): void {
  }

  initCodeFlow() {
    this.authService.initCodeFlow();
  }

}
