import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { Product, products } from '../../../products';
import { CartService } from '../../../services/cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  //product : any = [];
  product: Product | undefined;
  productId;
  constructor(private route: ActivatedRoute, private cartService: CartService, private productService:ProductService) {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.productId = productIdFromRoute;
  }

  ngOnInit(): void {
    this.productService.getProduct({id: this.productId}).subscribe(
        (data:any) => {
          this.product = data;
        }
    )
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
