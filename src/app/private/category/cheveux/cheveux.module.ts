import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheveuxRoutingModule } from './cheveux-routing.module';
import { CheveuxComponent } from './cheveux.component';


@NgModule({
  declarations: [
    CheveuxComponent
  ],
  imports: [
    CommonModule,
    CheveuxRoutingModule
  ]
})
export class CheveuxModule { }
