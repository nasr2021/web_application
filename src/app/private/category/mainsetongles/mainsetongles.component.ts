import { Component, OnInit } from '@angular/core';
import { MainsetonglesService } from './mainsetongles.service';

@Component({
  selector: 'app-mainsetongles',
  templateUrl: './mainsetongles.component.html',
  styleUrls: ['./mainsetongles.component.scss']
})
export class MainsetonglesComponent implements OnInit {
  Mains:any[]=[]
  categoryName='Mains&Ongles'
  constructor(private api:MainsetonglesService) { }

  ngOnInit(): void {
    this.getAllMainsetongles()
  }
  getAllMainsetongles=()=> {
    this.api.getMainsetongles(this.categoryName).subscribe(
      data=>{
        this.Mains=data
        console.log(data)
      },
      error=>{
        console.log(error)
      }
    )
  }

}
