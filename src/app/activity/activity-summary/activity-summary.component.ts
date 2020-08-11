import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivityStats, ActivityTotal } from 'src/app/models/activity.model';


@Component({
  selector: 'app-activity-summary',
  templateUrl: './activity-summary.component.html',
  styleUrls: ['./activity-summary.component.scss']
})
export class ActivitySummaryComponent implements OnInit {

  @Input() data: ActivityStats;
  public selectedTab: string = 'run';
  public allTimeDisplayData: ActivityTotal;
  public recentDisplayData: ActivityTotal;

  constructor() {
    
  }

  ngOnInit(): void {
    this.allTimeDisplayData = this.data.all_run_totals;
    this.recentDisplayData = this.data.recent_run_totals;
  }

  switchTab(activity: string) {
    this.selectedTab = activity;

    switch (activity) {
      case 'ride':
        this.allTimeDisplayData = this.data.all_ride_totals;
        this.recentDisplayData = this.data.recent_ride_totals;
        break;
      case 'run':
        this.allTimeDisplayData = this.data.all_run_totals;
        this.recentDisplayData = this.data.recent_run_totals;
        break;
      case 'swim':
        this.allTimeDisplayData = this.data.all_swim_totals;
        this.recentDisplayData = this.data.recent_swim_totals;
        break;
      default:
        break;
    }
  }


}
