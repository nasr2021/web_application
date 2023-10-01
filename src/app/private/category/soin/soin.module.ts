import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoinRoutingModule } from './soin-routing.module';
import { SoinComponent } from './soin.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [SoinComponent],
  imports: [
    CommonModule,
    SoinRoutingModule,
    HttpClientModule
  ]
})
export class SoinModule { }
