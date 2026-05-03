import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected message = signal('Hello Qualia');

  updateMessage() {
    this.message.set('This is Seth Condie');
  }
}
