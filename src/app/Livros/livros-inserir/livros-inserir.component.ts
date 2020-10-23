import { Component, Output, EventEmitter } from '@angular/core';
import { Livro } from '../livro.model';

@Component({
  selector: 'app-livros-inserir',
  templateUrl: './livros-inserir.component.html',
  styleUrls: ['./livros-inserir.component.css']
})
export class LivrosInserirComponent{

  @Output() livroAdicionado = new EventEmitter<Livro>();

  titulo: string;
  autor: string;
  numeroPg: number;
  id:number;
  num = 0;

  onAdicionarLivro() {
    this.num++;

    const livro: Livro = {
      titulo: this.titulo,
      autor: this.autor,
      numeroPg: this.numeroPg,
      id: this.id=this.num
    };
    this.livroAdicionado.emit(livro);
  }
}
