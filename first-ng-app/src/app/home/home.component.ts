import { Component, signal } from '@angular/core';
import { GreetingsComponent } from '../components/greetings/greetings.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeMessage = signal('Hello, world!')

    keyUpHandler(event: KeyboardEvent) {
    console.log(`user typed ${event.key} in the input`);
  }
}
