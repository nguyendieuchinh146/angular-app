import { Injectable } from '@angular/core';

import { QuestionBase, TextboxQuestion, DropdownQuestion, FileQuestion } from './model-type';

import { of } from 'rxjs';

@Injectable()
export class QuestionService {

    // TODO: get from a remote source of question metadata
    getQuestions() {

        const questions: QuestionBase<string>[] = [

            new DropdownQuestion({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                    {key: 'solid',  value: 'Solid'},
                    {key: 'great',  value: 'Great'},
                    {key: 'good',   value: 'Good'},
                    {key: 'unproven', value: 'Unproven'}
                ],
                order: 3,
                value:  'good',
                className: 'form-control'
            }),

            new TextboxQuestion({
                key: 'firstName',
                label: 'First name',
                value: '',
                required: true,
                order: 1,
                className: 'form-control'
            }),

            new TextboxQuestion({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                order: 2,
                className: 'form-control'
            }),

            new FileQuestion({
                key: 'fileData',
                label: 'File',
                type: 'file',
                order: 2,
                className: ''
            })
        ];

        return of(questions.sort((a, b) => a.order - b.order));
    }
    getProductInputs() {

        const questions: QuestionBase<string>[] = [

            new TextboxQuestion({
                key: 'product_name',
                label: 'Product Name',
                required: true,
                order: 1,
                className: 'form-control'
            }),
            new TextboxQuestion({
                key: 'product_price',
                label: 'Product Price',
                required: true,
                order: 1,
                className: 'form-control'
            }),

            new TextboxQuestion({
                key: 'product_description',
                label: 'Product Description',
                order: 2,
                className: 'form-control'
            }),

            new FileQuestion({
                key: 'product_image',
                label: 'Product Image',
                type: 'file',
                order: 3,
                className: ''
            }),
            new FileQuestion({
                key: 'product_image_2',
                label: 'Second Product Image',
                type: 'file',
                order: 4,
                className: ''
            })
        ];

        return of(questions.sort((a, b) => a.order - b.order));
    }
}