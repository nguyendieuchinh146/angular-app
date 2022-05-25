import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  //product : any = [];
  product: Product | undefined;
  constructor(private route: ActivatedRoute, private cartService: CartService) {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    console.log(productIdFromRoute)
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  ngOnInit(): void {
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
