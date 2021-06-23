import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatGridListModule } from "@angular/material/grid-list";
import { MatCommonModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDialogModule } from "@angular/material/dialog";

let Modules = [
  CommonModule,
  MatGridListModule,
  MatCommonModule,
  MatButtonModule,
  MatToolbarModule,
  MatDialogModule,
];

@NgModule({
  declarations: [],
  imports: Modules,
  exports: Modules,
})
export class AngularMaterialModule {}
