import { Component, OnInit } from '@angular/core';
import { SoinService } from './soin.service';

@Component({
  selector: 'app-soin',
  templateUrl: './soin.component.html',
  styleUrls: ['./soin.component.scss']
})
export class SoinComponent implements OnInit {

  Soin:any[]=[]
  categoryName='Soin'
  constructor(private api:SoinService) { }

  ngOnInit(): void {
    this.getAllMaquillage()
  }
  getAllMaquillage=()=> {
    this.api.getSoin(this.categoryName).subscribe(
      data=>{
        this.Soin=data
        console.log(data)
      },
      error=>{
        console.log(error)
      }
    )
  }
}
