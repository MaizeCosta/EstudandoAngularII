import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-controle-fluxo',
  imports: [FormsModule,],
  templateUrl: './controle-fluxo.html',
  styleUrl: './controle-fluxo.scss',
})
export class ControleFluxo {
  media: number = 8;
  linguagem: string = '';
  nomes:string[] = ['Ana', 'Maria', 'Jose'];
}
