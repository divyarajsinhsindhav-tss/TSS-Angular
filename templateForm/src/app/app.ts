import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Student } from './student';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('templateForm');

  students: Student[] = [];
  hobbies: string[] = [];
  sendData(data: NgForm) {
    const newStudent:Student = {
      id: Date.now(),
      name: data.value.name,
      email: data.value.email,
      country: data.value.country,
      hobbies: this.hobbies
    }
    this.students.push(newStudent);
    this.hobbies = []
  }

  onHobbyChange(event: any) {
    const value = event.target.nextSibling.textContent.trim();
    const checked = event.target.checked;

    if (checked) {
      this.hobbies.push(value);
    } else {
      this.hobbies = this.hobbies.filter(h => h !== value);
    }
  }
  
}
