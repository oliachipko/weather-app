import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  key = '99280b84429f47b08ad51547375e6e4b';
  constructor(private httpClient: HttpClient) { }

  getWeather(city: string, days: number): Observable<any> {
    return this.httpClient.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&days=${days}&key=${this.key}`);
  }
}
