import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LivroService } from './Livros/livro.service';

import { AppComponent } from './app.component';
import { LivrosInserirComponent } from './Livros/livros-inserir/livros-inserir.component';
import { LivrosListaComponent } from './Livros/livros-lista/livros-lista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    LivrosInserirComponent,
    LivrosListaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [LivroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
