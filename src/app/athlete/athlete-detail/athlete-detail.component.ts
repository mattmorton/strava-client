import { Component, OnInit } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { StravaService } from 'src/app/services/strava.service';
import { map, catchError, concatMap, retry } from 'rxjs/operators';

@Component({
  selector: 'app-athlete-detail',
  templateUrl: './athlete-detail.component.html',
  styleUrls: ['./athlete-detail.component.scss']
})
export class AthleteDetailComponent implements OnInit {
  public data$: Observable<any>;
  public activities$: Observable<any>;

  constructor(
    private stravaService: StravaService
  ) {
    this.data$ = this.stravaService.getAuthenticatedAthlete().pipe(
      retry(2),
      concatMap((athlete) => {
        return this.stravaService.getAthleteStats(athlete.id).pipe(
          retry(2),
          map((stats) => {
            return {athlete, stats }
          }),
          catchError((error) => {
            return of({ athlete, error })
          })
        )
      }),
      catchError((e) => {
        return throwError(e)
      })
    )
    this.activities$ = this.stravaService.getActivities().pipe(
      retry(2),
      map((res) => res.slice(0, 50)),
      catchError((e) => {
        return throwError(e)
      })
    )
  }

  ngOnInit(): void {
  }

}
