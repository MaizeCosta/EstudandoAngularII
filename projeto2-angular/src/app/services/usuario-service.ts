import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Usuario} from '../models/usuario';
import { Observable, tap } from 'rxjs';
 
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor( private http: HttpClient) {}

  private url = 'http://localhost:3000/usuarios';
  private chaveStorage = 'listaUsuarios';

  /*getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);

    listarUsuarios(): Observable<Usuario[]> {
  const headers = new HttpHeaders({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
  });
  
    return this.http.get<Usuario[]>(this.url, { headers }).pipe(
      tap((usuarios) => {
        localStorage.setItem(this.chaveStorage, JSON.stringify(usuarios));
      })
    );
  }
  }*/

  listarUsuarios(): Observable<Usuario[]> {
  
    return this.http.get<Usuario[]>(this.url).pipe(
      tap((usuarios) => {
        localStorage.setItem(this.chaveStorage, JSON.stringify(usuarios));
      })
    );
  }

  
  cadastrarUsuario(usuario: Usuario): Observable<Usuario[]> {
    return this.http.post<Usuario[]>(this.url, usuario);

  }

  editarUsuario(id: number, usuario: Usuario){
    return this.http.put<Usuario[]>(`${this.url}/${id}`, usuario);
  }

  removerUsuario(id: number): Observable<Usuario[]> {
    return this.http.delete<Usuario[]>(`${this.url}/${id}`);
  }

  obterUsuariosDoStorage(): Usuario[] {
    const dados = localStorage.getItem(this.chaveStorage);
    return dados ? JSON.parse(dados) : [];
  }
}
  
  



