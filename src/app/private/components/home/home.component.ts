import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  [x: string]: any;
all:any[]=[]
 
        
  constructor(private api:HomeService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll=()=>{
    this.api.getAllProducts().subscribe(
      data=>{
        this.all=data
        console.log(data)
      }
      ,error=>{
        console.log(error)
      }
    )
  }

}
