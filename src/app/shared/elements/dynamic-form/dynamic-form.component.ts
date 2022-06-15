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
              <app-question [question]="question" [form]="form"></app-question>
            </div>

            <div class="form-group">
              <button class="btn btn-primary" type="submit" [disabled]="!form.valid">Save</button>
            </div>
          </form>

          <div *ngIf="payLoad" class="form-row">
            <strong>Saved the following values</strong><br>{{payLoad}}
          </div>
        </div>`,
    providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

    @Input() questions: QuestionBase<string>[] | null = [];
    @Input() modalId: string = '';
    form!: FormGroup;
    payLoad = '';

    constructor(private qcs: QuestionControlService, public modalService: ModalService) {}

    ngOnInit() {
        this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.getRawValue());
        if(this.modalId){
            this.modalService.setModalData(this.modalId,this.payLoad)
        }

    }
}
