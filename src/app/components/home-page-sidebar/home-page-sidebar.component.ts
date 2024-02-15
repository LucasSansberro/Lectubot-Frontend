import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/Entities/Book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-home-page-sidebar',
  templateUrl: './home-page-sidebar.component.html',
  styleUrls: ['./home-page-sidebar.component.css'],
})
export class HomePageSidebarComponent {
  @Input() books: Book[] = [];

  constructor(private bookService: BooksService) {}

  setSelectedBook(book: Book) {
    this.bookService.setSelectedBookInModal(book);
  }
}
