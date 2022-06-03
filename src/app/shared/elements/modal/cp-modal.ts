import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalService } from './cp-modal.service';

@Component({
    selector: 'cp-modal',
    template: `
        <div class="modal fade {{csModalClass}}" id="{{modalId}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{{headerTitle}}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <ng-content select="[body]"></ng-content>
              </div>
              <div class="modal-footer">
                <ng-content select="[footer]"></ng-content>
              </div>
            </div>
          </div>
        </div>
    `,
    styles: [`

    `]
})
export class CpModalComponent  implements OnInit {
    @Input() modalId = 'exampleModal';
    @Input() headerTitle = 'Modal title';
    @Input() csModalClass = '';
    name = '';
    constructor() { }

    ngOnInit(): void {
    }
}
