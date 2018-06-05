import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nome = 'João';

  adicionar() {
    this.nome = this.nome + Math.round(Math.random() * 100);
  }
}
