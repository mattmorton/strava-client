import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { GoogleMap, MapPolyline } from '@angular/google-maps';

@Component({
  selector: 'app-activity-map',
  templateUrl: './activity-map.component.html',
  styleUrls: ['./activity-map.component.scss']
})
export class ActivityMapComponent implements OnInit, AfterViewInit {

  @Input() activity: any;
  @ViewChild(GoogleMap, {static: false})googleMap: GoogleMap;
  zoom: number;
  width: number;
  center: google.maps.LatLng;
  options: google.maps.MapOptions;
  polylineOptions: google.maps.PolylineOptions;
  path: google.maps.LatLng[];
  bounds: google.maps.LatLngBounds = new google.maps.LatLngBounds

  constructor() { }

  ngOnInit(): void {
    this.path = google.maps.geometry.encoding.decodePath(this.activity.map.summary_polyline);
    this.zoom = 15
    this.options = {
      mapTypeId: 'roadmap',
      zoomControl: false,
      mapTypeControl: false,
      streetViewControl: false
      
    }
    this.path.map((x) => {
      this.bounds.extend(x)

    })
    this.center = this.bounds.getCenter()
  }

  ngAfterViewInit(): void {
    this.googleMap.fitBounds(this.bounds);
  }

}
