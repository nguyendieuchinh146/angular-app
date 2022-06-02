import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[playAudio]'
})
export class SoundDirective {
    @Input() playAudio = '';
    @Input() defaultAudio = '';
    constructor(private el: ElementRef) { }

    @HostListener('click') onClick() {
        console.log(this.defaultAudio)
        let audio = new Audio(this.playAudio);
        audio.play();
    }
}
