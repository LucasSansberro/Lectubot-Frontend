import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    this.activatedRoute.params.subscribe((params) => {
      this.dataService.getAuthorById(params['autor-id']).subscribe({
        next: (resp) => {
          this.test = {
            _id: resp.data?._id,
            name: resp.data?.name,
          },
          ((this.author = resp.data!));
          this.dataService
            .getBooksByValue('author',this.test)
            .subscribe({
              next: (resp2) => console.log(resp2),
            });
        },
        error: (resp) => {
          Swal.fire(
            'Error',
            `Ocurrió un error al buscar al autor en la base de datos. ${resp.error}`,
            'error'
          );
        },
      });
    });
  }
}
