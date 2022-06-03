import { Input, Component, OnInit} from '@angular/core';
import { ModalService } from './cp-modal.service';
import { MapUtils } from 'src/app/shared/utils/mapper';

@Component({
    selector: 'cp-modal-content',
    template: `
        <div>Body Modal
        <form action="">
          <div class="form-group">
            <label for="username">Name</label>
            <input type="text" [(ngModel)]="username" name="username">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" [(ngModel)]="password" name="password">
          </div>
          <div class="form-group">
            <button class="btn btn-sm" (click)="addModalData()" type="button">Add</button>
            <button class="btn btn-sm" (click)="clearModalData()" type="button">Clear</button>
          </div>
        </form>
      </div>
    `,
    styles: [`

    `]
})
export class CpModalContentComponent  implements OnInit {
    username:any;
    password = '';
    @Input() modalId = "";
    constructor(private modalService: ModalService ) { }

    ngOnInit(): void {

    }
    addModalData(){
        let modalData = {
            modalId: this.modalId,
            data : {
                username : this.username,
                password: this.password
            }
        };
        this.modalService.setModalData(this.modalId,modalData)
    }
    clearModalData(){
        this.modalService.clearModalData(this.modalId)
    }
}
