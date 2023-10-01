import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaiementRoutingModule } from './paiement-routing.module';
import { PaiementComponent } from './paiement.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [PaiementComponent],
  imports: [
    CommonModule,
    PaiementRoutingModule,
    HttpClientModule
  ]
})
export class PaiementModule { }
