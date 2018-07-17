import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  products: Product[] = [];

  // products: Product;

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get('https://my.api.mockaroo.com/product_catalog.json?key=866ae800')
  }
}
