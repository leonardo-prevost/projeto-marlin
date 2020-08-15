import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  listarNoticias(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/albums/1/photos")
  }

  listarLegendas(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/users/1/posts")

  }

  /*
    cadastrarNoticia(noticia) {
      return this.http.post({"userId": 1}).pipe(take(1));
    }
  */

}
