import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  course: String = ''
  @Output() 
  searchTextChanged:EventEmitter<string>=new EventEmitter<string>();


  searchCourse() {
    console.log(this.course)
  }
}
