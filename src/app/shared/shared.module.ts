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

import {TranslateModule,TranslateLoader,TranslatePipe,} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    FormsModule, ReactiveFormsModule, CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      isolate: false,
    }),
  ],
  providers: [],
  exports: [
    ...ELEMENT_COMPONENTS,
    ...DIRECTIVES,
    TranslateModule
  ],
})
export class SharedModule {}
