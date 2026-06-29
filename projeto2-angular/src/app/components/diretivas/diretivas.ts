import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  imports: [CommonModule],
  templateUrl: './diretivas.html',
  styleUrl: './diretivas.scss',
})
export class Diretivas {

  /*Diretiva ngStyle */

  corFonte: string = 'yellow';
  corFundo: string = 'green';

  estiloParagrafo = {
      'color':this.corFonte,
      'background-color':this.corFundo
    }
  
  alterarEstilo():void{
    this.corFonte = this.corFonte ==='yellow'? 'blue':'yellow';
    this.corFundo = this.corFundo === 'green'?'black':'green';

    this.estiloParagrafo = {
      'color':this.corFonte,
      'background-color':this.corFundo
    }
  }


  /*Diretiva ngClass */

  alunos: string[] = ['aprovado', 'aprovado', 'reprovado', 'aprovado'];
}
