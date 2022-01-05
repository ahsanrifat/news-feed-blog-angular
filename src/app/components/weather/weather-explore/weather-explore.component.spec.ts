import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherExploreComponent } from './weather-explore.component';

describe('WeatherExploreComponent', () => {
  let component: WeatherExploreComponent;
  let fixture: ComponentFixture<WeatherExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherExploreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
