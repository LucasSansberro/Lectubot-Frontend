import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Book } from 'src/app/models/Entities/Book';
import { UpdateReadingStatusModalComponent } from '../update-reading-status-modal/update-reading-status-modal.component';

@Component({
  selector: 'app-book-item-list',
  templateUrl: './book-item-list.component.html',
  styleUrl: './book-item-list.component.css'
})
export class BookItemListComponent {
@Input() book! : Book
@Input() readingStatus : boolean = false

constructor(private dialog: MatDialog) {}
openUpdateReadingModal(book: Book) {
  this.dialog.open(UpdateReadingStatusModalComponent, {
    data: { book, readingBook: this.readingStatus },
  });
}
}
