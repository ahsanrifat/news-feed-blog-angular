import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherExploreComponent } from './weather-explore/weather-explore.component';

@NgModule({
  declarations: [
    WeatherExploreComponent
  ],
  imports: [CommonModule, WeatherRoutingModule],
})
export class WeatherModule {}
