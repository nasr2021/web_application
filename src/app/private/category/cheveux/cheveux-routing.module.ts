import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheveuxComponent } from './cheveux.component';

const routes: Routes = [
  {path:'',component:CheveuxComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheveuxRoutingModule { }
