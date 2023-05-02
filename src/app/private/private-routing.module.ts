import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivateComponent } from './private.component';

const routes: Routes = [
  {path:'',component:PrivateComponent,children:[
    {path:'home',loadChildren:()=>import('./components/home/home.module').then((m)=>m.HomeModule)},
    {path:'paiement',loadChildren:()=>import('./components/paiement/paiement.module').then((m)=>m.PaiementModule)},
    {path:'panier',loadChildren:()=>import('./components/panier/panier.module').then((m)=>m.PanierModule)},
    {path:'about',loadChildren:()=>import('./components/about/about.module').then((m)=>m.AboutModule)},
    {path:'contact',loadChildren:()=>import('./components/contact/contact.module').then((m)=>m.ContactModule)},
    {path:'cheveux',loadChildren:()=>import('./category/cheveux/cheveux.module').then((m)=>m.CheveuxModule)},
    {path:'corps',loadChildren:()=>import('./category/corps/corps.module').then((m)=>m.CorpsModule)},
    {path:'mains&ongles',loadChildren:()=>import('./category/mainsetongles/mainsetongles.module').then((m)=>m.MainsetonglesModule)},
    {path:'maquillage',loadChildren:()=>import('./category/maquillage/maquillage.module').then((m)=>m.MaquillageModule)},
    {path:'parfum',loadChildren:()=>import('./category/parfum/parfum.module').then((m)=>m.ParfumModule)},
    {path:'soin',loadChildren:()=>import('./category/soin/soin.module').then((m)=>m.SoinModule)},
    {path:'visage',loadChildren:()=>import('./category/visage/visage.module').then((m)=>m.VisageModule)},
    {path:'fcq',loadChildren:()=>import('./components/fcq/fcq.module').then((m)=>m.FcqModule)},
    {path:'profile',loadChildren:()=>import('./components/profile/profile.module').then((m)=>m.ProfileModule)},
    {path:'detail',loadChildren:()=>import('./components/detail/detail.module').then((m)=>m.DetailModule)},
  ]},
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
