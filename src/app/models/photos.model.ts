export interface Photos {
  primary: {
    id?: any;
    unique_id: string;
    urls: {
      100: string;
      600: string;
    }
    source: number;
  };
  use_primary_photo: boolean;
  count: number;
}
