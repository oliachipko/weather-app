import {Component, Input, OnInit} from '@angular/core';
import {WeatherModel} from '../../models/weather.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
  @Input() selectedCity!: string;
  @Input() weather!: WeatherModel;
  constructor() { }

  ngOnInit(): void {
  }

}
