import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
    selector: 'app-form',
    template: `
    <div style="border: 1px solid gray; padding: 10px; margin: 10px">
         <form action="">
            <div class="form-group">
                <label for="">Name</label>
                <input type="text">
            </div>
            <div class="form-group">
                <label for="">Email</label>
                <input type="text">
            </div>
            <div class="form-group">
                <label for="">File</label>
                <input type="file">
            </div>
         </form>
    </div>
  `,
    styles: []
})
export class FormComponent implements OnInit {

    constructor() { }

    ngOnInit() {

    }
}