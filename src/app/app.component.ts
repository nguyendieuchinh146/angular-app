import { Component, OnInit } from '@angular/core';
import { ModalService } from './shared/elements/modal/cp-modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-app';
  color = '';
  audio = 'assets/audios/audio.mp3';
  modalId = 'exampleModal';
  dataModal : any;

  message:string ='';
  subscription: Subscription = new Subscription();

  constructor(public modalService: ModalService ) { }

  onClickElement(event:any){
    console.log('event',event)
  }

  ngOnInit(): void {
    this.subscription = this.modalService.currentModal.subscribe(dataModal => this.onChangeValue(dataModal))
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onChangeValue(value: any){
    console.log(value);
    this.dataModal = value
  }
}
