import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ActivityModule } from '../activity/activity.module';
import { AthleteRoutingModule } from './athlete-routing.module';
import { AthleteDetailComponent } from './athlete-detail/athlete-detail.component';
import { AthleteSummaryComponent } from './athlete-summary/athlete-summary.component';


@NgModule({
  declarations: [AthleteDetailComponent, AthleteSummaryComponent],
  imports: [
    CommonModule,
    AthleteRoutingModule,
    FontAwesomeModule,
    ActivityModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AthleteModule {
  constructor() {}
}
