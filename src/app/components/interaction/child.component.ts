import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges} from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
      <button (click)="sendMessage()">Send from Child</button>
      <h3>{{masterName}}</h3>
      <h4>{{name}}</h4>
      <p>{{messageCount}}</p>

      <div>
        <h3>Two way binding</h3>
        <button type="button" (click)="dec()" title="smaller">-</button>
        <button type="button" (click)="inc()" title="bigger">+</button>
        <span [style.font-size.px]="size">FontSize: {{size}}px</span>
      </div>
  `,
    styles: []
})
export class ChildComponent {

    message: string = "Hola Mundo!";
    // view child

    // alias
    @Input('master') masterName = '';

    // get-set
    @Input()
    get name(): string { return this._name; }
    set name(name: string) {
        this._name = (name && name.trim()) || '<no name set>';
    }
    private _name = '';


    // on change
    @Input() major = 0;
    @Input() minor = 0;
    changeLog: string[] = [];

    // view child
    intervalId = 0;
    messageCount = '';
    seconds = 11;


    // two way binding
    @Input()  size!: number | string;
    @Output() sizeChange = new EventEmitter<number>();

    dec() { this.resize(-1); }
    inc() { this.resize(+1); }

    resize(delta: number) {
        this.size = Math.min(40, Math.max(8, +this.size + delta));
        this.sizeChange.emit(this.size);
    }

    ngOnDestroy() { this.clearTimer(); }

    start() { this.countDown(); }
    stop()  {
        this.clearTimer();
        this.messageCount = `Holding at T-${this.seconds} seconds`;
    }

    private clearTimer() { clearInterval(this.intervalId); }

    private countDown() {
        this.clearTimer();
        this.intervalId = window.setInterval(() => {
            this.seconds -= 1;
            if (this.seconds === 0) {
                this.messageCount = 'Blast off!';
            } else {
                if (this.seconds < 0) {
                    this.seconds = 10;
                }
                this.messageCount = `T-${this.seconds} seconds and counting`;
            }
        }, 1000);
    }



    @Output() messageEvent = new EventEmitter<string>();

    constructor() { }

    sendMessage() {
        this.messageEvent.emit(this.message)
    }

    ngOnChanges(changes: SimpleChanges) {
        //console.log(changes)
    }
}