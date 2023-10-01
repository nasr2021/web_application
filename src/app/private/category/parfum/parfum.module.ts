import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParfumRoutingModule } from './parfum-routing.module';
import { ParfumComponent } from './parfum.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ParfumComponent
  ],
  imports: [
    CommonModule,
    ParfumRoutingModule,
    HttpClientModule
  ]
})
export class ParfumModule { }
