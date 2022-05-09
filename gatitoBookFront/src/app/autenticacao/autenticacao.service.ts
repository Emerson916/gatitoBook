import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  private url = 'gatitobook-production-e0c7.up.railway.app/user/login';

  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(
        this.url,
        {
          userName: usuario,
          password: senha,
        },
        //fazendo a requisição do header
        { observe: 'response' }
      )
      .pipe(
        tap((res) => {
          const authToken = res.headers.get('X-Access-Token') ?? '';
          this.usuarioService.saveToken(authToken);
        })
      );
  }
}
