import { Component, OnInit } from '@angular/core';
import { MaquillageService } from './maquillage.service';

@Component({
  selector: 'app-maquillage',
  templateUrl: './maquillage.component.html',
  styleUrls: ['./maquillage.component.scss']
})
export class MaquillageComponent implements OnInit {

  Maquillage:any[]=[]
  categoryName='Maquillage'
  constructor(private api:MaquillageService) { }

  ngOnInit(): void {
    this.getAllMaquillage()
  }
  getAllMaquillage=()=> {
    this.api.getMaquillage(this.categoryName).subscribe(
      data=>{
        this.Maquillage=data
        console.log(data)
      },
      error=>{
        console.log(error)
      }
    )
  }
}
