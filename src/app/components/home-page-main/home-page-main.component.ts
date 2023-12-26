import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Entities/Book';
import { Genre } from 'src/app/models/Enums/Genre';

@Component({
  selector: 'app-home-page-main',
  templateUrl: './home-page-main.component.html',
  styleUrls: ['./home-page-main.component.css'],
})
export class HomePageMainComponent implements OnInit {
  @Input() books: Book[] = [];
  renderizedBooks: Book[] = [];
  filteredGenres: string[] = [
    'Todos los géneros',
    'YA',
    'Clásicos',
    'Ciencia ficción',
  ];
  selectedFilter: string = 'Todos los géneros';

  ngOnInit(): void {
    this.renderizedBooks = this.books;
  }

  filterBooks(genre: string): void {
    this.selectedFilter = genre;
    switch (genre) {
      case 'YA':
        this.renderizedBooks = this.books.filter((book) =>
          book.genre.includes(Genre.youngAdult)
        );
        break;
      case 'Clásicos':
        this.renderizedBooks = this.books.filter((book) =>
          book.genre.includes(Genre.classic)
        );
        break;
      case 'Ciencia ficción':
        this.renderizedBooks = this.books.filter((book) =>
          book.genre.includes(Genre.scifi)
        );
        break;
      default:
        this.renderizedBooks = this.books;
    }
  }
}
