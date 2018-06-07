import { AtividadeService } from './../atividade.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

atividades: Array<any>;

  constructor(private atividadeService: AtividadeService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.atividadeService.listar().subscribe(dados => this.atividades = dados);
  }

}
