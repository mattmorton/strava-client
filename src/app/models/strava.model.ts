export interface Gear {
  id: string;
  primary: boolean;
  name: string;
  resource_state: number;
  distance: number;
}

export interface Athlete {
  id: number;
  username: string;
  resource_state: number;
  firstname: string;
  lastname: string;
  city: string;
  state: string;
  country: string;
  sex: string;
  premium: boolean;
  created_at: Date;
  updated_at: Date;
  badge_type_id: number;
  profile_medium: string;
  profile: string;
  friend?: any;
  follower?: any;
  follower_count: number;
  friend_count: number;
  mutual_friend_count: number;
  athlete_type: number;
  date_preference: string;
  measurement_preference: string;
  clubs: any[];
  ftp?: any;
  weight: number;
  bikes: Gear[];
  shoes: Gear[];
}


  export interface AthleteStatTotals {
      distance: number;
      achievement_count: number;
      count: number;
      elapsed_time: number;
      elevation_gain: number;
      moving_time: number;
  }

  export interface AthleteStats {
      recent_run_totals: AthleteStatTotals;
      all_run_totals: string;
      recent_swim_totals: AthleteStatTotals;
      biggest_ride_distance: number;
      ytd_swim_totals: string;
      all_swim_totals: string;
      recent_ride_totals: AthleteStatTotals;
      biggest_climb_elevation_gain: number;
      ytd_ride_totals: string;
      all_ride_totals: string;
      ytd_run_totals: string;
  }
