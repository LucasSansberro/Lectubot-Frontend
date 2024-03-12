import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap, catchError, throwError, concatMap, map } from 'rxjs';
import { Author } from 'src/app/models/Entities/Author';
import { Book } from 'src/app/models/Entities/Book';
import { BookRead } from 'src/app/models/Entities/BookRead';
import { DataService } from 'src/app/services/data.service';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-author-profile',
  templateUrl: './author-profile.component.html',
  styleUrl: './author-profile.component.css',
})
export class AuthorProfileComponent implements OnInit {
  author: Author | undefined;
  books: Book[] = [];
  booksInReadingStatus: Book[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private userService: UsersService
  ) {}
  ngOnInit(): void {
    this.getAuthorData();
    this.loadBooksInReadingStatus();
  }

  getAuthorData() {
    this.activatedRoute.params
      .pipe(
        switchMap((params) =>
          this.dataService.getAuthorById(params['autor-id']).pipe(
            switchMap((authorResponse) => {
              const authorData = authorResponse.data;
              return this.dataService
                .getBooksByValue('author', authorData?._id!)
                .pipe(
                  catchError((error) => {
                    Swal.fire(
                      'Error',
                      `Ocurrió un error al buscar los libros del autor. ${error}`,
                      'error'
                    );
                    return throwError(() => new Error(error));
                  }),
                  map((booksResponse) => ({
                    authorData,
                    books: booksResponse.data,
                  }))
                );
            })
          )
        ),
        catchError((error) => {
          Swal.fire(
            'Error',
            `Ocurrió un error al buscar al autor en la base de datos. ${error}`,
            'error'
          );
          return throwError(() => new Error(error));
        })
      )
      .subscribe({
        next: ({ authorData, books }) => {
          this.author = authorData!;
          this.books = books!;
        },
      });
  }
  loadBooksInReadingStatus() {
    if (this.userService.booksInReadingStatus.length == 0) {
      this.userService.booksInReadingData$.subscribe(
        (booksInReading: BookRead[]) => {
          this.booksInReadingStatus = booksInReading.map(
            (book) => book.book_id as Book
          );
        }
      );
    } else {
      this.booksInReadingStatus = this.userService.booksInReadingStatus.map(
        (book) => book.book_id as Book
      );
    }
  }
  isBookInReadingStatus(book: Book): boolean {
    return this.booksInReadingStatus.some((b) => b._id === book._id);
  }
}
