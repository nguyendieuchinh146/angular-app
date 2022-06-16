import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from './model-type/question-base';

@Component({
    selector: 'app-question',
    template: `
    <div [formGroup]="form">
          <label [attr.for]="question.key">{{question.label}}</label>

          <div [ngSwitch]="question.controlType">

                <input [class]="question.className" *ngSwitchCase="'textbox'" [formControlName]="question.key" [id]="question.key" [type]="question.type">

                <input [class]="question.className" *ngSwitchCase="'file'" [formControlName]="question.key" [id]="question.key" [type]="question.type" (change)="fileChange($event)">

                <select [class]="question.className" [id]="question.key" *ngSwitchCase="'dropdown'" [formControlName]="question.key">
                  <option *ngFor="let opt of question.options" [value]="opt.key">{{opt.value}}</option>
                </select>
          </div>
          <div class="errorMessage" *ngIf="!isValid">{{question.label}} is required</div>
    </div>`,
    styles: [`.errorMessage {color:red}`]
})
export class DynamicFormQuestionComponent {
    @Input() question!:QuestionBase<string>;

    @Input() form!:FormGroup;
    @Output() fileEvents = new EventEmitter<string>();
    file:any = {};

    get isValid() {
        if(this.form.controls[this.question.key].invalid && (this.form.controls[this.question.key].dirty || this.form.controls[this.question.key].touched)){
            return false;
        }
        return true;
    }

    fileChange(event:any){
        let fileList: FileList = event.target.files;
        if(fileList.length > 0) {
            let file: File = fileList[0];
            this.file ={
                key: event.target.id,
                value: file
            }
            this.fileEvents.emit(this.file);
        }
    }
}
