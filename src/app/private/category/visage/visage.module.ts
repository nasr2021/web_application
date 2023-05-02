import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisageRoutingModule } from './visage-routing.module';
import { VisageComponent } from './visage.component';


@NgModule({
  declarations: [
    VisageComponent
  ],
  imports: [
    CommonModule,
    VisageRoutingModule
  ]
})
export class VisageModule { }
