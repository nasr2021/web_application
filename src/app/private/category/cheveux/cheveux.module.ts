import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheveuxRoutingModule } from './cheveux-routing.module';
import { CheveuxComponent } from './cheveux.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CheveuxComponent
  ],
  imports: [
    CommonModule,
    CheveuxRoutingModule,
    HttpClientModule
  ]
})
export class CheveuxModule { }
