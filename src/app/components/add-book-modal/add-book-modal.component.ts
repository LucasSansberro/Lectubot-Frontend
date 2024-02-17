import { Component, Input } from '@angular/core';
import { Genre } from 'src/app/models/Enums/Genre';

@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
  styleUrl: './add-book-modal.component.css',
})
export class AddBookModalComponent {
  @Input() genres: string[] = [];
  constructor() {
    this.genres = Object.values(Genre);
  }
}
