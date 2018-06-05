import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'João';
  idade = 40;

  adicionar() {
    console.log(`Adicionando ${this.nome}`);
  }

  alterarNome(event: any) {
    this.nome = event.target.value;
  }
}
