import { Component, OnInit } from '@angular/core';
import { VisageService } from './visage.service';

@Component({
  selector: 'app-visage',
  templateUrl: './visage.component.html',
  styleUrls: ['./visage.component.scss']
})
export class VisageComponent  {

  Visage:any[]=[]
  categoryName='Visage'
  constructor(private api:VisageService) { }

  ngOnInit(): void {
    this.getAllMaquillage()
  }
  getAllMaquillage=()=> {
    this.api.getVisage(this.categoryName).subscribe(
      data=>{
        this.Visage=data
        console.log(data)
      },
      error=>{
        console.log(error)
      }
    )
  }

}
