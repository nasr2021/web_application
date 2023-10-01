import { Component, OnInit } from '@angular/core';
import { CheveuxService } from './cheveux.service';

@Component({
  selector: 'app-cheveux',
  templateUrl: './cheveux.component.html',
  styleUrls: ['./cheveux.component.scss']
})
export class CheveuxComponent implements OnInit {
  cheveux: any[] = [];
   categoryName = 'cheveux';
  constructor(private api: CheveuxService) { }

  ngOnInit(): void {
    this.getall();
  }
  getall=()=>{
    this.api.getCheveux(this.categoryName).subscribe(
      data=>{
        this.cheveux=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    )
  }

}
