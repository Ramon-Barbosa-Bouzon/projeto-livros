import { Component } from '@angular/core';
import { Livro } from './Livros/livro.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  livros: Livro[] = [];
  onLivroAdicionado(livros) {
    this.livros = [...this.livros, livros];

  }
}
