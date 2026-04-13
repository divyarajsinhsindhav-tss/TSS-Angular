import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('component');

  childMessage = ''
  receiveMessage(msg: string) {
    this.childMessage = msg;
  }

  messageToChild: string = ''
  sendMessageToChild(msg: string) {
    this.messageToChild = msg;  
  }

}
