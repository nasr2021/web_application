import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FcqRoutingModule } from './fcq-routing.module';
import { FcqComponent } from './fcq.component';


@NgModule({
  declarations: [
    FcqComponent
  ],
  imports: [
    CommonModule,
    FcqRoutingModule
  ]
})
export class FcqModule { }
