import { Component, OnInit, OnDestroy } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { DataService } from "./data.service";
import { Subscription } from 'rxjs';
import { ChildComponent } from './child.component';

@Component({
    selector: 'app-parent',
    template: `
    <div style="border: 1px solid gray; padding: 10px; margin: 10px">
        Message: {{message}}
        <div>
            <button type="button" (click)="newMinor()">New minor version</button>
            <button type="button" (click)="newMajor()">New major version</button>
        </div>
        <div>
            <h3>Countdown</h3>
            <button type="button" (click)="start()">Start</button>
            <button type="button" (click)="stop()">Stop</button>
            <div class="seconds">{{ seconds() }}</div>
        </div>

        <app-child (messageEvent)="receiveMessage($event)" [master]="master" [name]="'hello t'" [major]="major" [minor]="minor" [(size)]="fontSizePx" ></app-child>

        <div [style.font-size.px]="fontSizePx">Resizable Text</div>
        <p>The hero's birthday is {{ birthday | date:format }}</p>

        <p>{{ amount | currency:'EUR':'Euros '}}</p>
    </div>
  `,
    styles: []
})
export class ParentComponent implements OnInit, OnDestroy {

    message:string ='';
    subscription: Subscription = new Subscription();
    master: string = 'Master Name'

    major = 1;
    minor = 23;
    fontSizePx  = 16;

    amount = 123000;
    birthday = new Date(1988, 3, 15);
    toggle = false; // start with true == shortDate

    get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }

    newMinor() {
        this.minor++;
    }

    newMajor() {
        this.major++;
        this.minor = 0;
    }

    @ViewChild(ChildComponent)
    private timerComponent!: ChildComponent;

    seconds() { return 0; }

    ngAfterViewInit() {
        setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
    }

    start() { this.timerComponent.start(); }
    stop() { this.timerComponent.stop(); }

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