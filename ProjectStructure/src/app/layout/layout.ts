import { Component } from '@angular/core';
import { Footer } from './footer/footer';
import { Navbar } from './navbar/navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Footer, Navbar],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
