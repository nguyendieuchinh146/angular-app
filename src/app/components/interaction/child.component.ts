import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
      <button (click)="sendMessage()">Send from Child</button>
  `,
    styles: []
})
export class ChildComponent {

    message: string = "Hola Mundo!"

    @Output() messageEvent = new EventEmitter<string>();

    constructor() { }

    sendMessage() {
        this.messageEvent.emit(this.message)
    }
}