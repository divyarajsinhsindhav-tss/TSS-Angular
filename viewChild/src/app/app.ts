import { Component } from '@angular/core';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
//   @ViewChild('inputRef2') secondInputRef!: ElementRef<HTMLInputElement>;
//   @ViewChild('ageInput') ageInputRef!: ElementRef<HTMLInputElement>;

//   getInputData(inputData:HTMLInputElement){
//     console.log(inputData.value);
//   }
//   getInputSecondData(){
//     console.log(this.secondInputRef.nativeElement.value);
//   }

// age: Number = 0;
// calculateAge(){
//   const today = new Date();
//   const birthdate = new Date(this.ageInputRef.nativeElement.value);
//   this.age = today.getFullYear() - birthdate.getFullYear();
//   console.log(`Your age is: ${this.age}`);
// }



}
