import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';
import { Formulario } from './components/formulario/formulario';
import { ControleFluxo } from './components/controle-fluxo/controle-fluxo';
import { Diretivas } from './components/diretivas/diretivas';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataBinding, Formulario, ControleFluxo, Diretivas],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('projeto2-angular');
}
