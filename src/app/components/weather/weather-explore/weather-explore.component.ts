import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-weather-explore',
  templateUrl: './weather-explore.component.html',
  styleUrls: ['./weather-explore.component.scss'],
})
export class WeatherExploreComponent implements OnInit {
  // @ViewChild('city') city: any;
  cityName: any;
  dailyWeatherData: any;
  constructor(private weatherApi: WeatherApiService) {}

  ngOnInit(): void {}
  getWeatherDataOfACity() {
    console.log('City-->', this.cityName);
    this.weatherApi.searchWeatherByCity(this.cityName).subscribe((data) => {
      this.dailyWeatherData = data;
      console.log('Weather Data-->', data);
    });
  }
}
