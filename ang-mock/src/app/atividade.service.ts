import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  atividadesUrl = 'http://localhost:3000/atividades';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.atividadesUrl}`);
  }
}
