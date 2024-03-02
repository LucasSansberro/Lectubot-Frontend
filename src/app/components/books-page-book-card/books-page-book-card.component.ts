import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Book } from 'src/app/models/Entities/Book';
import { UpdateReadingStatusModalComponent } from '../update-reading-status-modal/update-reading-status-modal.component';

@Component({
  selector: 'app-books-page-book-card',
  templateUrl: './books-page-book-card.component.html',
  styleUrl: './books-page-book-card.component.css',
})
export class BooksPageBookCardComponent {
  @Input() book!: Book;
  constructor(private dialog: MatDialog) {}

  openUpdateReadingModal(book: Book) {
    this.dialog.open(UpdateReadingStatusModalComponent, {
      data: book,
    });
  }
}
