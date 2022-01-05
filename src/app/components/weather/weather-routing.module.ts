import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherExploreComponent } from './weather-explore/weather-explore.component';

const routes: Routes = [{ path: '', component: WeatherExploreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherRoutingModule {}
