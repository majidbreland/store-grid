import { Component } from '@angular/core';
import {ProductDataService} from './product-data.service';
import { Product } from './product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  constructor() { }


  ngOnInit() {
    // this.getProducts();


  }
}
