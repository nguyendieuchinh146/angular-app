import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CpButtonComponent} from './elements/cp-button';
import {CpModalComponent} from './elements/modal/cp-modal';
import {CpModalContentComponent} from './elements/modal/cp-modal-content';

import {DynamicFormComponent} from './elements/dynamic-form/dynamic-form.component';
import {DynamicFormQuestionComponent} from './elements/dynamic-form/dynamic-form-question.component';

import {SoundDirective} from './directive/play-sound.directive';
import {HighlightDirective} from './directive/highlight.directive';

const ELEMENT_COMPONENTS = [
  CpButtonComponent,
  CpModalComponent,
  CpModalContentComponent,
  DynamicFormComponent,
  DynamicFormQuestionComponent
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
    FormsModule, ReactiveFormsModule, CommonModule
  ],
  providers: [],
  exports: [
    ...ELEMENT_COMPONENTS,
    ...DIRECTIVES
  ],
})
export class SharedModule {}
