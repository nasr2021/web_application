import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorpsRoutingModule } from './corps-routing.module';
import { CorpsComponent } from './corps.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CorpsComponent
  ],
  imports: [
    CommonModule,
    CorpsRoutingModule,
    HttpClientModule
  ]
})
export class CorpsModule { }
