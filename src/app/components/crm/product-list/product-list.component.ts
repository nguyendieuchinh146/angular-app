import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product, products } from '../../../products';

import { QuestionService } from '../../../shared/elements/dynamic-form/question.service';
import { ModalService } from '../../../shared/elements/modal/cp-modal.service';
import { ProductService } from '../product.service';
import { CartService } from '../../../services/cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products : any = [];
  productSearch: any ={
    name : '',
    description: ''
  }
  process: boolean = false;
  productInputs$: any;
  subscription: Subscription = new Subscription();

  productModalId = 'productModalId';
  tgProModalId =  '#'+ this.productModalId;
  constructor(public questionService: QuestionService, public modalService: ModalService, private productService:ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productInputs$ = this.questionService.getProductInputs();
    this.subscription = this.modalService.currentModal.subscribe(dataModal => this.addProduct(dataModal))

    this.productService.getProducts().subscribe(
        (data:any) => {
          this.products = data;
        }
    )
  }

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  valueChange(event: any) {
    console.log(event);
  }
  onKey(event: any) {
    console.log(event.target);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addProduct(dataModal:any){
    if(dataModal){
      this.process = true;
      this.productService.createProduct(dataModal).subscribe(
          (data:any) => {
            this.productService.getProducts().subscribe(
                (data:any) => {
                  this.products = data;
                  this.process = false;
                }
            )
          }
      )
    }
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
