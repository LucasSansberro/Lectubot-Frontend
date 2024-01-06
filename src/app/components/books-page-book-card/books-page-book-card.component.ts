import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/Entities/Book';

@Component({
  selector: 'app-books-page-book-card',
  templateUrl: './books-page-book-card.component.html',
  styleUrl: './books-page-book-card.component.css',
})
export class BooksPageBookCardComponent {
  @Input() book!: Book;
}
