import {Component} from '@angular/core';
import {WeatherService} from './services/weather.service';
import {WeatherModel} from './models/weather.model';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  city = '';
  selectedCity = '';
  weatherData: WeatherModel[] = [];

  constructor(private weatherService: WeatherService) {
  }

  getWeather(days: number): void {
    if (!this.city.trim()) return;
    this.weatherService.getWeather(this.city, days).pipe(take(1)).subscribe(data => {
      this.selectedCity = data.city_name;
      this.weatherData = data.data;
    });
  }

}
