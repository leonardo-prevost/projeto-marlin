import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HeaderComponent } from './header/header.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { DetailNoticiaComponent } from './detail-noticia/detail-noticia.component';
import { CadastroNoticiasComponent } from './cadastro-noticias/cadastro-noticias.component';

const routes: Routes = [
  { path: '', component: ConteudoComponent },
  { path: 'conteudo/detalhe', component: DetailNoticiaComponent },
  { path: 'conteudo/cadastrar', component: CadastroNoticiasComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
