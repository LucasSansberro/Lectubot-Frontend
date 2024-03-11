import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap, catchError, throwError } from 'rxjs';
import { Author } from 'src/app/models/Entities/Author';
import { Book } from 'src/app/models/Entities/Book';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-author-profile',
  templateUrl: './author-profile.component.html',
  styleUrl: './author-profile.component.css',
})
export class AuthorProfileComponent implements OnInit {
  author: Author | undefined;
  books: Book[] = [];
  test: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((params) =>
          this.dataService.getAuthorById(params['autor-id'])
        ),
        tap((resp) => (this.author = resp.data!)),
        switchMap((resp) =>
          this.dataService.getBooksByValue('author', resp.data?._id!)
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
      .subscribe((resp2) => console.log(resp2));
  }
}
