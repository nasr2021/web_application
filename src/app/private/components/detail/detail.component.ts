import { Component, OnInit } from '@angular/core';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  productId: number = 2; // Replace with the desired product ID
  productDetails: any; // You should create a TypeScript interface for this

  constructor(private panierService:DetailsService) { }
  ngOnInit(): void {
    this.loadProductDetails();
  }

  loadProductDetails() {
    this.panierService.getProductDetails(this.productId).subscribe(
      (data) => {
        this.productDetails = data;
        console.log(data)
        // You can now use this.productDetails in your template
      },
      (error) => {
        console.error('Error fetching product details:', error);
      }
    );
  }
}
