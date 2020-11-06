import { Livro } from './livro.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LivroService {
  private livros: Livro[] = [];
  private listaLivrosAtualizada = new Subject<Livro[]>();

  constructor(private httpClient: HttpClient) {}

  private livro: Livro[] = [];

  getLivros(): Livro[] {
    return [...this.livro];
  }

  getListaDeLivrosAtualizadaObservable() {
    return this.listaLivrosAtualizada.asObservable();
  }

  adicionarLivro(numeroPg: number, titulo: string, autor: string, id: string) {
    const livro: Livro = {
      titulo: titulo,
      autor: autor,
      numeroPg: numeroPg,
      id: id,
    };
    this.httpClient
      .post<{ mensagem: string }>('http://localhost:3000/api/livros', livro)
      .subscribe((dados) => {
        console.log(dados.mensagem);
        this.livros.push(livro);
        this.listaLivrosAtualizada.next([...this.livros]);
      });
  }

  getLivro(): void {
    this.httpClient
      .get<{ mensagem: string; livros: any }>(
        'http://localhost:3000/api/livros'
      )
      .pipe(
        map((dados) => {
          return dados.livros.map((livro) => {
            return {
              id: livro._id,
              autor: livro.autor,
              numeroPg: livro.numeroPg,
              titulo: livro.titulo,
            };
          });
        })
      )
      .subscribe((livros) => {
        this.livros = livros;
        this.listaLivrosAtualizada.next([...this.livros]);
      });
  }
}
