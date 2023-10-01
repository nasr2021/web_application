import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { SharedModule } from "../shared/shared.module";
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    declarations: [
        PrivateComponent,
    ],
    imports: [
        CommonModule,
        PrivateRoutingModule,
        SharedModule,
        HttpClientModule
    ]
})
export class PrivateModule { }
