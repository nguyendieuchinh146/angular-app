import {NgModule} from '@angular/core';
import {CpButtonComponent} from './elements/cp-button';
import {SoundDirective} from './directive/play-sound.directive';
import {HighlightDirective} from './directive/highlight.directive';

const ELEMENT_COMPONENTS = [
  CpButtonComponent,
];
const DIRECTIVES = [
  SoundDirective,
  HighlightDirective
];

@NgModule({
  declarations: [
    ...ELEMENT_COMPONENTS,
    ...DIRECTIVES
  ],
  imports: [

  ],
  providers: [],
  exports: [
    ...ELEMENT_COMPONENTS,
    ...DIRECTIVES
  ],
})
export class SharedModule {}
