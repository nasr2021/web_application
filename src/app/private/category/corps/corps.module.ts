import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorpsRoutingModule } from './corps-routing.module';
import { CorpsComponent } from './corps.component';


@NgModule({
  declarations: [
    CorpsComponent
  ],
  imports: [
    CommonModule,
    CorpsRoutingModule
  ]
})
export class CorpsModule { }
