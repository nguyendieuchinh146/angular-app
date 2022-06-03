import { Component, OnInit } from '@angular/core';
import { ModalService } from './shared/elements/modal/cp-modal.service';

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

  constructor(public modalService: ModalService ) { }

  onClickElement(event:any){
    console.log('event',event)
  }

  ngOnInit(): void {
    this.modalService.getModalData(this.modalId).subscribe((data: any) => console.log(data));
  }
}
