import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanierRoutingModule } from './panier-routing.module';

import { PanierComponent } from './panier.component';
import { PaiementModule } from "../paiement/paiement.module";
import { RouterModule } from '@angular/router';
import { PaiementComponent } from '../paiement/paiement.component';


@NgModule({
    declarations: [PanierComponent],
    exports: [PaiementModule],
    imports: [
        CommonModule,
        PanierRoutingModule,
        RouterModule,
        PaiementModule
    ]
})
export class PanierModule { }
