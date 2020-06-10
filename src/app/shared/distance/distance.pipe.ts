import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distance'
})
export class DistancePipe implements PipeTransform {

  // all distance inputs from Strava as metres - convert to km
  // with varying decimal length.
  transform(value: number, accuracy: number = 2): string {
    if (!value) return null;
    return (value / 1000).toFixed(accuracy);
  }

}
