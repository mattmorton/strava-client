import { Injectable } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader"
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private googleMapsLoaded$ = new BehaviorSubject(false)
  public googleMapsLoaded = this.googleMapsLoaded$.asObservable();

  constructor() {
    // const loader = new Loader({
    //   apiKey: environment.googleApiKey,
    //   version: 'quarterly',
    //   libraries: ['geometry']
    // })
    // loader.load().then((res) => {
    //   console.log('ok', res)
    //   this.googleMapsLoaded$.next(true)
    // }).catch(() => {
    //   console.log('no good')
    //   this.googleMapsLoaded$.next(false)
    // })
  }
}
