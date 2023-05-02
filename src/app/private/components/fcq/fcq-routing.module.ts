import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FcqComponent } from './fcq.component';

const routes: Routes = [{path:'',component:FcqComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FcqRoutingModule { }
