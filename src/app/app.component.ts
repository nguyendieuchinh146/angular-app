import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  color = '';
  audio = 'assets/audios/audio.mp3';

  onClickElement(event:any){
    console.log('event',event)
  }
}
