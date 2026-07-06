import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Usuario} from '../models/usuario';
 
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor( private http: HttpClient) {}

  private url = 'http://localhost:3000/usuarios';

  listarUsuarios(){
    return this.http.get<Usuario[]>(this.url);
  }

}
