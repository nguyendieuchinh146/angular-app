import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from "./data.service";
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-parent',
    template: `
    <div style="border: 1px solid gray; padding: 10px; margin: 10px">
        Message: {{message}}
        <app-child (messageEvent)="receiveMessage($event)"></app-child>
    </div>
  `,
    styles: []
})
export class ParentComponent implements OnInit, OnDestroy {

    message:string ='';
    subscription: Subscription = new Subscription();

    constructor(private data: DataService) { }

    ngOnInit() {
        this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    receiveMessage($event: any) {
        this.message = $event
    }

}