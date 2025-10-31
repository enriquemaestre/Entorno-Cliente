import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { AppSaludo } from './components/app-saludo/app-saludo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, AppSaludo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-primera-app');
}
