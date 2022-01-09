import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherExploreComponent } from './weather-explore/weather-explore.component';
import { ExtarnalModule } from '../extarnal/extarnal.module';

@NgModule({
  declarations: [WeatherExploreComponent],
  imports: [CommonModule, WeatherRoutingModule, ExtarnalModule],
})
export class WeatherModule {}
