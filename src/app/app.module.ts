import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { NoticiasService } from './noticias.service';
import { HeaderComponent } from './header/header.component';
import { CadastroNoticiasComponent } from './cadastro-noticias/cadastro-noticias.component';
import { DetailNoticiaComponent } from './detail-noticia/detail-noticia.component';

@NgModule({
  declarations: [
    AppComponent,
    ConteudoComponent,
    HeaderComponent,
    CadastroNoticiasComponent,
    DetailNoticiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, NoticiasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
