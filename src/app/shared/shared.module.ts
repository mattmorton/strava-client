import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistancePipe } from './distance/distance.pipe';

@NgModule({
  declarations: [DistancePipe],
  imports: [
    CommonModule
  ],
  exports: [DistancePipe]
})
export class SharedModule { }
