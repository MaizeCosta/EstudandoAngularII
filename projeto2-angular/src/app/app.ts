import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProjetoCrud } from './components/projeto-crud/projeto-crud';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProjetoCrud],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('projeto2-angular');
}
