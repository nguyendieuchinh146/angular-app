import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product, products } from '../../../products';

import { QuestionService } from '../../../shared/elements/dynamic-form/question.service';
import { ModalService } from '../../../shared/elements/modal/cp-modal.service';

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
  questions$: any;
  subscription: Subscription = new Subscription();
  logInModalId = 'loginModal';
  targetLogInModalId = '#'+ this.logInModalId;
  constructor(public questionService: QuestionService, public modalService: ModalService) { }

  ngOnInit(): void {
    //const products = [
    //  {id: 1,'name' :'Product 1', description: 'description 1'},
    //  {id: 2,'name' :'Product 2', description: 'description 1'},
    //  {id: 3,'name' :'Product 3', description: 'description 1'}]
    this.products = products;
    this.questions$ = this.questionService.getQuestions();
    this.subscription = this.modalService.currentModal.subscribe(dataModal => console.log(dataModal))
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
