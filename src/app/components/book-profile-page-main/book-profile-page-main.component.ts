import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/Entities/Book';

@Component({
  selector: 'app-book-profile-page-main',
  templateUrl: './book-profile-page-main.component.html',
  styleUrl: './book-profile-page-main.component.css',
})
export class BookProfilePageMainComponent {
  @Input() book!: Book;

  constructor(private router: Router) {}

  redirectToAuthorPage(authorId: string) {
    this.router.navigate(['/autor', authorId]);
  }
}
