import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from '../models/APIResponse';
import { Book } from '../models/Entities/Book';
import { User } from '../models/Entities/User';
import { Genre } from '../models/Enums/Genre';
import { BookRead } from '../models/Entities/BookRead';
import { Author } from '../models/Entities/Author';
import { BookReadStatus } from '../models/Enums/BookReadStatus';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  authorsNameAndIdList: Author[] = [];
  books: Book[] = [];
  backgroundColors: string[] = [
    'discord-blue',
    'discord-gray',
    'discord-lightBlack',
    'facebook-lightBlue',
    'facebook-blue',
    'discord-black',
    'discord-blue',
    'discord-gray',
    'facebook-blue',
    'discord-black',
    'discord-blue',
    'discord-gray',
    'discord-lightBlack',
    'facebook-lightBlue',
    'discord-black',
    'discord-blue',
    'discord-gray',
    'facebook-blue',
    'discord-black',
  ];

  //TODO Make it an env
  private URL = 'http://localhost:3000';
  httpOptions: object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true,
  };

  constructor(private http: HttpClient) {}

  getLoggedUserData(): Observable<APIResponse<User>> {
    return this.http.get<APIResponse<User>>(`${this.URL}/users/me`, {
      withCredentials: true,
    });
  }

  closeSession(): Observable<void> {
    return this.http.post<void>(`${this.URL}/auth/logout`, {
      withCredentials: true,
    });
  }

  getauthorsNameAndIdList(): Observable<APIResponse<Author[]>> {
    return this.http.get<APIResponse<Author[]>>(`${this.URL}/authors`);
  }

  getAuthorById(id: string): Observable<APIResponse<Author>> {
    return this.http.get<APIResponse<Author>>(`${this.URL}/authors/${id}`);
  }

  postAuthor(author: Author): Observable<APIResponse<Author>> {
    return this.http.post<APIResponse<Author>>(
      `${this.URL}/authors`,
      author,
      this.httpOptions
    );
  }

  getBooks(): Observable<APIResponse<Book[]>> {
    return this.http.get<APIResponse<Book[]>>(`${this.URL}/books`);
  }

  getBookById(bookId: string): Observable<APIResponse<Book>> {
    return this.http.get<APIResponse<Book>>(`${this.URL}/books/${bookId}`);
  }

  postBook(book: Book): Observable<APIResponse<Book>> {
    return this.http.post<APIResponse<Book>>(
      `${this.URL}/books`,
      book,
      this.httpOptions
    );
  }

  getBooksReadByValue(
    type: string,
    id?: string,
    status?: BookReadStatus
  ): Observable<APIResponse<BookRead[]>> {
    return this.http.get<APIResponse<BookRead[]>>(
      `${this.URL}/booksRead/${type}/${id}${
        status ? `?readStatus=${status}` : ''
      }`,
      this.httpOptions
    );
  }

  postBookRead(bookRead: BookRead): Observable<APIResponse<BookRead>> {
    return this.http.post<APIResponse<BookRead>>(
      `${this.URL}/booksRead`,
      bookRead,
      this.httpOptions
    );
  }
}
