import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario-service';
import { Usuario } from '../../models/usuario';



@Component({
  selector: 'app-projeto-crud',
  imports: [ReactiveFormsModule],
  templateUrl: './projeto-crud.html',
  styleUrl: './projeto-crud.scss',
})
export class ProjetoCrud {
 

  constructor(private usuarioService: UsuarioService){  }

  listaUsuario: Usuario[] = [];

  ngOnInit(){
    console.log("Entrou no ngOnInit");
    this.usuarioService.listarUsuarios().subscribe(usu =>{
      this.listaUsuario = usu;
    })
  }
}
