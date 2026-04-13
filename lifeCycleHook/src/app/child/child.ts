import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
  ngOnDestroy() {
    console.log("Child Component Destroy")
  }
}
