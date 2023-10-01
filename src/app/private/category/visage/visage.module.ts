import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisageRoutingModule } from './visage-routing.module';
import { VisageComponent } from './visage.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    VisageComponent
  ],
  imports: [
    CommonModule,
    VisageRoutingModule,
    HttpClientModule
  ]
})
export class VisageModule { }
