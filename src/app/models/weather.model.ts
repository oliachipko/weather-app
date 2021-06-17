export interface WeatherModel {
  vis: number;
  rh: number;
  clouds: number;
  pres: number;
  pop: number;
  valid_date: string;
  temp: number;
  weather: {
    icon: string;
    code: number;
    description: string;
  }
  wind_cdir_full: string;
  wind_spd: number;
}
