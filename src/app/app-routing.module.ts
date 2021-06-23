import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'traffic-light', pathMatch: 'full' },
  {
    path: 'traffic-light',
    loadChildren: () =>
      import('./traffic-light/traffic-light.module').then(
        (m) => m.TrafficLightModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
