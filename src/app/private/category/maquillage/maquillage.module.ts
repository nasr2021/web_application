import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaquillageRoutingModule } from './maquillage-routing.module';
import { MaquillageComponent } from './maquillage.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MaquillageComponent
  ],
  imports: [
    CommonModule,
    MaquillageRoutingModule,
    HttpClientModule
  ]
})
export class MaquillageModule { }
