import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from './model-type/question-base';
import { QuestionControlService } from './question-control.service';
import { ModalService } from '../../../shared/elements/modal/cp-modal.service';

@Component({
    selector: 'app-dynamic-form',
    template: `<div>
          <form (ngSubmit)="onSubmit()" [formGroup]="form">

            <div *ngFor="let question of questions" class="form-group">
              <app-question [question]="question" [form]="form" (fileEvents)="fileChange($event)"></app-question>
            </div>

            <div class="form-group">
              <button class="btn btn-primary" type="submit" [disabled]="!form.valid">Save</button>
            </div>
          </form>
        </div>`,
    providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

    @Input() questions: QuestionBase<string>[] | null = [];
    @Input() modalId: string = '';
    form!: FormGroup;
    payLoad = '';
    files:any = {};

    constructor(private qcs: QuestionControlService, public modalService: ModalService) {}

    ngOnInit() {
        this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
    }

    onSubmit() {
        if(this.modalId){
            this.modalService.setModalData(this.modalId, {data: this.form.getRawValue(), files: this.files})
            this.form.reset();
        }
    }
    fileChange($event: any){
        console.log($event);
        let file:any = $event.value;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.files[$event.key] = {file_info: {name: $event.value.name, size: $event.value.size,type: $event.value.type}, value: reader.result};
            this.files[$event.key]['value'] = this.files[$event.key]['value'].split(',')[1];
        };
    }
}
