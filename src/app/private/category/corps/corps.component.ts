import { Component, OnInit } from '@angular/core';
import { CorpsService } from './corps.service';
import { error } from 'console';

@Component({
  selector: 'app-corps',
  templateUrl: './corps.component.html',
  styleUrls: ['./corps.component.scss']
})
export class CorpsComponent implements OnInit {
corps: any[]=[];
categoryName = 'CORPS';
  constructor(private api:CorpsService) { }

  ngOnInit(): void {
    this.getAllCorps()
  }
  getAllCorps=()=>{
    this.api.getCorps(this.categoryName).subscribe(
      data =>{
        this.corps=data;
        console.log(data)
      },
      error=>
      {
        console.log(error)

      }
    )

  }
}
