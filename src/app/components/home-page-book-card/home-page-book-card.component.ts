import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/Entities/Book';

@Component({
  selector: 'app-home-page-book-card',
  templateUrl: './home-page-book-card.component.html',
  styleUrl: './home-page-book-card.component.css',
})
export class HomePageBookCardComponent {
  @Input() book!: Book;
  constructor(private router: Router){}

  redirectToBookPage(bookId : string) {
    this.router.navigate(['/libro', bookId])
  }
}
