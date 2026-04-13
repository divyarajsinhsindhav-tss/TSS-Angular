import { Component, EventEmitter, input, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  @Output() messageEvent = new EventEmitter<string>();
  @ViewChild('inputNameRef') inputRef !: any;

  inputValue = ''
  sendInputData() {
    this.inputValue = this.inputRef.nativeElement.value;
    this.messageEvent.emit(this.inputValue);
  }

  message = input<string>('');
}
