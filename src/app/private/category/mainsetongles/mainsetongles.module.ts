import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainsetonglesRoutingModule } from './mainsetongles-routing.module';
import { MainsetonglesComponent } from './mainsetongles.component';


@NgModule({
  declarations: [
    MainsetonglesComponent
  ],
  imports: [
    CommonModule,
    MainsetonglesRoutingModule
  ]
})
export class MainsetonglesModule { }
