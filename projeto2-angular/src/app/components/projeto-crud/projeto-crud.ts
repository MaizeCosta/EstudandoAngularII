import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario-service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-projeto-crud',
  imports: [ReactiveFormsModule],
  templateUrl: './projeto-crud.html',
  styleUrl: './projeto-crud.scss',
})
export class ProjetoCrud implements OnInit  {

  constructor(private usuarioService: UsuarioService){  }
    
    pessoa = new FormGroup({
      nome: new FormControl('',[Validators.required, Validators.minLength(3)]),
      idade: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(110)]),
      cidade: new FormControl('',[Validators.required, Validators.minLength(2)])
    });
    
    btCadastrar: boolean = true;
    listaUsuario: Usuario[] = [];
    usuarioSelecionado!:Usuario;

    cadastar(){
      if(this.pessoa.valid){
        const usuario: Usuario = {
          nome: this.pessoa.value.nome!,
          idade: this.pessoa.value.idade!,
          cidade: this.pessoa.value.cidade!
        };

        this.usuarioService.cadastrarUsuario(usuario).subscribe();
        this.pessoa.reset(); 
        this.listaUsuario.push(usuario);
      }      
    }

    selecionar(usuario: Usuario){
      this.btCadastrar = false;
      this.usuarioSelecionado = usuario;

       this.pessoa.setValue({
        nome: usuario.nome,
        idade: usuario.idade,
        cidade: usuario.cidade
    });
      
    }

    cancelar(){
      this.btCadastrar = true;
      this.pessoa.reset(); 
    }

    remover(){
      this.usuarioService.removerUsuario(this.usuarioSelecionado.id!).subscribe();
      this.listaUsuario = this.listaUsuario.filter(item => item.id !== this.usuarioSelecionado.id);
      this.cancelar();
    }

    alterar(){
      if(this.pessoa.valid){

        const usuario: Usuario = {
          nome: this.pessoa.value.nome!,
          idade: this.pessoa.value.idade!,
          cidade: this.pessoa.value.cidade!
        };

        this.usuarioService.editarUsuario(this.usuarioSelecionado.id!, usuario).subscribe();
        this.listaUsuario = this.listaUsuario.map(item => 
          item.id === this.usuarioSelecionado.id ? usuario : item
        );

        this.cancelar();
      }
    }
    
  
  ngOnInit(){
    this.listaUsuario = this.usuarioService.obterUsuariosDoStorage();

    this.usuarioService.listarUsuarios().subscribe((usuarios) => {
      this.listaUsuario = usuarios;
    });

  }
}




 
  