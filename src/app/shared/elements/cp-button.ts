import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'cp-button',
    template: `
    <button class="btn {{class}}" (click)="onClickBtn($event)">{{title}}</button>
    `,
    styles: [`
    .btn {
        font-size: 20px;
        padding: 10px 20px;
        background-color: gray;
        color: #fff;
    }
    `]
})
export class CpButtonComponent  implements OnInit {

    @Input() title = 'Click';
    @Input() class ='';
    @Output() onClick = new EventEmitter();
    constructor() { }

    ngOnInit(): void {
    }

    onClickBtn(event: any){
        this.onClick.emit(event);
    }

}
