import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from "./data.service";
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-sibling',
    template: `
    <div style="border: 1px solid gray; padding: 10px; margin: 10px">
        {{message}}
        <button (click)="newMessage()">Message From Sibling</button>
    </div>
  `,
    styles: []
})
export class SiblingComponent implements OnInit, OnDestroy {

    message:string = '';
    subscription: Subscription= new Subscription();

    constructor(private data: DataService) { }

    ngOnInit() {
        this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    newMessage() {
        this.data.changeMessage("Hello from Sibling")
    }

}