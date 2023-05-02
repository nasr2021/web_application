import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoinComponent } from './soin.component';

const routes: Routes = [{path:'',component:SoinComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoinRoutingModule { }
