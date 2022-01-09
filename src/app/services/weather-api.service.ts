import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  key = '4850342c56619e5ba0c502c2dd9ab4f1';
  baseUrl = 'https://api.openweathermap.org';
  constructor(private _http: HttpClient) {}
  searchWeatherByCity(city: string) {
    return this._http.get<any>(
      `${this.baseUrl}/data/2.5/weather?q=${city}&appid=${this.key}`
    );
  }
}
