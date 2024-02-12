import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/Entities/Book';

@Component({
  selector: 'app-home-page-book-card',
  templateUrl: './home-page-book-card.component.html',
  styleUrl: './home-page-book-card.component.css',
})
export class HomePageBookCardComponent {
  @Input() book!: Book;
}
