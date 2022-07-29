import { Component, OnInit } from '@angular/core';
import { ModalService } from './shared/elements/modal/cp-modal.service';
import { Observable,Subscription } from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-app';
  color = '';
  audio = 'assets/audios/audio.mp3';
  modalId = 'exampleModalLogin';
  targetModalId = '#'+this.modalId;
  dataModal : any;

  message:string ='';
  subscription: Subscription = new Subscription();
  subscriptions: any ={};

  translations = {
    title: 'TITLE',
  };


  constructor(public modalService: ModalService, public translate: TranslateService) {
      this.modalService.setSumsubLanguage('test');
      this.subscriptions.sumsunLanguage = this.modalService.observeSumsubLanguage().subscribe((data: any) => {
          console.log("data: ", data);
      });
      translate.setDefaultLang('vn');
      translate.use('vn');
  }

  onClickElement(event:any){
    console.log('event',event)
  }

  ngOnInit(): void {
    //this.subscription = this.modalService.currentModal.subscribe(dataModal => this.onChangeValue(dataModal))
  }
  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }

  onChangeValue(value: any){
    console.log(value);
    this.dataModal = value
  }
}
