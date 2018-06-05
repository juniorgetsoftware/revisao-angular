import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'João';
  idade = 40;

  adicionar(nome: string) {
    this.nome = nome;
  }

  alterarNome(event: any) {
    this.nome = event.target.value;
  }
}
