import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrafficLightComponent } from './traffic-light.component';

const routes: Routes = [{ path: '', component: TrafficLightComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrafficLightRoutingModule {}
