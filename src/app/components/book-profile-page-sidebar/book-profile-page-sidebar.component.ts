import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/Entities/Book';

@Component({
  selector: 'app-book-profile-page-sidebar',
  templateUrl: './book-profile-page-sidebar.component.html',
  styleUrl: './book-profile-page-sidebar.component.css',
})
export class BookProfilePageSidebarComponent {
  @Input() book!: Book;
}
