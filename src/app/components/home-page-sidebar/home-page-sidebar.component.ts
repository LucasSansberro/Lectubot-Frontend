import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Book } from 'src/app/models/Entities/Book';
import { BooksService } from 'src/app/services/books.service';
import { UpdateReadingStatusModalComponent } from '../update-reading-status-modal/update-reading-status-modal.component';

@Component({
  selector: 'app-home-page-sidebar',
  templateUrl: './home-page-sidebar.component.html',
  styleUrls: ['./home-page-sidebar.component.css'],
})
export class HomePageSidebarComponent {
  @Input() books: Book[] = [];

  constructor(private bookService: BooksService, private dialog: MatDialog) {}

  openUpdateReadingModal(book: Book) {
    this.dialog.open(UpdateReadingStatusModalComponent, {
      data: book,
    });
  }
  setSelectedBook(book: Book) {
    this.bookService.setSelectedBookInModal(book);
  }
}
