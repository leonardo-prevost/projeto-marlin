import { Component, OnInit } from '@angular/core';

import { NoticiasService } from 'src/app/noticias.service'

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  contador: number = 0;
  noticias: Array<any> = new Array();
  legendas: Array<any> = new Array();

  constructor(private noticiasService: NoticiasService) { }

  ngOnInit(): void {
    this.listarNoticias();
    this.listarLegendas();

  }

  listarNoticias() {
    this.noticiasService.listarNoticias().subscribe(noticias => {
      this.noticias = noticias;
    }, err => {
      console.log('Erro ao Acessar API', err)
    })

  }

  listarLegendas() {
    this.noticiasService.listarLegendas().subscribe(legenda => {
      this.legendas = legenda;
      this.contador = this.legendas.length;
    }, err => {
      console.log('Erro ao Acessar API', err)
    })
    this.contador = this.legendas.length;
  }

}




