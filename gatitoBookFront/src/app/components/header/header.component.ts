import { Router } from '@angular/router';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user$ = this.usuarioService.returnUser();

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  logout() {
    this.usuarioService.logout();
    this.router.navigate(['']);
  }

  ngOnInit(): void {}
}
