import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParfumComponent } from './parfum.component';

const routes: Routes = [{path:'',component:ParfumComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParfumRoutingModule { }
