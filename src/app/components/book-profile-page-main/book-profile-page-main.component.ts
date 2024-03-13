import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Entities/Book';

@Component({
  selector: 'app-book-profile-page-main',
  templateUrl: './book-profile-page-main.component.html',
  styleUrl: './book-profile-page-main.component.css',
})
export class BookProfilePageMainComponent {
  @Input() book: Book | undefined;
}
