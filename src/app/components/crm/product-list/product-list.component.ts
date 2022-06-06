import { Component, OnInit } from '@angular/core';
import { Product, products } from '../../../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  //products = [{name: ''}]
  products : any = [];
  productSearch: any ={
    name : '',
    description: ''
  }
  constructor() { }

  ngOnInit(): void {
    //const products = [
    //  {id: 1,'name' :'Product 1', description: 'description 1'},
    //  {id: 2,'name' :'Product 2', description: 'description 1'},
    //  {id: 3,'name' :'Product 3', description: 'description 1'}]
    this.products = products;
  }

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  valueChange(event: any) { // without type info
    console.log(event);
  }
  onKey(event: any) { // without type info
    console.log(event.target);
  }

}
