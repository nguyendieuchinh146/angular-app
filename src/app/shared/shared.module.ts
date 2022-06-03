import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CpButtonComponent} from './elements/cp-button';
import {CpModalComponent} from './elements/modal/cp-modal';
import {CpModalContentComponent} from './elements/modal/cp-modal-content';

import {SoundDirective} from './directive/play-sound.directive';
import {HighlightDirective} from './directive/highlight.directive';

const ELEMENT_COMPONENTS = [
  CpButtonComponent,
  CpModalComponent,
  CpModalContentComponent
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
    FormsModule
  ],
  providers: [],
  exports: [
    ...ELEMENT_COMPONENTS,
    ...DIRECTIVES
  ],
})
export class SharedModule {}
