import { Component, Output, EventEmitter } from '@angular/core';
import { LivroService } from '../livro.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-livros-inserir',
  templateUrl: './livros-inserir.component.html',
  styleUrls: ['./livros-inserir.component.css']
})
export class LivrosInserirComponent{

  constructor(public livroService: LivroService) {}

  onAdicionarLivro(form: NgForm) {
    if (form.invalid) {
    return;
    }
  this.livroService.adicionarLivro(
    form.value.autor,
    form.value.titulo,
    form.value.numeroPg,
    form.value.id
    );
    form.resetForm();
}}
