import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reativo',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-reativo.html',
  styleUrl: './formulario-reativo.scss',
})
export class FormularioReativo {
   /*btCadastrar: boolean = true;
  
    pessoal = new FormGroup({
      nome: new FormControl('',[Validators.required, Validators.minLength(3)]),
      idade: new FormControl('', [Validators.required, Validators.min(0), Validators.max(110)]),
      cidade: new FormControl('',[Validators.required, Validators.minLength(3)])
    });*/
    
  pessoa = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl()
  })
}
