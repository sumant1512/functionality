import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DummyPageComponent } from "./dummy-page/dummy-page.component";

const routes: Routes = [
  { path: "", redirectTo: "traffic-light", pathMatch: "full" },
  { path: "dummy-page", component: DummyPageComponent },
  {
    path: "traffic-light",
    loadChildren: () =>
      import("./traffic-light/traffic-light.module").then(
        (m) => m.TrafficLightModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
