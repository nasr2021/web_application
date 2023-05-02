import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParfumRoutingModule } from './parfum-routing.module';
import { ParfumComponent } from './parfum.component';


@NgModule({
  declarations: [
    ParfumComponent
  ],
  imports: [
    CommonModule,
    ParfumRoutingModule
  ]
})
export class ParfumModule { }
