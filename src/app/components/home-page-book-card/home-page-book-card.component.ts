import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Book } from 'src/app/models/Entities/Book';
import { UpdateReadingStatusModalComponent } from '../update-reading-status-modal/update-reading-status-modal.component';

@Component({
  selector: 'app-home-page-book-card',
  templateUrl: './home-page-book-card.component.html',
  styleUrl: './home-page-book-card.component.css',
})
export class HomePageBookCardComponent {
  @Input() book!: Book;
  @Input() readingBook: boolean = false;

  constructor(private dialog: MatDialog) {}
  openUpdateReadingModal(book: Book) {
    this.dialog.open(UpdateReadingStatusModalComponent, {
      data: { book, readingBook: this.readingBook },
    });
  }
}
