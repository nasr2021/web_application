import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainsetonglesRoutingModule } from './mainsetongles-routing.module';
import { MainsetonglesComponent } from './mainsetongles.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MainsetonglesComponent
  ],
  imports: [
    CommonModule,
    MainsetonglesRoutingModule,
    HttpClientModule
  ]
})
export class MainsetonglesModule { }
