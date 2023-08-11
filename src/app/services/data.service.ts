import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from '../models/APIResponse';
import { Book } from '../models/Entities/Book';
import { User } from '../models/Entities/User';
import { Genre } from '../models/Enums/Genre';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //TODO Make it an env
  private URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}


  getLoggedUserData(): Observable<APIResponse<User>> {
   return this.http.get<APIResponse<User>>(`${this.URL}/users/me`, { withCredentials: true });
  }

  //TODO Shouldn't it be a post req?
  closeSession(): Observable<void>{
    return this.http.get<void>(`${this.URL}/auth/logout`, { withCredentials: true });
  }
  book1: Book = {
    _id: 'FakeId',
    title: 'Muerte de un viajante',
    author: {
      _id: 'FakeId',
      name: 'Arthur Miller',
    },
    pages: 300,
    genre: [Genre.classic, Genre.theatre],
    cover:
      'https://planetalibro.net/biblioteca/a/r/arthur/arthur-miller-muerte-de-un-viajante/arthur-miller-muerte-de-un-viajante.jpg',
    synopsis:
      "Willy Loman ha trabajado como viajante de comercio durante toda su vida para conseguir lo que cualquier hombre desea: comprar una casa, educar a sus hijos, darle una vida digna a su mujer. Tiene sesenta años, y está extenuado; pide un aumento de sueldo, pero se lo niegan y acaba siendo despedido 'por su propio bien', pues ya no rinde en su trabajo como antes. Todo parece derrumbarse: no podrá pagar la hipoteca de la casa y, para colmo, sus dos hijos no hacen nada de provecho. ¿No se ha sacrificado él siempre para que estudiaran y se colocaran bien? A medida que avanzan las horas, la avalancha de problemas crece de modo imparable, pero Willy vive otra realidad, en otro mundo: ¡ha soñado con tantas cosas!... Ha sido un perfecto trabajador, un perfecto padre y marido: ¿dónde está el error?, ¿en él o en los demás?",
    readByGroup: new Date(),
  };

  book2: Book = {
    _id: 'FakeId',
    title: 'La espada de la asesina',
    author: {
      _id: 'FakeId',
      name: 'Sarah J Mass',
    },
    pages: 300,
    genre: [Genre.fantasy, Genre.youngAdult],
    cover:
      'https://m.media-amazon.com/images/I/71WYJPH4bQL._AC_UF1000,1000_QL80_.jpg',
    synopsis:
      'Celaena Sardothien es la asesina más temida de Adarlan. Como parte del Gremio de Asesinos, ha jurado proteger a su maestro, Arobynn Hamel, pero Celaena no escucha a nadie y solo confía en su amigo Sam. En esta precuela cargada de acción, Celaena se embarca en cinco arriesgadas misiones que la llevan a visitar islas remotas y hostiles desiertos, allí liberará a gente de la esclavitud y castigará la tiranía. Pero al actuar por cuenta propia, ¿conseguirá librarse del yugo de su maestro o sufrirá un inimaginable castigo por su traición?',
    readByGroup: new Date(),
  };

  book3: Book = {
    _id: 'FakeId',
    title: 'Blood Shot: Stories from the Blood Verse',
    author: {
      _id: 'FakeId',
      name: 'Tanya Huff',
    },
    pages: 300,
    genre: [Genre.fantasy, Genre.youngAdult],
    cover:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610718548l/53450323.jpg',
    synopsis:
      'Tanya Huff’s darkly thrilling Blood novels introduced readers to vampiric P.I. Victoria Nelson and her life amongst the paranormal. Here are some of Tanya’s best short stories featuring Vicki and other unforgettable characters from her world…',
    readByGroup: new Date(),
  };
  books:Book[]= [this.book1,this.book2,this.book3,this.book1, this.book2, this.book3, this.book2]
  backgroundColors: string[] = [
    'discord-blue',
    'discord-gray',
    'discord-lightBlack',
    'facebook-lightBlue',
    'discord-black',
    'discord-blue',
    'discord-gray',
    'facebook-blue',
    'discord-black',
    'facebook-cyan',
  ];
}
