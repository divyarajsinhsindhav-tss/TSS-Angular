import { Component } from '@angular/core';
import { courses } from '../data/courses'
import { CommonModule } from '@angular/common';
import { Search } from '../search/search';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Search],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  courses: any[] = courses;
  filterdCourses: any[] = [...courses]
}
