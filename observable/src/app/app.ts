import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('observable');


  myObservable = new Observable<string>((val) => {
    val.next("1")
    val.next("2")
    val.next("3")
    val.complete()
    val.error(new Error("Error during Submission"))
  })

  ngOnInit() {
    this.myObservable.subscribe({
      next: (data: string) => console.log(data),
      error: (err) => console.log(err),
      complete: () => console.log('Completed')
    })
  }
}
