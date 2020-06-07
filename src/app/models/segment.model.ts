import { Activity } from './activity.model';
import { Athlete } from './athlete.model';

export interface Segment {
  id: number;
  resource_state: number;
  name: string;
  activity_type: string;
  distance: number;
  average_grade: number;
  maximum_grade: number;
  elevation_high: number;
  elevation_low: number;
  start_latlng: number[];
  end_latlng: number[];
  climb_category: number;
  city: string;
  state: string;
  country: string;
  private: boolean;
  hazardous: boolean;
  starred: boolean;
}

export interface SegmentEffort {
  id: number;
  resource_state: number;
  name: string;
  activity: Activity;
  athlete: Athlete;
  elapsed_time: number;
  moving_time: number;
  start_date: Date;
  start_date_local: Date;
  distance: number;
  start_index: number;
  end_index: number;
  average_cadence: number;
  device_watts: boolean;
  average_watts: number;
  segment: Segment;
  kom_rank?: any;
  pr_rank?: any;
  achievements: any[];
  hidden: boolean;
}