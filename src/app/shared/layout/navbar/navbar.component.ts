import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  Links=[
  {name:"Home",Router:"./home"},
  {name:"About",Router:"./about"},
  {name:"FAQ",Router:"./fcq"},
  {name:"ContactUS",Router:"./contact"},
  {name:"Panier",Router:"./panier"},
  {name:"paiement",Router:"./paiement"},
  {name:"Details",Router:"./detail"},
  {name:"Profile",Router:"./profile"},
  {name:"logout",Router:"./login"}
  ];
  LinksCategory=[
  {name:"Cheveux",Router:"./cheveux"},
  {name:"Corps",Router:"./corps"},
  {name:"Mains&Ongles",Router:"./mains&ongles"},
  {name:"Maquillage",Router:"./maquillage"},
  {name:"Parfum",Router:"./parfum"},
  {name:"Soin",Router:"./soin"},
  {name:"Visage",Router:"./visage"}
  ];
  Linkscontact=[{name:"Profile",Router:"./profile"},
  
  {name:"logout",Router:"./login"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
