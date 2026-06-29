import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.scss',
})
export class DataBinding {
  urlImage:string= 'dia.jpg';

  alterarImagem():void{
    this.urlImage = this.urlImage == 'dia.jpg'? 'noite.jpg': 'dia.jpg';
  }
}
