import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TrafficLightRoutingModule } from "./traffic-light-routing.module";
import { TrafficLightComponent } from "./traffic-light.component";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { SignalComponent } from "./signal/signal.component";
import { TrafficConfigurationModalComponent } from "./traffic-configuration-modal/traffic-configuration-modal.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    TrafficLightComponent,
    SignalComponent,
    TrafficConfigurationModalComponent,
  ],
  imports: [
    CommonModule,
    TrafficLightRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class TrafficLightModule {}
