import { Component, OnInit } from '@angular/core';
import {ProductDataService} from '../product-data.service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private productDataService: ProductDataService) { }

  getProducts(): void {
    this.productDataService.getAllProducts().subscribe((products: Product[]) => {
        this.products = products
        console.log(this.products)}
        );
  }

  ngOnInit() {
    this.getProducts();
  }

}
