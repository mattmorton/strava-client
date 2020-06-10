import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { ActivityMapComponent } from './activity-map/activity-map.component';
import { ActivitySummaryComponent } from './activity-summary/activity-summary.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ActivityDetailComponent, ActivityMapComponent, ActivitySummaryComponent],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    GoogleMapsModule,
    SharedModule
  ],
  exports: [
    ActivityDetailComponent,
    ActivityMapComponent,
    ActivitySummaryComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ActivityModule { }
