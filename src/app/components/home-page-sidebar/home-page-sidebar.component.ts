import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/Entities/Book';

@Component({
  selector: 'app-home-page-sidebar',
  templateUrl: './home-page-sidebar.component.html',
  styleUrls: ['./home-page-sidebar.component.css'],
})
export class HomePageSidebarComponent {
  @Input() books: Book[] = [];

  constructor(private router: Router) {}

  redirectToAuthorPage(authorId: string) {
    this.router.navigate(['/autor', authorId]);
  }
}
