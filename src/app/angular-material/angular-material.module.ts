import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

let Modules = [CommonModule, MatGridListModule];

@NgModule({
  declarations: [],
  imports: Modules,
  exports: Modules,
})
export class AngularMaterialModule {}
