import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaquillageRoutingModule } from './maquillage-routing.module';
import { MaquillageComponent } from './maquillage.component';


@NgModule({
  declarations: [
    MaquillageComponent
  ],
  imports: [
    CommonModule,
    MaquillageRoutingModule
  ]
})
export class MaquillageModule { }
