import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StravaService {

  public athlete$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { }

  set athlete(athlete: any) {
    this.athlete$.next(athlete)
  }

}
