import { Component, ElementRef, ViewChild } from '@angular/core';
import { Book } from 'src/app/models/Entities/Book';
import { BooksService } from 'src/app/services/books.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-reading-status-modal',
  templateUrl: './update-reading-status-modal.component.html',
  styleUrl: './update-reading-status-modal.component.css',
})
export class UpdateReadingStatusModalComponent {
  @ViewChild('closeButton') closeButton!: ElementRef;
  constructor(private bookService: BooksService) {}

  startReading() {
    this.bookService.postBookRead(this.bookService.selectedBook)
    this.showAlert(
      'Comenzada la lectura!',
      'El libro se agregó a tu lista de lectura'
    );
    this.closeModal();
  }

  showAlert(title: string, text: string) {
    Swal.fire({
      title,
      text,
      icon: 'success',
    });
  }

  closeModal() {
    (this.closeButton.nativeElement as HTMLElement).click();
  }
}
