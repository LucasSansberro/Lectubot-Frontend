import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/Entities/Book';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-profile',
  templateUrl: './book-profile.component.html',
  styleUrl: './book-profile.component.css',
})
export class BookProfileComponent implements OnInit {
  book!: Book;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    //TODO Crear token opaco para no andar mostrando el id de mongo en la url
    this.activatedRoute.params.subscribe((params) => {
      if (this.dataService.books.length == 0) {
        this.dataService.getBookById(params['libro-id']).subscribe({
          next: (resp) => {
            this.book = resp.data!;
          },
          error: (resp) => {
            Swal.fire(
              'Error',
              `Ocurrió un error al intentar conseguir el libro de la base de datos. Error: ${resp.error}`,
              'error'
            );
          },
        });
      } else {
        this.book = this.dataService.books.find(
          (book) => book._id == params['libro-id']
        )!;
      }
    });
  }
}
