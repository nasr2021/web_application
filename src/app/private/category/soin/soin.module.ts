import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoinRoutingModule } from './soin-routing.module';
import { SoinComponent } from './soin.component';


@NgModule({
  declarations: [SoinComponent],
  imports: [
    CommonModule,
    SoinRoutingModule
  ]
})
export class SoinModule { }
