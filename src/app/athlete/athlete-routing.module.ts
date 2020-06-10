import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AthleteDetailComponent } from './athlete-detail/athlete-detail.component';
import { AthleteSummaryComponent } from './athlete-summary/athlete-summary.component';

const routes: Routes = [
  {
    path: 'detail',
    component: AthleteDetailComponent
  },
  {
    path: 'summary',
    component: AthleteSummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AthleteRoutingModule { }
