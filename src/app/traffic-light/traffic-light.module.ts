import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrafficLightRoutingModule } from './traffic-light-routing.module';
import { TrafficLightComponent } from './traffic-light.component';


@NgModule({
  declarations: [
    TrafficLightComponent
  ],
  imports: [
    CommonModule,
    TrafficLightRoutingModule
  ]
})
export class TrafficLightModule { }
