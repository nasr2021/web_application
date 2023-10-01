import { Component, OnInit } from '@angular/core';
import { ParfumService } from './parfum.service';

@Component({
  selector: 'app-parfum',
  templateUrl: './parfum.component.html',
  styleUrls: ['./parfum.component.scss']
})
export class ParfumComponent implements OnInit {

  Parfum:any[]=[]
  categoryName='Parfum'
  constructor(private api:ParfumService) { }

  ngOnInit(): void {
    this.getAllMaquillage()
  }
  getAllMaquillage=()=> {
    this.api.getParfum(this.categoryName).subscribe(
      data=>{
        this.Parfum=data
        console.log(data)
      },
      error=>{
        console.log(error)
      }
    )
  }

}
